import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

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
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
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

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="row center">Crea / Modifica Annuncio N°:</h1>
          <p className="row center"> {productId}</p>
          { !userInfo.hasAd && 
            (
              <MessageBox variant="alert">
                Per conttatare un offerente devi diventarlo tu prima. Crea un annuncio promozionando un bene o servizio che vorresti baratare per beni o servizi di altri.
              </MessageBox>
            )
          }
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                placeholder="Inserisci nome"
                value={!name.match(/Annunciø/)?name:null}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
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
            <div>
              <label htmlFor="image" style={{display:"none"}}>Immagine</label>
              <input
                id="image"
                type="hidden"
                placeholder="Inserisci immagine"
                value={image}
                disabled
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Immagine File</label>
              <input
                type="file"
                id="imageFile"
                label="Seleziona il file"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
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
            <div>
              <label htmlFor="description">Descrizione</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Inserisci la descrizione dell'annuncio"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
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
