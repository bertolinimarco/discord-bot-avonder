/**
 * Handles the Avonder help interface.
 */
const handler = () => {
  return `Hey! Send me a message on the channel or let's talk here in private.

  **Roll dices**\n\`Avonder roll <x>\` or \`!r <x>\`

  \`2d20+3\` Roll 2d20+3
  \`3d6+6, 2d8\` Roll 3d6+6 then 2d8 (use the comma for multiple rolls)
  \`1d8-1d4\` Roll 1d8 and subtract 1d4 (funziona anche _dividi_ e _moltiplica_)
  \`2d20k\` Roll 2d20, keep the highest
  \`2d20l\` Roll 2d20, keep the lowest
  \`3d20k2\` Roll 3d20, keep the 2 highest
  \`3d20l3\` Roll 3d20, keep the 3 lowest
  \`3p6\` Roll 3d6, consider 5 and 6 as _success_
  \`5p10t8\` Roll 5d10, consider 8+ as _success_
  \`2w6\` Roll 2d6 and a _wild_ die
  \`2w6w8\` Roll 2d6 _wild_ die and a 1d8 _wild_ die
  \`f\` Roll standard Fudge/FATE
  \`5f\` Roll 5 Fudge/FATE dices
  \`5f+3\` Roll 5 Fudge/FATE dices and add 3
  \`3d6!\` Roll 3d6 and _explode_ 1d6 for each \`6\`
  \`3d6!5\` Roll 3d6 and another d6 for each \`5\` or more
  \`3d6!m2\` _explode_ max 2 times for each d6 rolled (also, max 5 times in a row, but it's rare...)

  _Combine_
  \`2d20!l\` Roll 2d20 _exploding_ dices and keep the lowest result

  _Comments_
  \`1d20+1#to hit, 1d8#damages\` Roll 1d20 to hit, then 1d8 for damage
  \`1d20+12#Make an "Athletics" check to jump over the rock\` :muscle:
  
  **Draw Cards**\n\`Avonder cards <n>\` or \`!c <x>\`

  \`5\` Draw 5 cards from a deck (there's always a _base_ deck).
  \`<deckname>\` Draw 1 card from <deckname> (create deck if not exist)
  \`<number>\` Draw <number> cards from deck
  \`<number> <deckname>\` Draw <number> cards from deck <deckname>
  \`mescola <deckname>\` Shuffle <deckname>
  \`rimuovi <deckname>\` Remove <deckname> from channel
  \`decks\` A list of active decks

  **Generate _something_**\n\`Avonder generate <x>\`

  \`adventure\` Generate an adventure hook, or idea
  \`npc\` NPC (Name, personality, traits)
  \`book\` Random book in a library (some of them are a _joke_)
  \`riddle\` Riddle (solution is in the "spoiler" tag)
  `;
};

module.exports = { handler };
