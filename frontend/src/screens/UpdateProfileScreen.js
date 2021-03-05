import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [birthday, setBirthday] = useState('');
  const [birthplace, setBirthplace] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [referer, setReferer] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerLogo, setSellerLogo] = useState('');
  const [sellerDescription, setSellerDescription] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setSurname(user.surname);
      setUsername(user.username);
      setBirthday(user.birthday);
      setEmail(user.email);
      setCity(user.city);
      setZipCode(user.zipCode);
      setPhone(user.phone);
      setReferer(user.referer);
      if (user.seller) {
        setSellerName(user.seller.name);
        setSellerLogo(user.seller.logo);
        setSellerDescription(user.seller.description);
      }
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert('- Le Password non coincidono');
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          surname,
          username,
          birthday,
          birthplace,
          email,
          city,
          zipCode,
          phone,
          referer,
          password,
          sellerName,
          sellerLogo,
          sellerDescription,
        })
      );
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="row center">
          <h1>Profilo Utente</h1>
          Username: { username }
        </div>
        { loading && <LoadingBox/> }
        { error && <MessageBox variant="danger">{error}</MessageBox> }
        { loading ? (
          <LoadingBox/>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {loadingUpdate && <LoadingBox/>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Profilo aggiornato con successo
              </MessageBox>
            )}
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Corregere il nome"
                value={ name }
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="surname">Cognome</label>
              <input
                id="surname"
                type="text"
                placeholder="Corregere il cognome"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Corregere l'email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="city">Città</label>
              <input
                id="city"
                type="text"
                placeholder="Corregere la città di domicilio"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="zipCode">CAP</label>
              <input
                id="zipCode"
                type="number"
                placeholder="Corregere il CAP"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="phone">Telefono</label>
              <input
                id="phone"
                type="number"
                placeholder="Corregere il telefono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
            <div>
              <label>
                Participi in una de queste associazioni?
                <select value={referer} onChange={(e) => setReferer(e.target.value)}>
                  <option value="Associazione A">Associazione A</option>
                  <option value="Associazione B">Associazione B</option>
                  <option value="Associazione C">Associazione C</option>
                  <option value="Associazione D">Associazione D</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="password">Cambiare Password</label>
              <input
                id="password"
                type="password"
                placeholder="Una nuova password?"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="confirmPassword">Conferma Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Conferma nuova password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <div>Data di Nascita: { birthday }</div>
            {user.isSeller && (
              <>
                <h2>Seller</h2>
                <div>
                  <label htmlFor="sellerName">Seller Name</label>
                  <input
                    id="sellerName"
                    type="text"
                    placeholder="Enter Seller Name"
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerLogo">Seller Logo</label>
                  <input
                    id="sellerLogo"
                    type="text"
                    placeholder="Enter Seller Logo"
                    value={sellerLogo}
                    onChange={(e) => setSellerLogo(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerDescription">Seller Description</label>
                  <input
                    id="sellerDescription"
                    type="text"
                    placeholder="Enter Seller Description"
                    value={sellerDescription}
                    onChange={(e) => setSellerDescription(e.target.value)}
                  ></input>
                </div>
              </>
            )}
            <div>
              <label />
              <button className="primary blu big" type="submit">
                Aggiorna
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { detailsUser, updateUserProfile } from '../actions/userActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import { DateUtils } from 'react-day-picker';
// import dateFnsFormat from 'date-fns/format';
// import dateFnsParse from 'date-fns/parse';
// import 'react-day-picker/lib/style.css';

// export default function ProfileScreen(props) {
//   const [username, setUsername] = useState('');
//   const [name, setName] = useState('');
//   const [surname, setSurname] = useState('');
//   const [birthday, setBirthday] = useState('');
//   const [birthplace, setBirthplace] = useState('');
//   const [gender, setGender] = useState('');
//   const [cf, setCf] = useState('');
//   const [email, setEmail] = useState('');
//   const [confirmEmail, setConfirmEmail] = useState('');
//   const [city, setCity] = useState('');
//   const [zipCode, setZipCode] = useState('');
//   const [phone, setPhone] = useState('');
//   const [referer, setReferer] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [sellerName, setSellerName] = useState('');
//   const [sellerLogo, setSellerLogo] = useState('');
//   const [sellerDescription, setSellerDescription] = useState('');

//   const CalFORMAT = 'dd/MM/yyyy';

//   const userSignin = useSelector((state) => state.userSignin);
//   const { userInfo } = userSignin;
//   const userDetails = useSelector((state) => state.userDetails);
//   const { loading, error, user } = userDetails;
//   const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
//   const {
//     success: successUpdate,
//     error: errorUpdate,
//     loading: loadingUpdate,
//   } = userUpdateProfile;

//   function parseDate(str, format, locale) {
//     const parsed = dateFnsParse(str, format, new Date(), { locale });
//     if (DateUtils.isDate(parsed)) {
//       return parsed;
//     }
//     return undefined;
//   }

//   function formatDate(date, format, locale) {
//     return dateFnsFormat(date, format, { locale });
//   }

//   const redirect = props.location.search
//     ? props.location.search.split('=')[1]
//     : '/';

//   const GetFormattedDate = (birthday) => {
//     if (typeof birthday === 'object') {
//       var month = birthday.getMonth()
//       var day = birthday.getDate() + 1
//       var year = birthday.getFullYear()
//       console.log("Birthday", day, month, year)
//       setBirthday(`${day}/${month}/${year}`)
//     }
//   }

//   const dispatch = useDispatch()
//   useEffect(() => {
//     if (!user) {
//       dispatch({ type: USER_UPDATE_PROFILE_RESET })
//       dispatch(detailsUser(userInfo._id))
//     } else {
//       setName(user.name);
//       setSurname(user.surname);
//       setUsername(user.username);
//       setBirthday(user.birthday);
//       setEmail(user.email);
//       setCity(user.city);
//       setZipCode(user.zipCode);
//       setPhone(user.phone);
//       setReferer(user.referer);
//       if (user.seller) {
//         setSellerName(user.seller.name);
//         setSellerLogo(user.seller.logo);
//         setSellerDescription(user.seller.description);
//       }
//     }
//   }, [props.history, redirect, userInfo, user]);
//   const submitHandler = (e) => {
//     e.preventDefault();
//     // dispatch update profile
//     if (password !== confirmPassword) {
//       alert('- Le Password non coincidono');
//     } else {
//       dispatch(
//         updateUserProfile({
//           userId: user._id,
//           name,
//           surname,
//           username,
//           birthday,
//           birthplace,
//           email,
//           city,
//           zipCode,
//           phone,
//           referer,
//           password,
//           sellerName,
//           sellerLogo,
//           sellerDescription,
//         })
//       );
//     }
//   };
//   return (
//     <div>
//       <form className="form" onSubmit={submitHandler}>
//         <div className="row center">
//           <h1>Profilo Utente</h1>
//           Username: { username }
//         </div>
//           { loading && <LoadingBox></LoadingBox> }
//           { error && <MessageBox variant="danger">{ error }</MessageBox> }
//           { loadingUpdate && <LoadingBox/> }
//           { errorUpdate && <MessageBox variant="danger">{ errorUpdate }</MessageBox> }
//           { successUpdate && <MessageBox variant="success">Profilo aggiornato con successo</MessageBox> }
//         <div>
//           <label htmlFor="name">Nome *</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Inserisci il nome"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="surname">Cognome *</label>
//           <input
//             type="text"
//             id="surname"
//             placeholder="Inserisci il cognome"
//             onChange={(e) => setSurname(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="gender">Genere *</label>
//             <label htmlFor="male">
//               <input type="radio" id="male" name="gender" value="M" onChange={(e) => setGender(e.target.value)}/>
//               M
//             </label>
//             <label htmlFor="female">
//               <input type="radio" id="female" name="gender" value="F" onChange={(e) => setGender(e.target.value)}/>
//               F
//             </label>
//         </div>
//         <div>
//           <label htmlFor="birthday">Data di Nascita *</label>
//           <DayPickerInput
//           parseDate={parseDate}
//           format={CalFORMAT}
//           formatDate={formatDate}
//           placeholder={`${dateFnsFormat(new Date(), CalFORMAT)}`}
//           onDayChange={(e)=>GetFormattedDate(e)}
//           />
//         </div>
//         <div>
//           <label htmlFor="birthplace">Comune di Nascita *</label>
//           <input
//             type="text"
//             id="birthplace"
//             placeholder="Seleziona comune di nascita"
//             onChange={(e) => setBirthplace(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="cf">Codice Fiscale *</label>
//           <input
//             type="text"
//             id="cf"
//             placeholder="Inserisci il Codice Fiscale"
//             onChange={(e) => setCf(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="email">Indirizzo Email *</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Inserisci email"
//             onChange={(e) => setEmail(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="email">Conferma Email *</label>
//           <input
//             type="email"
//             id="confirmEmail"
//             placeholder="Conferma email"
//             onChange={(e) => setConfirmEmail(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="city">Città *</label>
//           <input
//             type="text"
//             id="city"
//             placeholder="Inserisci la città di residenza"
//             onChange={(e) => setCity(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="zipCode">CAP *</label>
//           <input
//             type="number"
//             id="zipCode"
//             placeholder="Inserisci il cap"
//             onChange={(e) => setZipCode(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="phone">Numero di telefono</label>
//           <input
//             type="number"
//             id="phone"
//             placeholder="Inserisci il numero di cellulare (opzionale)"
//             onChange={(e) => setPhone(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="referer">
//             Participi in una de queste associazioni?
//             <select onChange={(e) => setReferer(e.target.value)}>
//               <option value="Associazione A">Associazione A</option>
//               <option value="Associazione B">Associazione B</option>
//               <option value="Associazione C">Associazione C</option>
//               <option value="Associazione D">Associazione D</option>
//             </select>
//           </label>
//         </div>
//         <div>
//           <label htmlFor="password">Password *</label>
//           <input
//             type="password"
//             id="ConfirmPassword"
//             placeholder="Inserisci password"
//             onChange={(e) => setPassword(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Conferma Password *</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             placeholder="Conferma password"
//             // TODO: Watch required 
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           ></input>
//         </div>
//         <div><p className="asterisk">(*) Campi Obbligatori</p></div>
//         <div>
//           <label />
//           <button className="primary blu big" type="submit">
//             Aggiorna
//           </button>
//         </div>
//         <div>
//           <label />
//         </div>
//       </form>
//     </div>
//   );
// }
