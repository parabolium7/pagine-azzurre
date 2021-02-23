import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
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
          <h1>User Profile</h1>
        </div>
        {loading ? (
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
                Profile Updated Successfully
              </MessageBox>
            )}
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Corregere il nome"
                value={name}
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
                placeholder="Corregere la città"
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
              <button className="primary" type="submit">
                Aggiorna
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
