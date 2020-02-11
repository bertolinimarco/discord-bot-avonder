const generateAdventure = () => {
  const adventureTable = [
    { ID: 1, text: "I PG incontrano una carovana mercantile di alchimisti." },
    { ID: 2, text: "I PG incontrano una carovana mercantile di armaioli." }
  ];

  const getRandomAdventure =
    adventureTable[Math.floor(Math.random() * adventureTable.length)];
  return `${getRandomAdventure.text}`;
};

const generateNPC = () => {
  const npcNameTable = [
    { ID: 1, text: "Taur" },
    { ID: 2, text: "Malar" }
  ];
  const npmQuirkTable = [
    { ID: 1, text: "Possiede diversi gioielli meravigliosi" },
    { ID: 2, text: "Ha un piercing" }
  ];
  const npcTraitTable = [
    { ID: 1, text: "ha l'alito cattivo" },
    { ID: 2, text: "possiede un forte odore corporeo" }
  ];
  const npcMannerTable = [
    { ID: 1, text: "ha talento come cantante" },
    { ID: 2, text: "sa fischettare bene" }
  ];

  const getRandomNPCName =
    npcNameTable[Math.floor(Math.random() * npcNameTable.length)];
  const getRandomNPCQuirk =
    npmQuirkTable[Math.floor(Math.random() * npmQuirkTable.length)];
  const getRandomNPCTrait =
    npcTraitTable[Math.floor(Math.random() * npcTraitTable.length)];
  const getRandomNPCManner =
    npcMannerTable[Math.floor(Math.random() * npcMannerTable.length)];
  return `**${getRandomNPCName.text}** - ${getRandomNPCQuirk.text}, ${getRandomNPCTrait.text} e ${getRandomNPCManner.text}`;
};

const generateTopics = new Map([
  ["avventura", generateAdventure],
  ["png", generateNPC]
]);

/**
 * Handles the Avonder generate interface.
 */
const handler = (params /*, author, guildId */) => {
  if (generateTopics.has(params)) return generateTopics.get(params)();

  return `Cosa devo generare? \`Avonder genera <x> \` ${[
    ...generateTopics.keys()
  ]
    .map(topic => `\`${topic}\``)
    .join(", ")}

`;
};

module.exports = { handler };
