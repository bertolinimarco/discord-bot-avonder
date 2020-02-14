const Discord = require("discord.js");
const client = new Discord.Client();
const commands = require("./lib/commands");

// Ready
client.once("ready", () => {
  console.log("✅🧙 Pronto.");
  // console.log(
  //   `Link x aggiungermi ad un server: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8192`
  // );
  // Promise.all(
  //   [...client.guilds.values()].map(guild => {
  //     if (guild.systemChannel)
  //       return guild.systemChannel.send(
  //         "Eccomi. Scrivi `Avonder aiuto` per sapere cosa posso fare."
  //       );
  //     return Promise.resolve();
  //   })
  // );
});

// Messages
client.on("message", async message => {
  const response = commands.handle(message);

  // Do not interact with other bots
  if (message.author.bot) return;

  // Greetings
  if (
    response.params === "ciao" ||
    response.params === "Ciao" ||
    response.params === "hey" ||
    response.params === "ehi" ||
    response.params === "hi" ||
    response.params === "hello"
  ) {
    message.react("👋");
  } else if (response) {
    try {
      if (message.channel.type !== "dm") await message.delete();
    } catch (e) {
      console.error("Non posso cancellare questo messaggio:", e.message);
    }
    try {
      let dm;
      switch (response.target) {
        case "embed":
          if (response.params === "genera libro") {
            var embedColor = "#C76B00";
            var embedTitle = "Libro";
          } else if (response.params === "generate book") {
            var embedColor = "#C76B00";
            var embedTitle = "Book";
          } else if (response.params === "genera avventura") {
            var embedColor = "#602D81";
            var embedTitle = "Avventura";
          } else if (response.params === "generate adventure") {
            var embedColor = "#602D81";
            var embedTitle = "Adventure";
          } else if (response.params === "genera enigma") {
            var embedColor = "#000000";
            var embedTitle = "Enigma";
          } else if (response.params === "generate riddle") {
            var embedColor = "#000000";
            var embedTitle = "Riddle";
          } else if (response.params === "genera png") {
            var embedColor = "#67A7F2";
            var embedTitle = "PNG";
          } else if (response.params === "generate npc") {
            var embedColor = "#67A7F2";
            var embedTitle = "NPC";
          }
          const createEmbed = new Discord.RichEmbed()
            .setColor(embedColor)
            .setTitle(embedTitle)
            .setDescription(response.body);
          await message.channel.send(createEmbed);
          break;
        case "channel":
          await message.channel.send(
            `<@${message.author.id}> ${response.body}`
          );
          break;
        case "dm":
          if (message.channel.type !== "dm")
            await message.channel.send(
              `<@${message.author.id}> Ti ho risposto in privato`
            ); // Debug: \`${response.params}\`
          dm = await message.author.createDM();
          await dm.send(`${response.body}`);
          break;
      }
    } catch (e) {
      console.error("Non posso inviare il messaggio:", e);
    }
  }
});

// Send private welcome message to new members
// client.on("guildMemberAdd", member => {
//   member.send(
//     "Benvenuto su Aumyr, ${member}. Sono **Avonder**, la tua guida su Aumyr.\n\nUsa il canale #welcome per presentarti oppure vai direttamente su un altro canale.\n\nA proposito: leggi cosa posso fare scrivendo `Avonder aiuto`"
//   );
// });

client.login(process.env.DISCORD_TOKEN);
