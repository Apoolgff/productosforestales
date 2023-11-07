import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import companyLogo from "../assets/PFUlogoCompleto.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={companyLogo} alt="Company Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/contacto">Contactenos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
