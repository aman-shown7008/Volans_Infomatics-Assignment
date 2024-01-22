import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import partner_one from "../../image/partners_1-img.png";
import partner_two from "../../image/partners_2-img.png";
import './partner.css'; 

const Carousel1 = () => {
  const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
};

const cards = [
    {
      id: 1,
      image: partner_one,
    },
    {
      id: 2,
      image: partner_two,
    },
    {
      id: 3,
      image: partner_one,
    },
    {
      id: 4,
      image: partner_two,
    },
    {
      id: 5,
      image: partner_one,
    },
    {
      id: 6,
      image: partner_two,
    },
];
  

  return (
    <div className="card-slider-container">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card partner-img">
            <img  src={card.image} alt={`Card ${card.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel1;
