import React, { useState } from 'react'


export default function Newsletter(){
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    window.confirm("Sezione in fase di sviluppo, email non registrato nel db.")
  }
  return (
    <div className="squeeze">
      <div className="newsletter">
        <h1 className="row center">Vorremo invitarti alla inagurazione delle pagine_azzurre.net</h1>
        <p style={{textAlign:"justify"}}>
          Nei team delle pagine_azzurre.it e valazco.it pensiamo che tutti abbiamo il diritto (anche il obbligo) di cercare di migliorare il mondo.
          E visto che siamo sicuri che le pagine azzurre sarà qualcosa che ci avvicinerà a avvere un mondo più bello e pensato meglio. Vorremmo offrire la possibilità alle più persone possibile di iniziare tutti insieme questa nuova avventura per ripensare l'economia.
        </p>
        
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h2 className="row center">Iscrivitti alla nostra Newsletter</h2>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              placeholder="Inserici il tuo nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Inserici la tua email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label />
            <button className="primary blu big" type="submit">
              Iscriviti alla Newsletter
            </button>
          </div>
          <div>
            <label />
          </div>
        </form>
      </div>
    </div>
  )
}