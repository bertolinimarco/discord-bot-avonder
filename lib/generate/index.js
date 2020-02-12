// Adventures
const generateAdventure = () => {
  const adventureTable = [
    { ID: 1, text: "I PG incontrano una carovana mercantile di alchimisti." },
    { ID: 2, text: "I PG incontrano una carovana mercantile di armaioli." }
  ];

  const getRandomAdventure =
    adventureTable[Math.floor(Math.random() * adventureTable.length)];
  return `${getRandomAdventure.text}`;
};

// // NPCs
// const generateNPC = () => {
//   const npcNameTable = [
//     { ID: 1, text: "1" },
//     { ID: 2, text: "2" }
//   ];
//   const npmQuirkTable = [
//     { ID: 1, text: "Possiede diversi gioielli meravigliosi" },
//     { ID: 2, text: "Ha un piercing" }
//   ];
//   const npcTraitTable = [
//     { ID: 1, text: "ha l'alito cattivo" },
//     { ID: 2, text: "possiede un forte odore corporeo" }
//   ];
//   const npcMannerTable = [
//     { ID: 1, text: "ha talento come cantante" },
//     { ID: 2, text: "sa fischettare bene" }
//   ];

//   const getRandomNPCName =
//     npcNameTable[getRandomElement() * npcNameTable.length];
//   const getRandomNPCQuirk =
//     npmQuirkTable[getRandomElement() * npmQuirkTable.length];
//   const getRandomNPCTrait =
//     npcTraitTable[getRandomElement() * npcTraitTable.length];
//   const getRandomNPCManner =
//     npcMannerTable[getRandomElement() * npcMannerTable.length];
//   return `**${getRandomNPCName.text}** - ${getRandomNPCQuirk.text}, ${getRandomNPCTrait.text} e ${getRandomNPCManner.text}`;
// };

// // Bard Songs
// const generateBardSong = () => {
//   const bardsongTable = [
//     { ID: 1, text: "Canzone 1" },
//     { ID: 2, text: "Canzone 2" }
//   ];

//   const getRandomBardSong =
//     bardsongTable[getRandomElement() * bardsongTable.length];
//   return `${getRandomBardSong.text}`;
// };

// Topics list for help command
const generateTopics = new Map([
  ["avventura", generateAdventure]
  // ["png", generateNPC],
  // ["canzone", generateBardSong]
]);

/**
 * Handles the Avonder generate interface.
 */
const handler = (params /*, author, guildId */) => {
  if (generateTopics.has(params)) return generateTopics.get(params)();

  return `Cosa devo generare?\n**Argomenti**: ${[...generateTopics.keys()]
    .map(topic => `\`${topic}\``)
    .join(", ")}
`;
};

module.exports = { handler };
