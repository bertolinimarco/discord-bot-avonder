/**
 * Handles the Avonder help interface.
 */
const handler = () => {
  return `Eccomi! Scrivi un messaggio nel canale oppure parliamo in privato.

  **Tirare dadi**\n\`Avonder tira <x>\` oppure \`!t <x>\`

  \`2d20+3\` Tiro 2d20+3
  \`3d6+6, 2d8\` Tiro 3d6+6 e poi 2d8 (virgola per tiri multipli)
  \`1d8-1d4\` Tiro 1d8 e tolgo 1d4 (puoi usare \`+ - * /\`)
  \`2d20k\` Tiro 2d20, tengo il risultato più alto
  \`2d20l\` Tiro 2d20, tengo il risultato più basso
  \`3d20k2\` Tiro 3d20, tengo i 2 risultati più alti
  \`3d20l3\` Tiro 3d20, tengo i 3 risultati più bassi
  \`3p6\` Tiro 3d6, considero 5 e 6 come un _successo_
  \`5p10t8\` Tiro 5d10, considero 8+ come _successo_
  \`2w6\` Tiro 2d6 e un dado _Destino_
  \`2w6w8\` Tiro 2d6 _Destino_ e 1d8 _Destino_
  \`f\` Tiro standard Fudge/FATE
  \`5f\` Tiro 5 dadi Fudge/FATE
  \`5f+3\` Tiro 5 dadi Fudge/FATE e aggiungo 3
  \`3d6!\` Tiro 3d6 ed _esplodo_ 1d6 per ogni \`6\`
  \`3d6!5\` Tiro 3d6 e un altro d6 per ogni \`5\` o più
  \`3d6!m2\` _esplodo_ max 2 volte per ogni d6 (max 5 volte di fila, raro che avvenga)

  _Combina_
  \`2d20!l\` Tiro 2d20 con _esplodi_ e tengo solo il risultato più basso

  _Commenta_
  \`1d20+1#colpire, 1d8#danni\` Tiro 1d20 per colpire, e poi 1d8 per i danni
  \`1d20+12#check "Atletica" per saltare dalla gradinata\` :muscle:
  
  **Pescare Carte**\n\`Avonder carte <n>\` oppure \`!c <x>\`

  \`5\` Pesco 5 carte da un mazzo di carte (c'è _sempre_ un mazzo _base_).
  \`<nomemazzo>\` Pesco 1 carta dal mazzo <nomemazzo> (se non esiste, lo creo)
  \`<numero>\` Pesco <numero> carte dal mazzo
  \`<numero> <nomemazzo>\` Pesco <numero> carte dal mazzo <nomemazzo>
  \`mescola <nomemazzo>\` Mescolo <nomemazzo>
  \`rimuovi <nomemazzo>\` Rimuovo <nomemazzo> dal canale
  \`mazzi\` Un elenco dei mazzi presenti nel canale

  **Generare _qualcosa_**\n\`Avonder genera <x>\` oppure \`!g <x>\`

  \`avventura\` Avventura, situazione, idea, un evento...
  \`png\` Personaggio
  \`libro\` Libro
  \`enigma\` Indovinello (nello "spoiler" la soluzione)
  `;
};

module.exports = { handler };
