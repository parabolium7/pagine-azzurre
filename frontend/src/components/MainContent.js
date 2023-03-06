import React from "react";
import { Route } from "react-router-dom";

import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import CartScreen from "./../screens/CartScreen";
import HomeScreen from "./../screens/HomeScreen";
import OrderHistoryScreen from "./../screens/OrderHistoryScreen";
import OrderScreen from "./../screens/OrderScreen";
import PaymentMethodScreen from "./../screens/PaymentMethodScreen";
import PlaceOrderScreen from "./../screens/PlaceOrderScreen";
import ProductListScreen from "./../screens/ProductListScreen";
import ProductScreen from "./../screens/ProductScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import RegisterScreen from "./../screens/RegisterScreen";
import ShippingAddressScreen from "./../screens/ShippingAddressScreen";
import SigninScreen from "./../screens/SigninScreen";
import ProductEditScreen from "./../screens/ProductEditScreen";
import OrderListScreen from "./../screens/OrderListScreen";
import UserListScreen from "../screens/UserListScreen";
import UserEditScreen from "./../screens/UserEditScreen";
import PasswordRecovery from "./../screens/PasswordRecoveryScreen";
import SellerRoute from "./SellerRoute";
import SellerScreen from "./../screens/SellerScreen";
import SearchScreen from "./../screens/SearchScreen";
import NewsletterScreen from "./../screens/NewsletterScreen";
import TuttiNoiScreen from "./../screens/TuttiNoiScreen";
import MapScreen from "./../screens/MapScreen";
import PrivacyScreen from "./../screens/PrivacyScreen";
import ChangePassword from "./../screens/ChangePassword";
import ThankYouScreen from "./../screens/ThankYouScreen";
import VerificationScreen from "./../screens/VerificationScreen";
import VerifiedScreen from "./../screens/VerifiedScreen";

export default function MainContent() {
  return (
    <main>
      <Route path="/tutti_noi/" component={TuttiNoiScreen}></Route>
      <Route path="/newsletter/" component={NewsletterScreen} exact></Route>
      <Route path="/newsletter/:string" component={ThankYouScreen}></Route>
      <Route path="/seller/:id" component={SellerScreen}></Route>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen} exact></Route>
      <Route
        path="/product/:id/edit"
        component={ProductEditScreen}
        exact
      ></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/shipping" component={ShippingAddressScreen}></Route>
      <Route path="/payment" component={PaymentMethodScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route path="/order/:id" component={OrderScreen}></Route>
      <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
      <Route path="/privacy" component={PrivacyScreen}></Route>
      <Route path="/search/name/:name?" component={SearchScreen} exact></Route>
      <Route
        path="/search/category/:category"
        component={SearchScreen}
        exact
      ></Route>
      <Route
        path="/search/category/:category/name/:name"
        component={SearchScreen}
        exact
      ></Route>
      <Route
        path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
        component={SearchScreen}
        exact
      ></Route>
      <Route
        path="/password-recovery"
        component={PasswordRecovery}
        exact
      ></Route>
      <Route
        path="/password-recovery/:id"
        component={ChangePassword}
        exact
      ></Route>
      <Route path="/verification/:id" component={VerifiedScreen}></Route>
      <Route path="/verification/" component={VerificationScreen} exact></Route>
      <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
      <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
      <AdminRoute
        path="/productlist"
        component={ProductListScreen}
        exact
      ></AdminRoute>
      <AdminRoute
        path="/productlist/pageNumber/:pageNumber"
        component={ProductListScreen}
        exact
      ></AdminRoute>
      <AdminRoute
        path="/orderlist"
        component={OrderListScreen}
        exact
      ></AdminRoute>
      <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
      <AdminRoute path="/user/:id/edit" component={UserEditScreen}></AdminRoute>
      <SellerRoute
        path="/productlist/seller"
        component={ProductListScreen}
      ></SellerRoute>
      <SellerRoute
        path="/orderlist/seller"
        component={OrderListScreen}
      ></SellerRoute>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/pageNumber/:pageNumber" component={HomeScreen} exact></Route>
    </main>
  );
}
