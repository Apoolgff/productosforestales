import React from 'react';
import './CSS/Productos.css';
import CardsContainer from './CardContainer';

function Productos() {
  return (
  <section className="productos-container">
    <article className="productos">
      <h2>Negocios y Productos</h2>
      <p>Administramos extensas tierras forestales en Uruguay, donde cuidamos de manera sostenible vastos bosques, destacando especies como Eucaliptus grandis, Pinus Taeda y Pinus Elliotti.</p>
      <article>
       <CardsContainer/>
      </article>
    </article>
  </section>
  );
}

export default Productos;
