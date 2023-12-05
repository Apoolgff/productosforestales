import React from 'react';
import './CSS/Nosotros.css';
import Carousel from './Carousel';

const Nosotros = () => {
  return (
    <section className="nosotros-container">
      <article className="nosotros">
          <h2>Somos PFU, Empresa líder en el sector forestal</h2>
          <p>Nos destacamos en el sector forestal al crear productos de primera calidad y garantizar la sostenibilidad de los bosques.</p> 
          <Carousel/>
          {/* <div className="galeria"></div> ESTE DIV PARA LA GALERIA NO HACE FALTA PORQUE YA LO HAGO EN EL COMPONENTE DEL CARRUSEL */}
          <a href="" className="conocenos">Conocenos</a>
      </article>
    </section>
  );
};

export default Nosotros;
