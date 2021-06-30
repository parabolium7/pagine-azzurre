let msgRegistration = (recipient, username, isNewsletterRegistred) => {
  let now = new Date()
  let hrs = now.getHours()
  let msg

  let moment = 'Salve'

  if(hrs < 12) moment = 'Buongiorno'
  if(hrs === 12) moment = 'Buon pomeriggio'
  if(hrs >= 13) moment = 'Buona sera'

  
  if (isNewsletterRegistred === true) {
    msg = {
      to: recipient,
      from: "iscrizioni.pagineazzurre@cittadini-volontari.it",
      subject: `${username}, Benvenuto nelle Pagine Azzurre.`,
      html: `<p>${moment} ${username},</p></br>\
        <p>Benvenuta/o con noi nelle PAGINE AZZURRE. Ti sei registrato con successo.</br>\
        Aderisci e usufruisci della convenzione: VALorizza le AZioni che COncordi.</br>\
        Ora puoi partecipare con le tue proposte, inserisci le cose che vuoi mettere</br>\
        in scambio e hai piacere ti siano richieste. Esponi  richieste di cose e servizi</br>\
        che cerchi, e avresti piacere di trovare. Ti auguriamo Buoni scambi.</br>\
        Dove c\'è scambio c\'è vita, ancor meglio se con meno Euro.</br>\
        Ricordati di riconoscere un minimo di ringraziamento in VAL nello scambio di volontari</br>\
        doni e servizi senza euro.</p></br>\n\
        I Cittadini Volontari (NOI VOI) ti ringraziano della registrazione e collaborazione.</br>\n\
        </br>\n\
        Ti ricordiamo che sei inscrito alla nostra newsletter. </br>\n\
        NB: Questa è versione beta delle pagine azzurre, pensata per essere visualizzata e implementata</br>\n\
        per avere dagli amici e collaboratori suggerimenti e osservazioni su i bachi (Bugs! 🐛).</br>\n\
        Se questa email ti è arrivata per sbaglio, facci una segnalazione rispondendo</br>\n\
        al mittente, cosi da cancellare la tua email dal nostro database.</br>\n\
      `
      }
    } else {
      msg = {
        to: recipient,
        from: "iscrizioni.pagineazzurre@cittadini-volontari.it",
        subject: `${username}, Benvenuto nelle Pagine Azzurre.`,
        html: `<p>${moment} ${username},</p></br>\
        <p>Benvenuta/o con noi nelle PAGINE AZZURRE. Ti sei registrato con successo.</br>\
        Aderisci e usufruisci della convenzione: VALorizza le AZioni che COncordi.</br>\
        Ora puoi partecipare con le tue proposte, inserisci le cose che vuoi mettere</br>\
        in scambio e hai piacere ti siano richieste. Esponi  richieste di cose e servizi</br>\
        che cerchi, e avresti piacere di trovare. Ti auguriamo Buoni scambi.</br>\
        Dove c\'è scambio c\'è vita, ancor meglio se con meno Euro.</br>\
        Ricordati di riconoscere un minimo di ringraziamento in VAL nello scambio di volontari</br>\
        doni e servizi senza euro.</p></br>\n\
        I Cittadini Volontari (NOI VOI) ti ringraziano della registrazione e collaborazione.</br>\n\
        </br>\n\
        NB: Questa è versione beta delle pagine azzurre, pensata per essere visualizzata e implementata</br>\n\
        per avere dagli amici e collaboratori suggerimenti e osservazioni su i bachi (Bugs! 🐛).</br>\n\
        Se questa email ti è arrivata per sbaglio, facci una segnalazione rispondendo</br>\n\
        al mittente, cosi da cancellare la tua email dal nostro database.</br>\n\
        `
      }
    }
    return msg 
  }

let msgPasswordRecovery = (recipient, hash) => {
  let msg = { 
    to: recipient,
    from: 'iscrizioni.pagineazzurre@cittadini-volontari.it',
    subject: 'Pagine Azzurre: Richiesta cambio Password',
    text: `Hai chiesto un recupero/cambio di password? Per confermare clicca il seguente link http://pagineazzurre.net/password-recovery/${hash} . Se la domanda di recupero/cambio password non fosse stata da te richiesta, ignora questa email e non rispondere. 
    .`,
    html: `<p>Hai chiesto un cambio di password?  Per confermare clicca il seguente <a href="http://pagineazzurre.net/password-recovery/${hash}" target="_blank"}>Link</a> . In caso la richiesta cambio password no sia stata solicitata ignorare questo email.</p>`
  }
  return msg 
}

let msgPasswordReplaced = (recipient, name) => {
  let now = new Date()
  let hrs = now.getHours()

  let moment = 'Salve'

  if(hrs < 12) moment = 'Buongiorno'
  if(hrs === 12) moment = 'Buon pomeriggio'
  if(hrs >= 13) moment = 'Buona sera'
  
  let msg = { 
    to: recipient,
    from: 'iscrizioni.pagineazzurre@cittadini-volontari.it',
    subject: 'Pagine Azzurre: Password cambiata con successo',
    text: `Il cambio password e avvenuto con successo`,
    html: `<p>${moment} ${name}, il cambio password è avvenuto con successo.</p>`
  }
  return msg 
}

let msgOrderNotificationToOfferer = (offerer, orderdetails, buyer) => {
  let msg = {
    to: offerer.email,
    from: "iscrizioni.pagineazzurre@cittadini-volontari.it",
    subject: "Pagine Azzurre Notificazione d\'Ordine al offerente",
    html: `<p>Buongiorno ${offerer.username},</p><br><p><strong>Hai un nuovo ordine nelle pagine azzurre</strong></p><br><p>Nome annuncio: 
           ${orderdetails.orderItems[0].name}</p><p>Product ID: 
           ${orderdetails.orderItems[0].product}</p><p>Order id: 
           ${orderdetails._id}</p><p>Quantità: 
           ${orderdetails.orderItems[0].qty}</p><p>Prezzo in Val: ☯
           ${orderdetails.orderItems[0].priceVal}</p><p>Prezzo in Euro: €
           ${orderdetails.orderItems[0].priceEuro}</p><br><p><strong>Informazione del compratore</strong></p><br><p>Username: 
           ${buyer[0].username}</p><p>Email: 
           ${buyer[0].email}</p><p>Telefono: 
           ${ orderdetails.shippingAddress.phone !== buyer[0].email && orderdetails.shippingAddress.phone !== '' ? orderdetails.shippingAddress.phone : buyer[0].phone !== buyer[0].email ? buyer[0].phone : 'Non Disponibile'}</p>`
  }
  return msg
}

let msgOrderNotificationToBuyer = (buyer, orderdetails, offerer) => {
  let msg = {
    to: buyer[0].email,
    from: "iscrizioni.pagineazzurre@cittadini-volontari.it",
    subject: "Pagine Azzurre Notificazione d\'Ordine al compratore",
    html: `<p>Buongiorno ${buyer[0].username},</p><br><p><strong>Hai completato un nuovo ordine nelle pagine azzurre</strong></p><br><p>Nome annuncio: 
    ${orderdetails.orderItems[0].name}</p><p>Product ID: 
    ${orderdetails.orderItems[0].product}</p><p>Order id: 
    ${orderdetails.orderItems[0]._id}</p><p>Quantità: 
    ${orderdetails.orderItems[0].qty}</p><p>Prezzo in Val: ☯
    ${orderdetails.orderItems[0].priceVal}</p><p>Prezzo in Euro: €
    ${orderdetails.orderItems[0].priceEuro}</p><br><p><strong>Informazione del Offerente</strong></p><br><p>Username: 
    ${offerer.username}</p><p>Email: 
    ${offerer.email}</p><p>Telefono: 
    ${ offerer.phone !== offerer.email ? offerer.phone : 'Non Disponibile'}</p>`
    // ${orderdetails.shippingAddress.phone !== buyer[0].email && orderdetails.shippingAddress.phone !== '' ? 'Non disponible'}</p>`
  }
  return msg
}

let secondMailToOfferer = (envelop) => {
  let msg = {
    to: envelop.offerer.email,
    from: "iscrizioni.pagineazzurre@cittadini-volontari.it",
    subject: `${envelop.offerer.name}, ${envelop.buyer} ti ha scrito un messagio."`,
    html: `<p>Buongiorno ${envelop.offerer.name},</p><br><p>Hai un messagio di ${envelop.buyer} relativo alla tua inserzione ${envelop.orderNames}</p><br><p>Messagio: ${envelop.emailBody}`
  }
  return msg
}

let newsletterWelcome = (email, name) => {
  let msg = {
    to: email,
    from: "iscrizioni.pagineazzurre@cittadini-volontari.it",
    subject: `${name}, ti sei inscrito alla newsletter delle Pagine Azzurre?`,
    html: `<h3>${name}, grazie per esserti inscrita/o alla newsletter delle pagine Azzurre</h3>\
    <br>\
    <p>${name}, vogliamo tenerti sempre aggiornata/o con le ultime novità.</p>\
    <p>Ti ringraziamo di cuore per il tuo interesse al progetto.</p>\
    <p>Ti chiediamo di confermare clicando <a href="http://pagineazzurre.net/newsletter/${email}" target="_blank">qui</a>.</p>\
    <p>Se hai ricevuto questa email per errore ignòrala.</p>\
    `
  }
  return msg
}

export { msgRegistration,
         msgPasswordRecovery,
         msgOrderNotificationToOfferer,
         msgOrderNotificationToBuyer,
         secondMailToOfferer,
         msgPasswordReplaced,
         newsletterWelcome,
        }