const dice = require("./dice");
const cards = require("./cards");
const parser = require("./parser");
const help = require("./help");
const generate = require("./generate");

const targetChannel = handler => (command, author, guildId) => ({
  body: handler(command, author, guildId),
  target: "channel"
});

/**
 * The long-form handler
 */
const avonder = {
  handler: (command, author, guildId) => {
    const [subcommand, rest] = parser.dropExclude(command, " ");
    switch (subcommand) {
      case "version":
        return {
          body: "0.9.5",
          target: "dm"
        };
      case "p":
      case "priv":
      case "segreto":
        return {
          ...avonder.handler(rest, author, guildId),
          target: "dm"
        };
      case "g":
      case "genera":
        return {
          body: generate.handler(rest, author, guildId),
          target: "embed"
        };
      case "t":
      case "r":
      case "tira":
        return { body: dice.handler(rest, author, guildId), target: "channel" };
      case "c":
      case "carte":
        return {
          body: cards.handler(rest, author, guildId),
          target: "channel"
        };
      case "h":
      case "aiuto":
        return { body: help.handler(rest, author, guildId), target: "dm" };
      default:
        return {
          body: `In che senso \`${command}\` ? Prova con \`Avonder aiuto\``,
          target: "dm"
        };
    }
  }
};

/**
 * Map of possible commands and associated handlers.
 */
const commands = new Map([
  ["!t", targetChannel(dice.handler)],
  ["!r", targetChannel(dice.handler)],
  ["!c", targetChannel(cards.handler)],
  ["!g", targetChannel(generate.handler)],
  ["Avonder", avonder.handler]
]);

/**
 * Looks up a command in the command Map.
 * @param {string} content message content
 */
function handle(message) {
  const { content, author, guild } = message;
  const guildId = guild ? guild.id : `dm-${message.author.id}`;
  try {
    const [command, params] = parser.dropExclude(content, " ");
    if (!commands.has(command)) return false;
    const handler = commands.get(command);
    if (handler)
      return { ...handler(params, author, guildId), command, params };
    return false;
  } catch (e) {
    console.error(e.message, content);
  }
}

module.exports = { handle };
