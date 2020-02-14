// Adventures
const generateAdventure = () => {
  const adventureTable = [
    {
      ID: 1,
      text:
        "Il clima inizia a farsi nuvoloso, e inizia a piovere molto forte. Continuare il viaggio diventa difficile per via di grandine, terremoti e altre calamità. Che sta succedendo?"
    },
    { ID: 2, text: "I PG incontrano una carovana mercantile di alchimisti..." },
    { ID: 3, text: "I PG incontrano una carovana mercantile di armaioli..." },
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
    {
      ID: 6,
      text: "Un contadino é ferito, su un lato della strada."
    },
    {
      ID: 7,
      text: "Un chierico errante cerca cibo e acqua."
    },
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
    }
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
    { ID: 1, text: "Ha una brutta acne" },
    { ID: 2, text: "Ha alcune cicatrici" },
    { ID: 3, text: "Occhi a mandorla" },
    { ID: 4, text: "Androgino" },
    { ID: 5, text: "Ha un alito orribile" },
    { ID: 6, text: "Ha occhi stanchi" },
    { ID: 7, text: "E' calvo" },
    { ID: 8, text: "E' quasi calvo" },
    { ID: 9, text: "E' ben piazzato" },
    { ID: 10, text: "Ha occhi cesposi" },
    { ID: 11, text: "Ha una cicatrice con una strana forma" },
    { ID: 12, text: "Ha occhi iniettati di sangue" },
    { ID: 13, text: "Ha gambe ricurve" },
    { ID: 14, text: "Porta capelli raccolti" },
    { ID: 15, text: "Tende a usare sempre il braccio destro" }
  ];
  const npcTraitTable = [
    { ID: 1, text: "crede che alcune fate lo osservino" },
    { ID: 2, text: "è un fanatico religioso" },
    { ID: 3, text: "possiede un morboso interesse per i vampiri" },
    { ID: 4, text: "ha paura dei coboldi" },
    { ID: 5, text: "odia la nobiltà" },
    { ID: 6, text: "appassionato di antichità e monili" },
    { ID: 7, text: "ha una nutrita collezione di francobolli" },
    { ID: 8, text: "é appassionato di libellule" },
    { ID: 9, text: "ha paura di _qualsiasi_ tipo di pesce" },
    { ID: 10, text: "possiede un compagno animale" },
    { ID: 11, text: "ha un cane" },
    { ID: 12, text: "ha un gatto" },
    { ID: 13, text: "é paziente e morigerato" },
    { ID: 14, text: "ha la fobia dei serpenti" },
    { ID: 15, text: "ha la fobia degli oceani" }
  ];
  const npcItemTable = [
    { ID: 1, text: "trasporta 10 metri di corda resistente" },
    { ID: 2, text: "trasporta una sacca con alcune candele" },
    { ID: 3, text: "trasporta una vecchia lanterna di rame" },
    { ID: 4, text: "trasporta alcuni fogli di carta" },
    { ID: 5, text: "trasporta una calda coperta decorata" },
    { ID: 6, text: "possiede una pozione di guarigione" },
    { ID: 7, text: "possiede due pozioni di guarigione" },
    { ID: 8, text: "possiede tre pozioni di guarigione" },
    { ID: 9, text: "possiede un paio di pozioni dalla forma strana" },
    { ID: 10, text: "porta una scatola di fiammiferi" },
    { ID: 11, text: "porta una spada arrugginita" }
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
        "**101 modi per cucinare una gelatina**\nUna raccolta di ricette interessanti tra cui un cocktail creato da un Cubo Gelatinoso, Mela con Melma Ocra e pudding salato"
    },
    {
      ID: 2,
      text:
        "**Fisiologia delle Creature Magiche**\nInformazioni sulla fisiologia di Beholders, Draghi, Unicorni e altri. E' pieno di diagrammi."
    },
    {
      ID: 3,
      text:
        "**Le Profezie**\nRacconti di grande avventura. Dopo un po' però, le pagine diventano bianche..."
    },
    {
      ID: 4,
      text:
        "**Come individuare un Mimic**\nConsigli tra cui _ascoltare il respiro degli oggetti_, e verificare se _rispondono al tocco_."
    },
    {
      ID: 5,
      text: "**La Fantastica Avventura di Bordrick**\nUn librogame nanico"
    },
    {
      ID: 6,
      text:
        "**Fra i Piani**\nIllustra diversi modi di viaggiare attraverso i Piani di esistenza."
    },
    {
      ID: 7,
      text:
        "**Delle Razze Mostruose**\nUn trattato che si occupa di stabilire se le razze _mostruose_ debbano o meno essere considerate al pari delle razze _civilizzate_."
    },
    {
      ID: 8,
      text:
        "**Quelli-di-fuori**\nUno strano diario personale di qualcuno che ha avuto una visione di sé come piccola statuina di plastica su un tavolo, accerchiata da una serie di figure simili a divinità che parlavano come se interpretassero un gruppo di avventurieri."
    },
    {
      ID: 9,
      text:
        "**Umano?**\nLa storia di un ogre che, anche se stupido, riesce a convincere tutti di essere in realtà un umano molto alto, che è diventato Re, successivamente scoperto e infine giustiziato."
    },
    {
      ID: 10,
      text:
        "**Luoghi da visitare prima di morire**\nIllustra un numero imprecisato di luoghi e monumenti, di una regione che non hai mai sentito nominare."
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
        "Ha la testa dorata, la coda d'oro. Non ha corpo. ||[Moneta d'oro]||"
    },
    {
      ID: 2,
      text:
        "Indossa una copertura di cuoio per tenersi in ordine. Ti trasporta in altri reami senza bisogno di un portale. ||[Libro]||"
    },
    {
      ID: 3,
      text: "Diventa rigido quando si asciuga. ||[Asciugamano]||"
    },
    {
      ID: 4,
      text:
        "Cosa ha due mani sulla propria faccia ma nessun braccio? ||[Orologio]||"
    },
    {
      ID: 5,
      text:
        "Molti mi hanno sentito, ma nessuno mi ha visto. Non rispondo, a meno che qualcuno mi parli prima. Cosa sono? ||[Eco]||"
    },
    {
      ID: 6,
      text:
        "Cosa non è vivo ma cresce, non respira ma abbisogna d'aria? ||[Fuoco]||"
    },
    {
      ID: 7,
      text:
        "Meglio vecchia che giovane, più sana è, più piccola è. ||[Ferita]||"
    },
    {
      ID: 8,
      text:
        "E' un fuoco che è meglio venga spento con le parole piuttosto che con l'acqua. ||[Desiderio]||"
    },
    {
      ID: 9,
      text:
        "Due amici che viaggiano insieme, uno praticamente inutile senza l'altro. ||[Stivali]||"
    },
    {
      ID: 10,
      text: "Sfamami e vivrò, dissetami e morirò. ||[Fuoco]||"
    }
  ];

  const getRandomRiddle =
    riddlesTable[Math.floor(Math.random() * riddlesTable.length)];
  return `${getRandomRiddle.text}`;
};

// Topics list for help command
const generateTopics = new Map([
  ["avventura", generateAdventure],
  ["png", generateNPC],
  ["libro", generateBook],
  ["enigma", generateRiddle]
]);

/**
 * Handles the Avonder generate interface.
 */
const handler = (params /*author, guildId */) => {
  if (generateTopics.has(params)) return generateTopics.get(params)();

  return `Cosa devo generare?\n**Argomenti**: ${[...generateTopics.keys()]
    .map(topic => `\`${topic}\``)
    .join(", ")}
`;
};

module.exports = { handler };
