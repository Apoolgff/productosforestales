import React from "react";
import { Link } from "react-router-dom";
import './CSS/Footer.css';
import logo from "../assets/PFUlogoBlanco.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
    return (
        <section className="footer">
            <div className="logo-container">
            <Link to="#"  ><img className="logo-blanco" src={logo} alt="logo blanco" /></Link>
            </div>
            <div>
                <ul className="social">
                    <li>
                    <Link to="#"><img src={linkedin} alt="linkedin" /></Link>
                    </li>
                    <li>
                    <Link to="#"><img src={instagram} alt="instagram" /></Link>
                    </li>
                    <li>
                    <Link to="#"><img src={facebook} alt="facebook" /></Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;