import React, { useEffect, useState }from 'react';
import WelcomeBanner from '../components/WelcomeBanner'
// import { Carousel } from 'react-responsive-carousel/lib/styles/carousel.min.css'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
// import { Link } from 'react-router-dom';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;

  const [section, setSection] = useState('offro')

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);
  return (
    <div>
      <WelcomeBanner/> 
      <div>
      {/* <h2>Top Sellers</h2>
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : ( */}
        <>
          {/* {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
          <Carousel showArrows autoPlay showThumbs={false}>
            {sellers.map((seller) => (
              <div key={seller._id}>
                <Link to={`/seller/${seller._id}`}>
                  <img src={seller.seller.logo} alt={seller.seller.name} />
                  <p className="legend">{seller.seller.name}</p>
                </Link>
              </div>
            ))}
          </Carousel> */}
        </>
      {/* )} */}
      <h1 className="row center">ULTIME ATTIVITÀ</h1>
      <div className="row center">
        <button className={ section === 'offro' ? "filter active":"filter"} onClick={()=> setSection('offro')}>Offro</button>
        <button className={ section === 'cerco' ? "filter active" : "filter"} onClick={()=> setSection('cerco')}>Cerco</button>
        <button className={ section === 'propongo' ? "filter active" : "filter"} onClick={()=> setSection('propongo')}>Propongo</button>
        <button className={ section === 'avviso' ? "filter active" : "filter"} onClick={()=> setSection('avviso')}>Avviso</button>
      </div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            { products.map((product) => (
              !product.name.match(/Annunciø/) && product.section === section && <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )}
    </div>
    </div>
  );
}
