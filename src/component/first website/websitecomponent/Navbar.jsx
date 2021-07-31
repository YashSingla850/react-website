import React, { useState, useEffect } from "react";
import "./navbar.css";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import { Link } from "react-router-dom";
import { Button } from "./Button";

// import { FaTimes, FaBars } from "react-icons/fa";
import ClearIcon from "@material-ui/icons/Clear";
import MenuIcon from "@material-ui/icons/Menu";
// import { Button } from "@material-ui/core";
const Navbar = () => {
  const [click, setclick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  const CSS = {
    color: "#fff",
  };
  const NCSS = { color: "#fff", fontSize: "2rem" };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <CardTravelIcon />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {click ? <ClearIcon style={NCSS} /> : <MenuIcon style={CSS} />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign UP
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
