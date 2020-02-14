// Adventures
const generateAdventure = () => {
  const adventureTable = [
    { ID: 1, text: "Adventure in english 1" },
    { ID: 2, text: "English adventure 2" }
  ];

  const getRandomAdventure =
    adventureTable[Math.floor(Math.random() * adventureTable.length)];
  return `${getRandomAdventure.text}`;
};

// NPCs
const generateNPC = () => {
  const npcNameTable1 = [
    { ID: 1, text: "Ad" },
    { ID: 2, text: "Alle" },
    { ID: 3, text: "Aly" },
    { ID: 4, text: "Bled" },
    { ID: 5, text: "Beth" },
    { ID: 6, text: "Ele" },
    { ID: 7, text: "End" },
    { ID: 8, text: "Free" },
    { ID: 9, text: "Gad" },
    { ID: 10, text: "Galla" },
    { ID: 11, text: "Gwyn" },
    { ID: 12, text: "Heyd" },
    { ID: 13, text: "Lar" },
    { ID: 14, text: "Li" },
    { ID: 15, text: "Kwi" },
    { ID: 16, text: "Ky" },
    { ID: 17, text: "May" },
    { ID: 18, text: "Pa" },
    { ID: 19, text: "Pro" },
    { ID: 20, text: "Qwy" },
    { ID: 21, text: "Ol" },
    { ID: 22, text: "Ow" },
    { ID: 23, text: "Raz" },
    { ID: 24, text: "Ree" },
    { ID: 25, text: "Sha" },
    { ID: 26, text: "She" },
    { ID: 27, text: "Tam" },
    { ID: 28, text: "Tath" },
    { ID: 29, text: "Tind" },
    { ID: 30, text: "Ul" },
    { ID: 31, text: "Un" },
    { ID: 32, text: "Wyn" },
    { ID: 33, text: "Zaha" },
    { ID: 34, text: "Zel" },
    { ID: 35, text: "Zaa" },
    { ID: 36, text: "Be" },
    { ID: 37, text: "Bra" },
    { ID: 38, text: "Del" },
    { ID: 39, text: "Dra" },
    { ID: 40, text: "Ele" },
    { ID: 41, text: "Far" },
    { ID: 42, text: "Fis" },
    { ID: 43, text: "Ghol" },
    { ID: 44, text: "Gur" },
    { ID: 45, text: "Had" },
    { ID: 46, text: "Har" },
    { ID: 47, text: "Jor" },
    { ID: 48, text: "Kwa" },
    { ID: 49, text: "Lur" },
    { ID: 50, text: "Na" },
    { ID: 51, text: "Nu" },
    { ID: 52, text: "Oh" },
    { ID: 53, text: "Por" },
    { ID: 54, text: "Ra" },
    { ID: 55, text: "Rath" },
    { ID: 56, text: "Ru" },
    { ID: 57, text: "Sa" },
    { ID: 58, text: "So" },
    { ID: 59, text: "Sur" },
    { ID: 60, text: "Ta" },
    { ID: 61, text: "Telling" },
    { ID: 62, text: "Teth" },
    { ID: 63, text: "Tra" },
    { ID: 64, text: "Uld" },
    { ID: 65, text: "Ur" },
    { ID: 66, text: "Val" },
    { ID: 67, text: "Vo" },
    { ID: 68, text: "Why" },
    { ID: 69, text: "Wor" },
    { ID: 70, text: "Zal" }
  ];
  const npcNameTable2 = [
    { ID: 1, text: "aa" },
    { ID: 2, text: "ara" },
    { ID: 3, text: "dam" },
    { ID: 4, text: "daw" },
    { ID: 5, text: "de" },
    { ID: 6, text: "dura" },
    { ID: 7, text: "dyn" },
    { ID: 8, text: "eth" },
    { ID: 9, text: "ewn" },
    { ID: 10, text: "hara" },
    { ID: 11, text: "hyl" },
    { ID: 12, text: "ira" },
    { ID: 13, text: "ka" },
    { ID: 14, text: "kwen" },
    { ID: 15, text: "la" },
    { ID: 16, text: "law" },
    { ID: 17, text: "maa" },
    { ID: 18, text: "me" },
    { ID: 19, text: "na" },
    { ID: 20, text: "ne" },
    { ID: 21, text: "nira" },
    { ID: 22, text: "ra" },
    { ID: 23, text: "re" },
    { ID: 24, text: "rewn" },
    { ID: 25, text: "ru" },
    { ID: 26, text: "ryl" },
    { ID: 27, text: "sa" },
    { ID: 28, text: "sath" },
    { ID: 29, text: "sha" },
    { ID: 30, text: "shen" },
    { ID: 31, text: "ura" },
    { ID: 32, text: "wom" },
    { ID: 33, text: "wyl" },
    { ID: 34, text: "za" },
    { ID: 35, text: "zera" },
    { ID: 36, text: "al" },
    { ID: 37, text: "an" },
    { ID: 38, text: "bak" },
    { ID: 39, text: "bez" },
    { ID: 40, text: "brak" },
    { ID: 41, text: "bul" },
    { ID: 42, text: "dan" },
    { ID: 43, text: "dek" },
    { ID: 44, text: "dwar" },
    { ID: 45, text: "dwen" },
    { ID: 46, text: "dyn" },
    { ID: 47, text: "faz" },
    { ID: 48, text: "gez" },
    { ID: 49, text: "had" },
    { ID: 50, text: "hazar" },
    { ID: 51, text: "kun" },
    { ID: 52, text: "kwyl" },
    { ID: 53, text: "lan" },
    { ID: 54, text: "lyl" },
    { ID: 55, text: "mak" },
    { ID: 56, text: "razad" },
    { ID: 57, text: "rek" },
    { ID: 58, text: "rez" },
    { ID: 59, text: "run" },
    { ID: 60, text: "sal" },
    { ID: 61, text: "sath" },
    { ID: 62, text: "shek" },
    { ID: 63, text: "shaz" },
    { ID: 64, text: "teth" },
    { ID: 65, text: "wen" },
    { ID: 66, text: "wyl" },
    { ID: 67, text: "zed" },
    { ID: 68, text: "zek" },
    { ID: 69, text: "zen" },
    { ID: 70, text: "zol" }
  ];
  const npcPhysicalTable = [
    { ID: 1, text: "Has a bad acne" },
    { ID: 2, text: "Has some scars" },
    { ID: 3, text: "Has almond shaped eyes" },
    { ID: 4, text: "Is androgynus" },
    { ID: 5, text: "Has a orrible breath" },
    { ID: 6, text: "Has tired eyes" },
    { ID: 7, text: "Is bald" },
    { ID: 8, text: "Is balding" },
    { ID: 9, text: "Is barrel-chested" },
    { ID: 10, text: "Has beady eyes" },
    { ID: 11, text: "Has a birthmark" },
    { ID: 12, text: "Has bloodshot eyes" },
    { ID: 13, text: "Has bow legs" },
    { ID: 14, text: "Has braided hair" },
    { ID: 15, text: "Is branded on its arm" }
  ];
  const npcTraitTable = [
    { ID: 1, text: "believes that some fairies are watching him" },
    { ID: 2, text: "its a religious fanatic" },
    { ID: 3, text: "have a morbid fascination for Vampires" },
    { ID: 4, text: "has fear of cobolds" },
    { ID: 5, text: "hates the nobility" },
    { ID: 6, text: "love old trinkets and antiquities" },
    { ID: 7, text: "has a big collection of stamps" },
    { ID: 8, text: "is a firefly aficionado" },
    { ID: 9, text: "fears _any_ type of fish" },
    { ID: 10, text: "has an animal companion" },
    { ID: 11, text: "has a dog" },
    { ID: 12, text: "has a cat" },
    { ID: 13, text: "it's very patient" },
    { ID: 14, text: "has the phobia of snakes" },
    { ID: 15, text: "has the phobia of large oceans" }
  ];
  const npcItemTable = [
    { ID: 1, text: "carries 10 meters of robust rope" },
    { ID: 2, text: "carries a bag with some candles" },
    { ID: 3, text: "carries an old brass lantern" },
    { ID: 4, text: "carries some sheets of paper" },
    { ID: 5, text: "carries a warm and decorated cloth" },
    { ID: 6, text: "has a potion of healing" },
    { ID: 7, text: "has 2 potions of healing" },
    { ID: 8, text: "has 3 potions of healing" },
    { ID: 9, text: "carries two potions with a strange shape" },
    { ID: 10, text: "carries a box of matches" },
    { ID: 11, text: "has a rusted sword" }
  ];

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
  const booksTable = [
    {
      ID: 1,
      text:
        "**101 Ways to Cook an Ooze**\nInteresting recipes include gelatinous cube cocktail, ochre apple jelly, and salted pudding."
    },
    {
      ID: 2,
      text:
        "**Physiologies of Magical Creatures**\nInformation on the biology of Beholders, Dragons, Unicorns, and more. Full of diagrams."
    },
    {
      ID: 3,
      text:
        "**The Prophecies**\nTales of great adventures. Partway through, all the pages become blank."
    },
    {
      ID: 4,
      text:
        "**How to Spot a Mimic**\nTips such as listen _for breathing_, and see if it _responds to being touched_."
    },
    {
      ID: 5,
      text:
        "**Bordrick**s Fantastic Adventure**\nDwarven choose your own adventure book."
    },
    {
      ID: 6,
      text:
        "**Planeshifting**\nDetails different ways to travel between different planes of existence."
    },
    {
      ID: 7,
      text:
        "**On Monstrous Races**\nDiscusses whether _monstrous_ races should or should not be allowed into society."
    },
    {
      ID: 8,
      text:
        "**The Outside**\nA self-written account by someone you know who saw a vision of them self as a small plastic figurine on a table surrounded by a number of god-like beings after they talked to a group of adventurers."
    },
    {
      ID: 9,
      text:
        "**Human?**\nStory about an ogre who, despite his incompetence, convinced everyone that he was actually a very tall human, became a king, then was discovered and beheaded."
    },
    {
      ID: 10,
      text:
        "**Landmarks to Visit Before You Die**\nDetails a number of landmarks and monuments in a country or city you have never heard of."
    }
  ];

  const getRandomBook =
    booksTable[Math.floor(Math.random() * booksTable.length)];

  return `${getRandomBook.text}`;
};

// Riddle
const generateRiddle = () => {
  const riddlesTable = [
    {
      ID: 1,
      text:
        "It has a golden head. It has a golden tail. It has no body. ||A gold coin.||"
    },
    {
      ID: 2,
      text:
        "It wears a leather coat to keep its skins in working order. Escorts you to other realms, without a magic portal. ||Book||"
    },
    {
      ID: 3,
      text: "It dampens as it dries. ||Towel||"
    },
    {
      ID: 4,
      text: "What has two hands on its face but no arms? ||A clock||"
    },
    {
      ID: 5,
      text:
        "Many have heard me, yet nobody has seen me. I won’t speak back unless spoken to. What am I? ||An echo||"
    },
    {
      ID: 6,
      text:
        "What is not alive but grows, does not breaths but needs air. ||Fire||"
    },
    {
      ID: 7,
      text:
        "Better old than young; the healthier it is, the smaller it will be. ||A Wound||"
    },
    {
      ID: 8,
      text:
        "This fire is smothered best not by water or sand but by words. ||Desire||"
    },
    {
      ID: 9,
      text:
        "Two friends stand and travel together, one nearly useless without the other. ||Boots||"
    },
    {
      ID: 10,
      text: "Feed me and I will live, give me a drink and I will die. ||Fire||"
    }
  ];

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

  return `I can generate:\n**Arguments**: ${[...generateTopics.keys()]
    .map(topic => `\`${topic}\``)
    .join(", ")}
`;
};

module.exports = { handler };
