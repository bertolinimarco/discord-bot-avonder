const helpCards = () => `Puoi estrarre una carta con \`Avonder carte <numero>\` o \`!c\`.

\`\`\`
!c                        - pesco 1 carta
!c <nomemazzo>            - pesco 1 carta dal mazzo <nomemazzo>
!c <numero>               - pesco <X> carte dal mazzo del canale
!c <numero> <nomemazzo>   - pesco <X> carte dal mazzo <nomemazzo>
!c mescola                - mescolo il mazzo del canale
!c mescola <nomemazzo>    - mescolo <nomemazzo>
!c rimuovi <nomemazzo>    - rimuovo <nomemazzo> dal gioco
!c mazzi                  - lista di tutti i mazzi in gioco
\`\`\`
NOTE: 
- **Niente spazi** nel \`<nomemazzo>\`
- Il mazzo viene mischiato automaticamente quando finiscono le carte.
`;

const helpDice = () => `Puoi tirare alcuni dadi scrivendomi \`Avonder tira <formatotiro>\` oppure utilizzando \`!t\` come comando veloce.

Il formato del tiro é:

\`<?X><tipo><?X><?modificatore><?X>\` 

dove "X" è un qualsiasi numero, e \`?\` è opzionale. (chiedimi maggiori info sui tipi di tiro con \`Avonder aiuto tipologie\`).

- Posso usare una serie di **modificatori** per i tuoi tiri, come _esplosione_, tieni-il-minore, tieni-il-maggiore, ecc. Chiedimi più info con \`Avonder aiuto modificatori\`.

\`\`\`
!t 1d20   - tiro 1d20
!t 2d8    - tiro 2d8
!t 3p6    - tiro 3d6, considero 5 e 6 come un successo
!t 2w6    - tiro 2d6 e un dado _Destino_ (per Savage Worlds)
!t f      - tiro 4 dadi FATE
\`\`\`

Puoi anche utilizzare gli operatori:
\`\`\`
!t 1d20+1   - tiro 1d20+1
!t 1d8-1d4  - Tiro 1d8 e sottraggo 1d4 dal risultato
!t 1d4*1d4  - Tiro 1d4 per due volte e moltiplico i risultati
!t 2d6!2    - Tiro 2d6 e divido il risultato per 2
\`\`\`

Puoi effettuare tiri consecutivi aggiungendo una virgola dopo ogni comando:
\`\`\`
!t 1d20+1, 1d8   - tiro 1d20+1 e 1d8
\`\`\`

**Più chiarezza?** Aggiungi un testo al tiro, con \`#<testo>\` 
\`\`\`
!t 1d20+1#colpire, 1d8#danni   - tiro 1d20 per colpire, e poi 1d8 per i danni
!t 1d20+12#salto dalla gradinata e afferro la corda
\`\`\`


`;
const helpCommands = () => `
\`\`\`
Comandi                        Cosa fanno
-----------------------------------------------------------
Avonder aiuto                  Info su tutti i comandi
  Avonder aiuto comandi        **Questa schermata**
  Avonder aiuto dadi           Spiego come funzionano i tiri di dado
  Avonder aiuto tipologie      Spiego le tipologie di tiro
  Avonder aiuto modificatori   Spiego i modificatori di tiro
  Avonder aiuto carte          Spiego funziona il mazzo di carte
  Avonder aiuto segreto        Spiego cosa posso fare in privato
Avonder genera                 Genero qualcosa
  Avonder genera png           Genero un PNG
  Avonder genera avventura     Genero un'idea per un'avventura
Avonder tira                   Tiro dadi
Avonder carta                  Pesco carte da un mazzo
Avonder segreto <comando>      Per risponderti in privato
\`\`\`
`;

const helpTypes = () => `Le tipologie di tiro sono \`d\`ado, \`p\`ool, \`w\`ild, e \`f\`ate.

I tiri di dado classici utilizzano il tipo \`d\`.\nQuesto tipo di tiro ti permette di schierare X dadi da X facce e di aggiungere di modificatori. Posso fare anche tiri tipo _esplosione_ oppure "tieni-il-maggiore" e "tieni-il-minore" (see \`Avonder aiuto modificatori\` per più info).
\`\`\`
!t 2d20      - tiro 2d20
\`\`\`

Per giochi tipo ***Storyteller*** e ***Shadowrun***, usa la tipologia \`p\`ool.\nTirerò una serie di dadi, contando tutti i risultati maggiori di un _numero chiave_ che ha un _incremento_ o un _successo_ e ti scriverò i risultati.
\`\`\`
!t 5p10     - tiro 5d10, considero 7 o più come "successo"
!t 5p10t8   - tiro 5d10, considero 8 o più come "successo"
\`\`\`

Per ***Savage Worlds***, puoi usare la tipologia \`w\`ild.\nIn questo caso aggiungerò automaticamente un d6 _destino_ e farò _esplodere_ il tiro (asso), o un dado _destino_ con un altro valore che mi chiederai (per ambientazioni tipo Interface Zero dove ci sono modificatori di questo tipo). Scrivimi \`Avonder aiuto modificatori\` per maggiori info.
\`\`\`
!t 1w8+2   - Tiro 1d8, aggiungo un d6 Destino e aggiungo +2 al totale
!t 1w8w8   - Tiro 1d8 e aggiungo un d8 Destino 
\`\`\`

Per ***FATE***, puoi usare la tipologia di tiro \`f\`ate.\nTirerò degli speciali dadi a 6 facce, ti mostrerò quali dadi ho tirato e i risultati ottenuti.
\`\`\`
!t f    - Effettua un tiro standard per FATE con 4 dadi
!t 5f   - Tiro 5 dadi FATE
!t f+2  - Tiro 4 dadi FATE e aggiungi +2
\`\`\`
`;

const helpModifiers = () => `Puoi dirmi di usare le tipologie di tiro: tieni-il-maggiore (\`k\`), tieni-il-minore (\`l\`), e _esplosione_ (\`!\`).
\`\`\`
!t 2d20k   - Tiro 2d20 e tieni il risultato più alto
!t 2d20l   - Tiro 2d20 e tieni il risultato più basso
!t 3d6!    - Tiro 3d6 e tiro ancora 1d6 per ogni "6"
\`\`\`

Quando vuoi usare "tieni-il-maggiore" e "tieni-il-minore" puoi anche tenerne più di uno:
\`\`\`
!t 3d20k2  - Tiro 3d20 e tieni i due risultati più alti
!t 3d20l2  - Tiro 3d20 e tieni i due risultati più bassi
\`\`\`

Per i dadi con _esplosione_, puoi impostare un numero "soglia" per stabilire quando devono farlo oltre al risultato massimo (di solito 4 per il d4, 6 per il d6, ecc...).
\`\`\`
!t 3d6!5   - tiro 3d6, e tiro un ulteriore d6 per ogni "5" o superiore
\`\`\`

Puoi anche impostare un limite per le _esplosioni_ ad un numero di volte stabilito
\`\`\`
!t 3d6!m2  - _esplode_ fino a 2 volte per ogni d6 tirato
\`\`\`
_Nota_: Farò _esplodere_ ogni dado solo 5 volte di fila, anche se è abbastanza raro che ciò avvenga.

Puoi anche combinare i modificatori. Ti scriverò i risultati nell'ordine che mi darai.
\`\`\`
!t 2d20!l   - Tiro 2d20 "exploding" e tieni solo il risultato più basso
\`\`\`

Per il dado _Destino_, se devi usarne uno con una dimensione diversa dal d6, puoi fare così:
\`\`\`
!t 2w6w8   - Tiro 2d6 "Destino" e 1d8 "Destino"
\`\`\`
`;

const helpPrivate = () => `Puoi scrivermi comandi in privato usando \`Avonder segreto <comando>\`
\`\`\`
Avonder segreto tira 1d20+2   - Tiro 1d20+2 e ti scrivo in privato il risultato
\`\`\`
- Puoi usare questa funzione in tutti i canali
- Ti risponderò in privato, anziché sul canale 🤫👀
- Non puoi usare abbreviazioni come \`!c\` e \`!t\`
`;

const helpGenerate = () => `Puoi chiedermi di generare qualcosa, ad esempio Avventure o PNG, utilizzando \`!g\` oppure \`Avonder genera <x>\`
\`\`\`
!g png        - genero un personaggio non giocante
!g avventura  - genero un'idea per un'avventura
\`\`\`
`;

const helpTopics = new Map([
  ["comandi", helpCommands],
  ["dadi", helpDice],
  ["tipologie", helpTypes],
  ["modificatori", helpModifiers],
  ["genera", helpGenerate],
  ["carte", helpCards],
  ["segreto", helpPrivate]
]);
/**
 * Handles the Avonder help interface.
 */
const handler = (params /*, author, guildId */) => {
  if (helpTopics.has(params)) return helpTopics.get(params)();

  return `Bentrovato viandante, in cosa posso esserti utile?\nPuoi scrivere \`Avonder aiuto <argomento>\`\n\n**Argomenti**: ${[
    ...helpTopics.keys()
  ]
    .map(topic => `\`${topic}\``)
    .join(", ")}
`;
};

module.exports = { handler };
