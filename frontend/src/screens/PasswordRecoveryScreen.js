import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../actions/userActions'

function PasswordRecoveryScreen(props) {
  const [email, setEmail] = useState('')

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/'
  
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch({email})
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push('/top-sellers')
    }
  }, [props.history, redirect, userInfo])
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="row center">Ricupero di Password</h1>
          <label htmlFor="email">Indirizzo email </label>
          <input
            type="email"
            id="email"
            placeholder="Inserici la tua email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary blu big" type="submit">
            Ricupera Password
          </button>
        </div>
        <div>
          <label />
        </div>
      </form>
    </div>
  )
}

export default withRouter(PasswordRecoveryScreen);