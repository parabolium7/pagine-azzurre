let msgRegistration = (recipient) => {
  let msg = { 
    to: recipient,
    from: "g.lugo.dev@gmail.com",
    subject: 'Benvenuto alle Pagine Azzurre',
    text: 'Buongiorno/Ciao nuovo Fruitore:\n\n\
           Benvenuto con Noi nelle PAGINE AZZURRE. Ti sei registrato con successo.\n\
           Aderisci e usufruisci della convenzione: VALorizza le AZioni che COncordi.\n\
           Ora puoi partecipare con le tue proposte, inserisci le cose che vuoi mettere\n\
           in scambio e hai piacere ti siano richieste. Esponi  richieste di cose e servizi\n\
           che cerchi, e avresti piacere di trovare. Ti auguriamo Buoni scambi.\n\
           Dove c\'è scambio c\'è vita, ancor meglio se con meno Euro.\n\
           Ricordati di riconoscere un minimo di ringraziamento in VAL nello scambio di volontari\n\
           doni e servizi senza euro.\n\n\
           I Cittadini Volontari (NOI VOI) ringraziano della registrazione e collaborazione.',
    html: '<p>Buongiorno/Ciao Nuovo Fruitore:</p></br>\
           <p>Benvenuto con Noi nelle PAGINE AZZURRE. Ti sei registrato con successo.</br>\
           Aderisci e usufruisci della convenzione: VALorizza le AZioni che COncordi.</br>\
           Ora puoi partecipare con le tue proposte, inserisci le cose che vuoi mettere</br>\
           in scambio e hai piacere ti siano richieste. Esponi  richieste di cose e servizi</br>\
           che cerchi, e avresti piacere di trovare. Ti auguriamo Buoni scambi.</br>\
           Dove c\'è scambio c\'è vita, ancor meglio se con meno Euro.</br>\
           Ricordati di riconoscere un minimo di ringraziamento in VAL nello scambio di volontari</br>\
           doni e servizi senza euro.</p></br>\n\
           I Cittadini Volontari (NOI VOI) ti ringraziano della registrazione e collaborazione.'
  }
  console.log("From mailMsg!", msg)
  return msg 
}
// TODO: To Andrei.
let msgPasswordRecovery = (recipient) => {
  let msg = { 
    to: recipient,
    from: 'g.lugo.dev@gmail.com',
    subject: 'Pagine Azzurre Richiesta cambio Password',
    text: 'Hai chiesto un cambio di password? Clicca il link per confermare, puoi ti arrivera una password provisionale che dovrai cambiare al primo accesso',
    html: '<p>Hai chiesto un cambio di password? Clicca il link per confermare, puoi ti arrivera una password provisionale che dovrai cambiare al primo accesso</p}>'
  }
  console.log("From mailMsg!", msg)
  return msg 
}

export { msgRegistration, msgPasswordRecovery }