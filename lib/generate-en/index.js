var adventureTable = require("../../data/adventures.json");
var npcNameTable1 = require("../../data/npcNames1.json");
var npcNameTable2 = require("../../data/npcNames2.json");
var npcPhysicalTable = require("../../data/npcPhysicals.json");
var npcTraitTable = require("../../data/npcTraits.json");
var npcItemTable = require("../../data/npcItems.json");
var booksTable = require("../../data/books.json");
var riddlesTable = require("../../data/riddles.json");

// Adventures
const generateAdventure = () => {
  const getRandomAdventure =
    adventureTable[Math.floor(Math.random() * adventureTable.length)];
  return `${getRandomAdventure.textEN}`;
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
  return `**${getNPCName}**\n${getRandomNPCPhysical.textEN}, ${getRandomNPCTrait.textEN} and ${getRandomNPCItem.textEN}`;
};

// Books
const generateBook = () => {
  const getRandomBook =
    booksTable[Math.floor(Math.random() * booksTable.length)];
  return `${getRandomBook.textEN}`;
};

// Riddle
const generateRiddle = () => {
  const getRandomRiddle =
    riddlesTable[Math.floor(Math.random() * riddlesTable.length)];
  return `${getRandomRiddle.textEN}`;
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
