import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import 'react-day-picker/lib/style.css';

export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState('');
  const [priceVal, setPriceVal] = useState('');
  const [priceEuro, setPriceEuro] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [section, setSection] = useState('')
  const [isService, setIsService] = useState(false)
  const [auxPhone, setAuxPhone] = useState('')
  const [delivery, setDelivery] = useState('')
  const [expiry, setExpiry] = useState('')
  const [pause, setPause] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [municipality, setMunicipality] = useState('')

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

  const GetFormattedDate = (expiry) => {
    if (typeof expiry === 'object') {
      var day = expiry.getDate()
      var month = expiry.getMonth() + 1
      var year = expiry.getFullYear()
      setExpiry(`${day}/${month}/${year}`)
    }
  }
  const CalFORMAT = 'dd/MM/yyyy';

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/productlist/seller');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setPriceVal(product.priceVal);
      setPriceEuro(product.priceEuro);
      setImage(product.image);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setBrand(product.brand);
      setDescription(product.description);
      setSection(product.section);
      setIsService(product.isService)
      setAuxPhone(product.auxPhone)
      setDelivery(product.setDelivery)
      setExpiry(product.setExpiry)
      setPause(false)
      setCountry(product.setCountry)
      setState(product.setState)
      setCity(product.setCity)
      setMunicipality(product.setMunicipality)
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        priceVal,
        priceEuro,
        image,
        category,
        brand,
        countInStock,
        description,
        section,
        isService,
        pause,
        auxPhone,
        delivery,
        expiry,
        country,
        state,
        city,
        municipality,
      })
    );
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads/s3', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  const setDefaultImage = (e) => {
      if(e === 'servizio') setIsService(true)
      if(e === 'prodotto') setIsService(false)
      console.log(`/images/${section}_${e}.jpg`)
      setImage(`/images/${section}_${e}.jpg`)
  }

  const helpSetDefaultImage = (e) => {
    if(e === "offro") setSection("offro")
    if(e === "cerco") setSection("cerco")
    if(e === "propongo") {
      setSection("propongo")
      setImage(`/images/propongo.jpg`)
    }
    if(e === "avviso") {
      setSection("avviso")
      setImage(`/images/avviso.jpg`)
    }
    console.log(e , section)
  }

  const handleTitle = (e) => {
    const {value, maxLength} = e.target
    const title = value.slice(0, maxLength)
    setName(title)
  }

  const infoText = " Compila tutti i campi obbligatori contrassegnati da un (*)." +
                   " Prima e dopo la pubblicazione potrai comunque rivedere e modificare il tuo annuncio." + 
                   " Se rispetta le consuete normative, il tuo annuncio, sarà pubblicato."

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="row center">Crea / Modifica Annuncio N°:</h1>
          <p className="row center"> {productId}</p>
          { !userInfo.hasAd && 
            (
              <MessageBox variant="alert">
               { infoText }
              </MessageBox>
            )
          }
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{ errorUpdate }</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="section">Tipo annuncio</label>
                <select
                  id="section"
                  name="section"
                  value={section.toString()}
                  onChange={ (e) => helpSetDefaultImage(e.target.value) }
                >
                    <option value="offro">Offro</option>
                    <option value="cerco">Cerco</option>
                    <option value="propongo">Propongo</option>
                    <option value="avviso">Avviso</option>
                </select>
            </div>
          { section !== 'avviso' && section !== 'propongo' && 
            (<div>
              <label htmlFor="isService">
                <input
                  type="radio"
                  id="kindof"
                  name="isService"
                  defaultChecked
                  onClick={ (e) => setDefaultImage('prodotto') }
                />Prodotto
              </label>
              <label htmlFor="isService">
                <input
                  type="radio"
                  id="kindof2"
                  name="isService"
                  onClick={ (e) => setDefaultImage('servizio') }
                />Servizio
              </label>
            </div>)
            }
            <div>
              <label htmlFor="name">{section !== 'propongo'?'Titolo':'Argomento'} *</label>
              <input
                id="name"
                type="text"
                maxLength="90"
                placeholder="Inserisci nome del bene o servizio che voi barattare"
                value={!name.match(/Annunciø/)?name:''}
                onChange={(e) => handleTitle(e)}
              ></input>
            </div>
            <div>
              <label htmlFor="category">Categoria</label>
              <input
                id="category"
                type="text"
                placeholder="Inserisci categoria"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            { section !== 'avviso' && 
              (<>
                <div>
                  <label htmlFor="priceVal">Prezzo in Val </label>
                  <input
                    id="priceVal"
                    type="number"
                    placeholder="Inserisci prezzo ☯"
                    value={priceVal}
                    onChange={(e) => setPriceVal(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="priceEuro">Prezzo in Euro </label>
                  <input
                    id="priceEuro"
                    type="number"
                    placeholder="Inserisci prezzo 💶"
                    value={priceEuro}
                    onChange={(e) => setPriceEuro(e.target.value)}
                  ></input>
                </div>
              </>)
            }
            { 
              (
                <div>
                  <div>Immagine</div>
                  <img src={ image } style={{ display: "block",  maxWidth:"115px", maxHeight:"115px", width: "auto", height: "auto" }}/>
                  { loadingUpload && <LoadingBox></LoadingBox> }
                  { errorUpload && <MessageBox variant="danger">{errorUpload}</MessageBox> }
                </div>
              )
            }
            <div>
              <label htmlFor="imageFile">Immagine File</label>
              <input
                type="file"
                id="imageFile"
                accept="image/png, image/jpeg"
                onChange={uploadFileHandler}
              ></input>
            </div>
            { section !== 'avviso' &&  
              <div>
                <label htmlFor="brand">Brand</label>
                <input
                  id="brand"
                  type="text"
                  placeholder="Inserisci brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                ></input>
              </div>
            }
            { section !== 'avviso' && 
              <div>
                <label htmlFor="countInStock">Numero prodotti in magazzino</label>
                <input
                  id="countInStock"
                  type="text"
                  placeholder="Inserisci numero di prodotti in offerta"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                ></input>
              </div>
            }
            <div>
              <label htmlFor="auxPhone">Telefono di conttato per questo annuncio</label>
              <input
                id="auxPhone"
                type="text"
                placeholder={ parseInt(userInfo.phone) || "Inserisci numero di telefono per conttato"}
                value={ auxPhone }
                onChange={(e) => setAuxPhone(e.target.value)}
              ></input>
            </div>
            { section !== 'avviso' && 
              <div>
                <label htmlFor="delivery">Forma di consegna</label>
                  <select
                    id="delivery"
                    name="delivery"
                    value={delivery}
                    onChange={ (e) => setDelivery(e.target.value) }
                  >
                      <option value="no preferences">Da concordare</option>
                      <option value="personalmente">Personalmente</option>
                      <option value="posta">Posta</option>
                      <option value="corriere">Corriere</option>
                  </select>
              </div>
            }
            {/* <div>
              <label htmlFor="expiry">Data di scadenza annuncio*</label>
              <DayPickerInput
                parseDate={parseDate}
                format={CalFORMAT}
                formatDate={formatDate}
                value={expiry}
                placeholder={`${dateFnsFormat(new Date(), CalFORMAT)}`}
                onDayChange={(e)=>GetFormattedDate(e)}
              />
            </div> */}
            <div>
              <label htmlFor="description">Descrizione</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Descrivi con precisione il prodotto o servizio proposto."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            {/* <div>
              <div>Disattiva annuncio temporaneamente</div>
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={(e) => setPause(!pause)}
                />
                <span className="slider round"></span>
              </label>
            </div> */}
            <div>
              <label></label>
              <button className="primary blu" type="submit">
                Aggiorna
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
