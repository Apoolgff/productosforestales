import React from 'react';
import './CSS/Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-banner">
        <div className="hero-content">
          <h1>GESTIÓN FORESTAL SOSTENIBLE</h1>
          <p>Ofrecemos productos forestales de alta calidad</p> 
          <p>asegurando la sostenibilidad de nuestros bosques.</p>
        </div>
      </div>
      <article className="icon-container">
        <figure className="icon">
          <img className="plank" src="/plank.png" alt="plank icon" />
          <figcaption className='icon-text'>
          <p><span>+ 300.000 m3</span></p>
          <p>anuales en productos</p>
          </figcaption>
        </figure>
        <figure className="icon">
          <img className="wood" src="/wood.png" alt="wood icon" />
          <figcaption className='icon-text'>
          <p><span>+ 20 años</span></p>
          <p>de experiencia en forestación</p>
          </figcaption>
        </figure>
      </article>
    </section>
  );
};

export default Hero;
