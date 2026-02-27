import { Link } from "react-router-dom";
import { useRef } from "react";
import "../css/Navbar.css";
import logo from "../assets/Logo1.png";
import {
 
  FaWhatsapp,
} from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const handleClose = () => {
    if (window.innerWidth < 992) {
      navRef.current.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark hero-navbar">
      <div className="container-fluid px-3">

        {/* Logo */}
        <img src={logo} className="logo" alt="Pratham Electrical Logo" />

        {/* Brand */}
        <Link className="navbar-brand" to="/" onClick={handleClose}>
          Pratham Electrical
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="nav" ref={navRef}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleClose}>Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleClose}>
                 About
              </a>
          </li>

            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={handleClose}>
                  Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#gallery" onClick={handleClose}>
                 Gallery
              </a>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleClose}>
                Contact
              </a>
            </li>

            {/* Call Button */}
            <li className="nav-item">
              <a
                href="tel:9960377652"
                className="btn btn-sm btn-primary rounded-pill py-2 px-3"
                onClick={handleClose}
              >
                📞 Call Now
              </a>
            </li>
            <li className="nav-item">
              <a href="https://wa.me/9960377652"
               className="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block"
                onClick={handleClose}>
                  <FaWhatsapp />
                 Get in Touch
            </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
