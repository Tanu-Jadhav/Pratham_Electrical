import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import "../css/Footer.css";
import logo from "../assets/Logo1.png";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
                <img src={logo} className="logo" alt="Pratham Electrical Logo" />

        {/* Column 1 - Menu */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Column 2 - Contact */}
        <div className="footer-col">
          <h4>Contact</h4>

          <a href="tel:9960377652" className="footer-btn">
            📞 Call Now
          </a>

          <p className="footer-email">
            <FaEnvelope /> prathameshj926@gmail.com
          </p>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Column 3 - Social */}
        <div className="footer-col">
          <h4>Follow Us</h4>

          <div className="footer-social">
            <a href="https://www.instagram.com/lightwala_pratham_45" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/prathamesh.jadhavpj.52/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>

            <a href="https://wa.me/9960377652" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className="footer-bottom">
        © 2026 Pratham Electrical | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
