import React from "react";
import PlayStore from "../../../images/playstore.png";
import AppStore from "../../../images/Appstore.png";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="leftFooter">
        <h4> DOWNLOAD OUR APP</h4>
        <p>Download App for Android and Ios Mobile</p>
        <img src={PlayStore} alt="playstore" />
        <img src={AppStore} alt="Appstore" />
      </div>
      <div className="midFooter">
        <h1>Consumer-Cart</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2022 &copy; Consumer-cart</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/abhishek-kumar-ld/"> Instagram</a>
        <a href="https://www.linkedin.com/in/abhishek-kumar-ld/"> Youtube</a>
        <a href="https://www.linkedin.com/in/abhishek-kumar-ld/"> Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
