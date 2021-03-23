import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [lat, setLat] = useState(shippingAddress.lat);
  const [lng, setLng] = useState(shippingAddress.lng);
  const userAddressMap = useSelector((state) => state.userAddressMap);
  const { address: addressMap } = userAddressMap;

  if (!userInfo) {
    props.history.push('/signin');
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState("Italia");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const newLat = addressMap ? addressMap.lat : lat;
    const newLng = addressMap ? addressMap.lng : lng;
    if (addressMap) {
      setLat(addressMap.lat);
      setLng(addressMap.lng);
    }
    let moveOn = true;
    // if (!newLat || !newLng) {
    //   moveOn = window.confirm(
    //     'You did not set your location on map. Continue?'
    //   );
    // }
    if (moveOn) {
      console.log(country)
      dispatch(
        saveShippingAddress({
          fullName,
          address,
          city,
          postalCode,
          country,
          lat: newLat,
          lng: newLng,
        })
      );
      props.history.push('/payment');
    }
  };
  // const chooseOnMap = () => {
  //   dispatch(
  //     saveShippingAddress({
  //       fullName,
  //       address,
  //       city,
  //       postalCode,
  //       country,
  //       lat,
  //       lng,
  //     })
  //   );
  //   props.history.push('/map');
  // };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Indirizzo di Spedizione</h1>
        </div>
        <div>
          <label htmlFor="fullName">Nome</label>
          <input
            type="text"
            id="fullName"
            placeholder="Inserisci nome e cognome"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Indirizzo</label>
          <input
            type="text"
            id="address"
            placeholder="Inserisci indirizzo"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">Città</label>
          <input
            type="text"
            id="city"
            placeholder="Inserisci città"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">Nazione</label>
          <input
            type="text"
            id="country"
            value={"Italia"}
            readOnly
            onChange={() => setCountry("Italia")}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Codice postale</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Inserisci codice postale"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        {/* <div>
          <label htmlFor="chooseOnMap">Punto d'incontro *<span style={{fontSize:"1.25rem"}}>per consegne personali</span></label>
          <button type="button" onClick={chooseOnMap}>
            Scegli sulla mappa
          </button>
        </div> */}
        <div>
          <label />
          <button className="primary blu" type="submit">
            Continua
          </button>
        </div>
      </form>
    </div>
  );
}
