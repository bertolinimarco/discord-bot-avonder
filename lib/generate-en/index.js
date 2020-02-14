var adventureTable = require("../../data/en/adventures.json");
var npcNameTable1 = require("../../data/en/npcNames1.json");
var npcNameTable2 = require("../../data/en/npcNames2.json");
var npcPhysicalTable = require("../../data/en/npcPhysicals.json");
var npcTraitTable = require("../../data/en/npcTraits.json");
var npcItemTable = require("../../data/en/npcItems.json");
var booksTable = require("../../data/en/books.json");
var riddlesTable = require("../../data/en/riddles.json");

// Adventures
const generateAdventure = () => {
  const getRandomAdventure =
    adventureTable[Math.floor(Math.random() * adventureTable.length)];
  return `${getRandomAdventure.text}`;
};

// NPCs
const generateNPC = () => {
  const getRandomNPCName1 =
    npcNameTable1[Math.floor(Math.random() * npcNameTable1.length)];
  const getRandomNPCName2 =
    npcNameTable2[Math.floor(Math.random() * npcNameTable2.length)];
  const getRandomNPCPhysical =
    npcPhysicalTable[Math.floor(Math.random() * npcPhysicalTable.length)];
  const getRandomNPCTrait =
    npcTraitTable[Math.floor(Math.random() * npcTraitTable.length)];
  const getRandomNPCItem =
    npcItemTable[Math.floor(Math.random() * npcItemTable.length)];

  const getNPCName = getRandomNPCName1.text + getRandomNPCName2.text;
  return `**${getNPCName}**\n${getRandomNPCPhysical.text}, ${getRandomNPCTrait.text} e ${getRandomNPCItem.text}`;
};

// Books
const generateBook = () => {
  const getRandomBook =
    booksTable[Math.floor(Math.random() * booksTable.length)];
  return `${getRandomBook.text}`;
};

// Riddle
const generateRiddle = () => {
  const getRandomRiddle =
    riddlesTable[Math.floor(Math.random() * riddlesTable.length)];
  return `${getRandomRiddle.text}`;
};

// Topics list for help command
const generateTopics = new Map([
  ["adventure", generateAdventure],
  ["npc", generateNPC],
  ["book", generateBook],
  ["riddle", generateRiddle]
]);

/**
 * Handles the Avonder generate interface.
 */
const handler = (params /*author, guildId */) => {
  if (generateTopics.has(params)) return generateTopics.get(params)();

  return ``;
};

module.exports = { handler };
