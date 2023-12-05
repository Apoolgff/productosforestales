import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CSS/Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/imageCarousel.png" alt="Imagen 1" />
      </div>
      <div>
        <img src="/imageCarousel.png" alt="Imagen 2" />
      </div>
      <div>
        <img src="/imageCarousel.png" alt="Imagen 3" />
      </div>
      {/* Aca se pueden seguir agregando imagenes */}
    </Slider>
  );
};

export default Carousel;
