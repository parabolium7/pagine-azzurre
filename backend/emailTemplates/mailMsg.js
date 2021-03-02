let msgRegistration = (recipient) => {
  let msg = { 
    to: recipient,
    from: "g.lugo.dev@gmail.com",
    subject: 'Benvenuto alle pagine Azzurre',
    text: 'Benvenuto alle pagine Azzurre ti sei registrato con Sucesso',
    html: '<p>Benvenuto alle pagine Azzurre ti sei <strong>Registrato con Sucesso</strong></p>'
  }
  console.log("From mailMsg!", msg)
  return msg 
}

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