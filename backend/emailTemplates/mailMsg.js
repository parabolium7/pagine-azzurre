let msgRegistration = (recipient, username) => {
  let now = new Date()
  let hrs = now.getHours()
  
  let moment = 'Salve'

  if(hrs < 12) moment = 'Buongiorno'
  if(hrs === 12) moment = 'Buon pomeriggio'
  if(hrs >= 13) moment = 'Buona sera'

  let msg = { 
    to: recipient,
    from: "g.lugo.dev@gmail.com",
    subject: `${username}, Benvenuto nelle Pagine Azzurre.`,
    html: `<p>${moment} ${username}:</p></br>\
           <p>Benvenuto con Noi nelle PAGINE AZZURRE. Ti sei registrato con successo.</br>\
           Aderisci e usufruisci della convenzione: VALorizza le AZioni che COncordi.</br>\
           Ora puoi partecipare con le tue proposte, inserisci le cose che vuoi mettere</br>\
           in scambio e hai piacere ti siano richieste. Esponi  richieste di cose e servizi</br>\
           che cerchi, e avresti piacere di trovare. Ti auguriamo Buoni scambi.</br>\
           Dove c\'è scambio c\'è vita, ancor meglio se con meno Euro.</br>\
           Ricordati di riconoscere un minimo di ringraziamento in VAL nello scambio di volontari</br>\
           doni e servizi senza euro.</p></br>\n\
           I Cittadini Volontari (NOI VOI) ti ringraziano della registrazione e collaborazione.</br>\n\
           </br>\n\
           NB: Questa è la versione beta delle pagine azzurre, pensata a essere visualizzata per
           un circolo stretto di amici per avere di loro sugerenze e dettetare bugs.
           Se questa email ti è arrivata per sbaglio per favore facci una segnalazione rispondendo
           al mitternte, cosi da cancellare la tua mail del db.` 
  }
  return msg 
}
// TODO: To Andrei.
let msgPasswordRecovery = (recipient) => {
  let msg = { 
    to: recipient,
    from: 'g.lugo.dev@gmail.com',
    subject: 'Pagine Azzurre Richiesta cambio Password',
    text: 'Hai chiesto un cambio di password? Clicca il link per confermare, puoi ti arrivera una password provisionale che dovrai cambiare al primo accesso',
    html: '<p>Hai chiesto un cambio di password? Clicca il link per confermare, puoi ti arrivera una password provisionale che dovrai cambiare al primo accesso</p>'
  }
  return msg 
}

let msgOrderNotificationToOfferer = (offerer, orderdetails, buyer) => {
  let msg = {
    to: offerer.email,
    from: "g.lugo.dev@gmail.com",
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
  console.log("Order Details", orderdetails)
  console.log("Buyer Phone", buyer[0].phone)
  console.log("Offerer", offerer)
  // console.log("orderdetails name", orderdetails.cartItems[0].name)
  // console.log("orderdetails product", orderdetails.cartItems[0].product)
  let msg = {
    to: buyer[0].email,
    from: "g.lugo.dev@gmail.com",
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
  console.log("Envelop:", envelop)
  let msg = {
    to: envelop.offerer.email,
    from: "g.lugo.dev@gmail.com",
    subject: `${envelop.offerer.name}, ${envelop.buyer} ti ha scrito un messagio."`,
    html: `<p>Buongiorno ${envelop.offerer.name},</p><br><p>Hai un messagio di ${envelop.buyer} relativo alla tua inserzione ${envelop.orderNames}</p><br><p>Messagio: ${envelop.emailBody}`
  }
  return msg
}

export { msgRegistration,
         msgPasswordRecovery,
         msgOrderNotificationToOfferer,
         msgOrderNotificationToBuyer,
         secondMailToOfferer  }