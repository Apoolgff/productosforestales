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
          <Link to="/nosotros">Nuestra Empresa</Link>
        </li>
        <li>
          <Link to="/productos">Operaciones</Link>
        </li>
        <li>
          <Link to="/contacto">Sosteniblidad</Link>
        </li>
        <li>
          <Link to="/contacto">Novedades</Link>
        </li>
        <li>
          <Link to="/contacto">Contactenos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
