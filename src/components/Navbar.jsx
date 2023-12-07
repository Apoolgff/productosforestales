import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import companyLogo from "../assets/PFUlogoCompleto.png";

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo-container">
            <Link to="/"  ><img className="logo" src={companyLogo} alt="logo blanco" /></Link>
            </div>
      <ul className="nav-links">
        <li>
          <Link className="nav-links_text" to="/nosotros">Nuestra Empresa</Link>
        </li>
        <li>
          <Link className="nav-links_text" to="/productos">Operaciones</Link>
        </li>
        <li>
          <Link className="nav-links_text" to="/contacto">Sosteniblidad</Link>
        </li>
        <li>
          <Link className="nav-links_text" to="/contacto">Novedades</Link>
        </li>
        <li>
          <Link className="contactenos" to="/contacto">Contactenos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
