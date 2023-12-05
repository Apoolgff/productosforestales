import React from 'react';
import './CSS/CardContainer.css';

const Card = ({ imageUrl, text }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Imagen de la tarjeta" />
      <div className="card-content">
        <p>{text}</p>
      </div>
      <button>MAS INFO</button>
    </div>
  );
};

const CardsContainer = () => {
    const cardsData = [
        { imageUrl: '/card1.png', text: 'POSTES Y COLUMNAS' },
        { imageUrl: '/card2.png', text: 'MADERA SOLIDA - USO INDUSTRIAL' },
        { imageUrl: '/card3.png', text: 'MADERA ROLLIZA - EXPORTACION' },
        { imageUrl: '/card4.png', text: 'SUMINISTRO DE MADERA' },
      ];
  
    return (
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} text={card.text} />
        ))}
      </div>
    );
  };

export default CardsContainer;