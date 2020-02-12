// Adventures
const generateAdventure = () => {
  const adventureTable = [
    {
      ID: 1,
      text:
        "Il clima inizia a farsi nuvoloso, e inizia a piovere molto forte. Continuare il viaggio diventa difficile per via di grandine, terremoti e altre calamità. Che sta succedendo?"
    },
    { ID: 2, text: "I PG incontrano una carovana mercantile di alchimisti." },
    { ID: 3, text: "I PG incontrano una carovana mercantile di armaioli." },
    {
      ID: 4,
      text:
        "Un gruppo di schiavi fuggiti dalla loro prigionia corre a perdifiato scappando dalle fruste dei padroni che li stanno inseguendo."
    },
    {
      ID: 5,
      text:
        "Il gruppo incontra un altro gruppo di avventurieri con le fattezze del tutto simili alle loro."
    },
    { ID: 6, text: "Un contadino é ferito, su un lato della strada." },
    { ID: 7, text: "Un chierico errante cerca cibo e acqua." },
    {
      ID: 8,
      text:
        "Un cacciatore di taglie ferma il gruppo e chiede informazioni, ma non rivela il suo vero obiettivo."
    },
    {
      ID: 9,
      text:
        "Una piccola moneta trovata per terra sembra portare fortuna chi la possiede."
    },
    {
      ID: 10,
      text:
        "I PG incontrano una falsa carovana mercantile, formata da truffatori che vendono falsi oggetti magici."
    },
    {
      ID: 11,
      text:
        "Un cartografo chiede al gruppo informazioni e caratteristiche sulle zone che hanno frequentato, in cambio di denaro."
    },
    {
      ID: 12,
      text: "Un ragazzino chiede autografi ad un membro del gruppo."
    },
    {
      ID: 13,
      text:
        "Un fanatico avvolto negli stracci che, delirando, annuncia la fine del mondo _Per Mano Di Colui Che Tutto Vede_"
    },
    {
      ID: 14,
      text: "Un gruppo di zombie non ostili diretti verso una meta sconosciuta."
    },
    {
      ID: 15,
      text:
        "Un ladro propone al gruppo di seguirlo per una razzia in un villaggio abbandonato."
    },
    {
      ID: 16,
      text:
        "Un antico e potente drago passa sopra la testa dei PG dirigendosi verso una meta sconosciuta."
    },
    {
      ID: 17,
      text:
        "I personaggi intravedono un unicorno in lontananza e tutte le loro malattie vengono curate magicamente."
    },
    {
      ID: 18,
      text:
        "Un meteorite vola sopra la testa dei personaggi e si schianta poco lontano."
    },
    {
      ID: 19,
      text:
        "Un personaggio si accorge di essere stato borseggiato da un ladro durante una visita precedente in una città."
    },
    {
      ID: 20,
      text:
        "I personaggi trovano un gruppo di persone intente a costruire un nuovo villaggio."
    },
    {
      ID: 21,
      text:
        "I personaggi passano davanti ad un'antica torre magica, senza un apparente proprietario. All'interno, trovano un laboratorio arcano completo ma nessuna traccia del mago."
    },
    {
      ID: 22,
      text:
        "Uno strano portale mai visto prima si apre a lato della strada, ma la sua destinazione è sconosciuta."
    },
    {
      ID: 23,
      text:
        "Un personaggio riceve un invito a far parte di un prestigioso gruppo scelto di avventurieri."
    },
    {
      ID: 24,
      text:
        "Una nuvola di frecce sorpassa di un soffio la testa di un personaggio. Sono state lanciate per sbaglio da un ragazzino che vorrebbe diventare un avventuriero."
    },
    {
      ID: 25,
      text: "I personaggi scoprono un lembo di terra insolitamente fertile."
    },
    {
      ID: 26,
      text:
        "I personaggi vengono rapiti da alcuni potenti banditi, e imprigionati con riscatto insieme ad altre personalità locali."
    },
    {
      ID: 27,
      text: "I personaggi sono vittima di un'imboscata di un gruppo di banditi."
    },
    {
      ID: 28,
      text: "I personaggi sono vittima di un'imboscata di un gruppo di orchi."
    },
    {
      ID: 29,
      text: "I personaggi sono vittima di un'imboscata di un gruppo di vampiri."
    },
    { ID: 30, text: "Un nobile incrocia il cammino del gruppo." },
    {
      ID: 31,
      text:
        "Un gruppo di goblin a lato della strada sta effettuando una cerimonia funebre per un loro potente leader."
    },
    {
      ID: 32,
      text:
        "Un menestrello cerca di intrattenere il gruppo offrendo storie, canti e racconti di eroi e mostri."
    },
    {
      ID: 33,
      text:
        "Un mago offre ai PG una sfida, al costo di una moneta d'oro (anticipata). La sfida consiste nello scegliere una cesta davanti al mago: una contiene un tesoro, l'altra invece nulla. In realtà sono entrambe vuote."
    },
    {
      ID: 34,
      text:
        "Dove dovrebbe trovarsi una città, invece c'è una enorme voragine, con un accesso al sottosuolo."
    },
    {
      ID: 35,
      text:
        "Una città è stata conquistata da un gruppo di potenti avventurieri."
    },
    {
      ID: 36,
      text:
        "I personaggi incontrano un potente eroe nella taverna di uno sperduto villaggio di frontiera."
    },
    { ID: 37, text: "Un bambino si è perso e chiede aiuto ai personaggi." },
    {
      ID: 38,
      text:
        "Nessuna carovana né viaggiatore si è visto tornare da un villaggio. Cosa è successo?"
    },
    {
      ID: 39,
      text:
        "Un suonatore di flauto attraversa la strada, seguito da 20 bambini."
    },
    {
      ID: 40,
      text:
        "Dopo una frana, si scopre una grotta che conduce in profondità, verso una porta di pietra. Cosa contiene e perché era stata sepolta?"
    },
    {
      ID: 41,
      text:
        "Una donna compare nuda uscendo da un cespuglio a lato della strada. I personaggi saranno i suoi salvatori o le sue vittime?"
    },
    {
      ID: 42,
      text:
        "Un anziano avventuriero errante sostiene di essere immortale, e cerca di togliersi la vita senza successo. Cosa lo rende immortale e qual è la storia di costui?"
    },
    {
      ID: 43,
      text:
        "Si dice che all'interno del pozzo di un villaggio sia intrappolato un genio che esaudisce i desideri di chiunque getti un oggetto magico come tributo."
    },
    {
      ID: 44,
      text:
        "Un coboldo cerca di istruire i personaggi sulle qualità del suo potente _Maestro_ dragone."
    },
    {
      ID: 45,
      text:
        "Un personaggio contrae una misteriosa malattia dopo aver mangiato ad una taverna di paese."
    }
  ];
  const generateAdventure =
    adventureTable[Math.floor(Math.random()) * adventureTable.length];
  return `${generateAdventure.text}`;
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
