import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import 'react-day-picker/lib/style.css';

export default function RegisterScreen(props) {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [birthplace, setBirthplace] = useState('');
  const [gender, setGender] = useState('');
  const [cf, setCf] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [referer, setReferer] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const CalFORMAT = 'dd/MM/yyyy';

  function parseDate(str, format, locale) {
    const parsed = dateFnsParse(str, format, new Date(), { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  }

  function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
  }

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const GetFormattedDate = (birthday) => {
    console.log("Get Birthday", birthday)
    if (typeof birthday === 'object') {
      var month = birthday.getMonth()
      var day = birthday.getDate()
      var year = birthday.getFullYear()
      console.log("Birthday", day, month, year)
      setBirthday(`${day}/${month}/${year}`)
    }
  }

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword && email !== confirmEmail) {
      alert('- Le Password non coincidono\n- Controlla la esatteza della email.');
    }
    else if (email !== confirmEmail) {
      alert('Controlla la esatteza della email.');
    }
    else if (password !== confirmPassword) {
      alert('Le Password non coincidono');
    } else {
      dispatch(register(username, name, surname, birthday, birthplace, gender, cf, email, city, zipCode, phone, referer, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="row center">Crea il tuo Account </h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="username">Username *</label>
          <input
            type="text"
            id="username"
            placeholder="Inserisci il username"
            required
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="name">Nome *</label>
          <input
            type="text"
            id="name"
            placeholder="Inserisci il nome"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="surname">Cognome *</label>
          <input
            type="text"
            id="surname"
            placeholder="Inserisci il cognome"
            required
            onChange={(e) => setSurname(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="gender">Genere *</label>
            <label htmlFor="male">
              <input type="radio" id="male" name="gender" value="M" onChange={(e) => setGender(e.target.value)}/>
              M
            </label>
            <label htmlFor="female">
              <input type="radio" id="female" name="gender" value="F" onChange={(e) => setGender(e.target.value)}/>
              F
            </label>
        </div>
        <div>
          <label htmlFor="birthday">Data di Nascita *</label>
          <DayPickerInput
          parseDate={parseDate}
          format={CalFORMAT}
          formatDate={formatDate}
          placeholder={`${dateFnsFormat(new Date(), CalFORMAT)}`}
          onDayChange={(e)=>GetFormattedDate(e)}
          />
        </div>
        <div>
          <label htmlFor="birthplace">Comune di Nascita *</label>
          <input
            type="text"
            id="birthplace"
            placeholder="Seleziona comune di nascita"
            required
            onChange={(e) => setBirthplace(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="cf">Codice Fiscale *</label>
          <input
            type="text"
            id="cf"
            placeholder="Inserisci il Codice Fiscale"
            required
            onChange={(e) => setCf(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Indirizzo Email *</label>
          <input
            type="email"
            id="email"
            placeholder="Inserisci email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Conferma Email *</label>
          <input
            type="email"
            id="confirmEmail"
            placeholder="Conferma email"
            required
            onChange={(e) => setConfirmEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="city">Città *</label>
          <input
            type="text"
            id="city"
            placeholder="Inserisci la città di residenza"
            required
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="zipCode">CAP *</label>
          <input
            type="number"
            id="zipCode"
            placeholder="Inserisci il cap"
            required
            onChange={(e) => setZipCode(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Numero di telefono</label>
          <input
            type="number"
            id="phone"
            placeholder="Inserisci il numero di cellulare (opzionale)"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="referer">
            Participi in una de queste associazioni?
            <select onChange={(e) => setReferer(e.target.value)}>
              <option value="Associazione A">Associazione A</option>
              <option value="Associazione B">Associazione B</option>
              <option value="Associazione C">Associazione C</option>
              <option value="Associazione D">Associazione D</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="ConfirmPassword"
            placeholder="Inserisci password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Conferma Password *</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Conferma password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div><p className="asterisk">(*) Campi Obbligatori</p></div>
        <div>
          <label />
          <button className="primary blu big" type="submit">
            Registrati
          </button>
        </div>
        <div>
          <label />
          <div>
            Hai già un account?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Accedi</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
