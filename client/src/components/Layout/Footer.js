import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <h1 className="text-center">
        All Right Reserved &copy; {currentYear} ELECTRO<span>BAY</span>.
      </h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
