// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './footer.scss';

// == Composant
const Footer = () => (
  <div id="footer">
    <Link className="logo" to="/">O'wedding</Link>
    <div className="center">
      <Link className="footerLink" to="/contact">Contact</Link>
      <Link className="footerLink" to="/about-us">À propos</Link>
      <Link className="footerLink" to="/site-map">Plan du site</Link>
      <Link className="footerLink" to="/legals-mentions">Mentions légales</Link>
      <Link className="footerLink" to="/cookie-management">Gestion des cookies</Link>
      <Link className="footerLink" to="/privacy-policy">Politique de confidentialité</Link>
    </div>

    <div className="socialnetworks">
      <p>Retrouvez nous aussi sur</p>
      <a href="https://www.facebook.com/"><i className="fab fa-facebook" /></a>
      <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
      <a href="https://www.pinterest.fr/"><i className="fab fa-pinterest" /></a>
    </div>
    <script src="https://kit.fontawesome.com/7d50825b89.js" />
  </div>
);

// == Export
export default Footer;
