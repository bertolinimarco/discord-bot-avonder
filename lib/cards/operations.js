const pieces = require("../common/pieces");
const { playingCardSuits, playingCardFaces } = require("../common/constants");

const OP_FLIP = (module.exports.OP_FLIP = Symbol());

const getPack = (packs, packName) => {
  if (!packs.has(packName)) packs.set(packName, pieces.playingCardPack());
  return packs.get(packName);
};

const cardSuits = new Map([
  [playingCardSuits.SPADES, "\u2660"],
  [playingCardSuits.HEARTS, "\u2665"],
  [playingCardSuits.DIAMONDS, "\u2666"],
  [playingCardSuits.CLUBS, "\u2663"],
  [playingCardFaces.JOKER, "JOKER"]
]);

const cardValues = new Map([
  [2, "2"],
  [3, "3"],
  [4, "4"],
  [5, "5"],
  [6, "6"],
  [7, "7"],
  [8, "8"],
  [9, "9"],
  [10, "10"],
  [playingCardFaces.JACK, "J"],
  [playingCardFaces.QUEEN, "Q"],
  [playingCardFaces.KING, "K"],
  [playingCardFaces.ACE, "A"],
  [playingCardFaces.JOKER, ""]
]);

const formatCard = card =>
  `**\`${cardValues.get(card.value)}${cardSuits.get(card.suit)}\`**`;

const draw = (packs, packName, amount) => {
  let draws = [];
  let pack = getPack(packs, packName);
  for (let i = 0; i < amount; ++i) draws.push(pieces.playingCards(pack).result);
  return `\n${draws.map(formatCard).join(",")}\nMazzo **${packName}** - ${
    pack.stock.length
  } rimanenti`;
};

const list = packs => `Mazzi in gioco: **${[...packs.keys()].join(", ")}**`;

const removePack = (packs, packName) => {
  if (packName === "base") return " Non posso rimuovere il mazzo base";
  if (packs.has(packName)) {
    packs.delete(packName);
    return `Ho rimosso il mazzo **'${packName}'** dal gioco`;
  } else return `Nessun mazzo chiamato **'${packName}'**`;
};

const shufflePack = (packs, packName) => {
  const pack = getPack(packs, packName);
  pieces.shuffleDeck(pack);
  return `Ho mischiato il mazzo **${packName}**`;
};

module.exports.map = new Map([
  [OP_FLIP, draw],
  ["mescola", shufflePack],
  ["rimuovi", removePack],
  ["mazzi", list]
]);
