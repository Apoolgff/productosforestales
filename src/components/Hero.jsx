import React from 'react';
import './CSS/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>GESTIÓN FORESTAL SOSTENIBLE</h1>
        <p>Ofrecemos productos forestales de alta calidad</p> 
        <p>asegurando la sostenibilidad de nuestros bosques.</p>
      </div>
      <div className="icon-container">
        <div className="icon">
          <img src="/plank.png" alt="plank icon" />
          <div className='icon-text'>
          <p><span>+ 300.000 m3</span></p>
          <p>Anuales en productos</p>
          </div>
        </div>
        <div className="icon">
          <img src="/wood.png" alt="wood icon" />
          <div className='icon-text'>
          <p><span>+ 20 años</span></p>
          <p>De experiencia en forestación</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
