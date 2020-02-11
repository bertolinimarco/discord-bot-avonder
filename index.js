const Discord = require("discord.js");
const client = new Discord.Client();
const commands = require("./lib/commands");

// Ready
client.once("ready", () => {
  console.log("✅🧙 Pronto.");
  console.log(
    `Link x aggiungermi ad un server: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8192`
  );
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

  // Greetings
  if (
    response.params === "ciao" ||
    response.params === "Ciao" ||
    response.params === "hey" ||
    response.params === "ehi" ||
    response.params === "hi"
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
        case "channel":
          await message.channel.send(
            `<@${message.author.id}> ${response.body}`
          );
          break;
        case "dm":
          if (message.channel.type !== "dm")
            await message.channel.send(
              `<@${message.author.id}> Ti ho risposto in privato per \`${response.params}\``
            );
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
//     "Benvenuto su Aumyr, ${member}. Sono **Avonder**, la tua guida su Aumyr.\n\nPresentati sul canale #welcome oppure vai direttamente su un canale e parliamo!\n\nA proposito: leggi cosa posso fare scrivendo `Avonder aiuto`"
//   );
// });

client.login(process.env.DISCORD_TOKEN);
