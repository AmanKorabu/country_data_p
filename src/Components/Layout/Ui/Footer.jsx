import React from 'react';
import {   FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Country</h2>
          <p>Designed & Built by Aman Korabu</p>
        </div>

        <div className="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/country">Country</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-social">
          <NavLink to ="https://www.instagram.com/itz.aman.ak.7?igsh=MWh1bTA0cnp4cTJvcg=="><FaInstagram/></NavLink>
          <NavLink to ="https://www.linkedin.com/in/aman-korabu-ab1a9b314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn/></NavLink>
          <NavLink to ="https://github.com/AmanKorabu"><FaGithub/></NavLink>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aman Korabu. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
