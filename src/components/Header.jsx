import logo from "../assets/images/logo.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useNavigate, Routes } from "react-router-dom";
import Button from "./elements/Button";
import { useEffect, useState } from "react";

const Header = ({ cartCount, user, handleLogout }) => {
  const userId = user?.uid;
  const [hover, setHover] = useState(false);
  const [navSelected, setNavSelected] = useState("Home");
  const navigate = useNavigate();

  // const handleMouseOver = (e) => {
  //   setHover(true);
  //   e.target.style.textUnderlineOffset = "10px";
  //   e.target.style.textDecoration = "underline";
  //   e.target.style.textDecorationColor = "#F2C94C";
  //   e.target.style.textDecorationThickness = "10px";
  //   e.target.style.textDecorationOffset = "-5px";
  //   e.target.style.transition = "all 0.5s ease-in-out";
  //   e.target.style.textDecorationSkip = "ink";
  //   e.target.style.textDecorationSkipInk = "auto";
  // };

  // const handleMouseOut = (e) => {
  //   setHover(false);
  //   e.target.style.textDecoration = "none";
  //   e.target.style.transition = "all 0.3s ease-in-out";
  // };

  const handleNavSelected = (e) => {
    setNavSelected(e.target.innerText);
  };

  return (
    <nav id="header" className="bg-greenLight text-white">
      <div className="container w-full mx-auto flex flex-wrap items-center justify-between">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link
            to="/"
            className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl"
          >
            {/* <img
              src={logo}
              alt="logo"
              className="logo w-32 h-32 object-cover"
            /> */}
            <span className="text-4xl tracking-tighter">ReStyle</span>
          </Link>
        </div>
        <div className="nav-menu-wrapper flex items-center justify-between space-x-10  pt-3 pb-4">
          <div className="nav-menu flex items-center justify-between space-x-10">
            <Link
              to="/"
              className={` pt-2 hover:scale-105 ${
                navSelected === "Home"
                  ? "underline underline-offset-8 decoration-8 decoration-marigold font-bold text-2xl transition duration-150 border-b-8 border-transparent border-marigold"
                  : "font-bold text-2xl border-transparent border-b-8"
              }`}
              // onMouseOver={(e) => handleMouseOver(e)}
              // onMouseOut={(e) => handleMouseOut(e)}
              onClick={(e) => handleNavSelected(e)}
              id="nav-link"
            >
              Home
            </Link>
            <Link
              to="/wardrobe"
              className={` pt-2 hover:scale-105 ${
                navSelected === "My Wardrobe"
                  ? "underline underline-offset-8 decoration-8 decoration-marigold font-bold text-2xl transition duration-150 border-b-8 border-transparent border-marigold"
                  : "font-bold text-2xl border-transparent border-b-8"
              }`}
              // onMouseOver={(e) => handleMouseOver(e)}
              // onMouseOut={(e) => handleMouseOut(e)}
              onClick={(e) => handleNavSelected(e)}
              id="nav-link"
            >
              My Wardrobe
            </Link>
            <Link
              to="/store"
              className={` pt-2 hover:scale-105 ${
                navSelected === "Marketplace"
                  ? "underline underline-offset-8 decoration-8 decoration-marigold font-bold text-2xl transition duration-150 border-b-8 border-transparent border-marigold"
                  : "font-bold text-2xl border-transparent border-b-8"
              }`}
              // onMouseOver={(e) => handleMouseOver(e)}
              // onMouseOut={(e) => handleMouseOut(e)}
              onClick={(e) => handleNavSelected(e)}
              id="nav-link"
            >
              Marketplace
            </Link>
            <Link
              to="/"
              className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl"
            >
              <Button size="large">Get the App</Button>
            </Link>
          </div>
          {/* <Link to="/" className="text-xl hover:text-greenPrimary hover:underline hover:bg-complimentPink  bg-slate-400">
            Home
          </Link>
          <Link to="/wardrobe" className="text-xl">
            My Wardrobe
          </Link>
          <Link to="/store" className="text-xl">
            Marketplace
          </Link>
          <Link to="#" className="text-xl">
            <Button size="large">Get the App</Button>
          </Link> */}
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/cart" className="mr-4 relative">
            <img src={cartIcon} alt="cart" />
            {cartCount > 0 ? (
              <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">
                {cartCount}
              </div>
            ) : null}
          </Link>
          {userId ? (
            <Button onClick={handleLogout}>Log Out</Button>
          ) : (
            <>
              <Link to="/login" className="text-lg">
                Log In
              </Link>
              <Link to="/register" className="text-lg">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
