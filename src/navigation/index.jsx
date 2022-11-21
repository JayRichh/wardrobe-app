import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Store from "../pages/Store";
import Cart from "../pages/Cart";
import PaymentSuccess from "../pages/PaymentSuccess";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { styleItems } from "../stores/style/styleSlice";
import { Footer } from "../components/Footer";
import Wardrobe from "../pages/Wardrobe";
import NavError from "../pages/NavError";
import ClosetForm from "../pages/ClosetForm";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

const Navigation = () => {
  const productsInCart = useSelector(cartProducts);
  const itemsInStyle = useSelector(styleItems)
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  //useEffect to get sessionStorage user data and set it to user state
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        setUser(authUser);
      } else {
        //user logged out
        setUser(null);
      }
    });
    console.log(user, "userFirebase");
  }, []);

  //useEffect to update the itemsInStyle when items are added to the style or removed from the style

  return (
    <BrowserRouter>
      <Header cartCount={productsInCart ? productsInCart.length : 0} user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/wardrobe" element={<Wardrobe user={user} styleItemCount={itemsInStyle ? itemsInStyle.length : 0} />} />
        <Route path="/closet-form" element={<ClosetForm user={user} />} />
        <Route path="*" element={<NavError />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
