const dice = require("./dice");
const diceEN = require("./dice-en");
const cards = require("./cards");
const cardsEN = require("./cards-en");
const parser = require("./parser");
const help = require("./help");
const helpEN = require("./help-en");
const generate = require("./generate");
const generateEN = require("./generate-en");

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
          body: "0.9.6",
          target: "dm"
        };
      case "p":
      case "segreto":
      case "secret":
        return {
          ...avonder.handler(rest, author, guildId),
          target: "dm"
        };
      case "genera":
        return {
          body: generate.handler(rest, author, guildId),
          target: "embed"
        };
      case "generate":
        return {
          body: generateEN.handler(rest, author, guildId),
          target: "embed"
        };
      case "t":
      case "tira":
        return { body: dice.handler(rest, author, guildId), target: "channel" };
      case "r":
      case "roll":
        return {
          body: diceEN.handler(rest, author, guildId),
          target: "channel"
        };
      case "c":
      case "carte":
        return {
          body: cards.handler(rest, author, guildId),
          target: "channel"
        };
      case "cards":
        return {
          body: cardsEN.handler(rest, author, guildId),
          target: "channel"
        };
      case "aiuto":
        return {
          body: help.handler(rest, author, guildId),
          target: "dm"
        };
      case "help":
        return {
          body: helpEN.handler(rest, author, guildId),
          target: "dm"
        };
      default:
        return {
          body: `:thinking: \`${command}\`...\nProva con \`Avonder aiuto\` | Try with \`Avonder help\``,
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
  // ["!g", targetChannel(generate.handler)],
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
