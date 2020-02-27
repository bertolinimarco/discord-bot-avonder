const Discord = require("discord.js");
const client = new Discord.Client();
const commands = require("./src/commands");
const getVersion = require("./package.json");

// Ready
client.once("ready", () => {
  console.log("✅🧙 Pronto.");
  // console.log(
  //   `Aggiungi con: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8192`
  // );
  // client.user.setPresence({
  //   game: {
  //     name: "`Avonder aiuto/help`",
  //     type: "LISTENING"
  //   }
  // });
  // client.user.setActivity(`Aumyr e ${client.guilds.size} altri reami`);
  // Promise.all(
  //   [...client.guilds.values()].map(guild => {
  //     if (guild.systemChannel)
  //       return guild.systemChannel.send(
  //         "Eccomi. Scrivi `Avonder aiuto` per sapere cosa posso fare."
  //       );
  //     return Promise.resolve();
  //   })
  // );
  // client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

// var swearWords = ["cazzo", "fanculo"];
// if (swearWords.some(word => message.content.includes(word))) {
//   message.reply("Ehi ehi...");
//   // Or just do message.delete();
// }
// // React when mentioned
// else if (message.content.includes("Avonder")) {
//   message.reply("Chiamato? Puoi invocarmi scrivendo `Avonder aiuto`");
// }

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
  }

  // Purge latest 20 messages
  else if (response.params === "clean20") {
    message.channel.bulkDelete(20).catch(error => console.error(`${error}`));
  }
  // Command types
  else if (response) {
    try {
      if (message.channel.type !== "dm") await message.delete();
    } catch (e) {
      console.error("Non posso cancellare questo messaggio:", e.message);
    }
    try {
      let dm;
      switch (response.target) {
        // Embeds
        case "embed":
          if (response.params === "genera" || response.params === "generate") {
            break;
          } else if (response.params === "genera libro") {
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
        // Message in channel
        // Embed Help
        case "embedHelp":
          if (response.params === "aiuto") {
            var embedHelpTitle = "Aiuto";
          } else if (response.params === "help") {
            var embedHelpTitle = "Help";
          }
          const createEmbedHelp = new Discord.RichEmbed()
            .setTitle(embedHelpTitle)
            .setDescription(response.body)
            .setFooter(getVersion.version);
          await message.author.send(createEmbedHelp);
          break;
        case "channel":
          await message.channel.send(
            `<@${message.author.id}> ${response.body}`
          );
          break;
        // Message in private
        case "dm":
          if (message.channel.type !== "dm")
            // await message.channel.send(
            //   `<@${message.author.id}> Ti ho risposto in privato`
            // ); // Debug: \`${response.params}\`
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
client.on("guildMemberAdd", member => {
  member.send(
    "Benvenuto su Aumyr, ${member}. Sono **Avonder**, la tua guida.\n\nUsa il canale #welcome per presentarti oppure vai direttamente su un altro canale.\n\nA proposito: leggi cosa posso fare scrivendo `Avonder aiuto`\n\nWelcome, ${member}. I'm **Avonder**, your friendly guide.\n\nUse the #welcome channel to introduce yourself, or go directly in another channel.\n\nOh: see what I can do with: `Avonder help`"
  );
});

// // Creating channel
// client.on("channelCreate", function(channel) {
//   console.info(`channelCreate: ${channel}`);
// });

// // Deleting channel
// client.on("channelDelete", function(channel) {
//   console.info(`channelDelete: ${channel}`);
// });

client.login(process.env.DISCORD_TOKEN);
