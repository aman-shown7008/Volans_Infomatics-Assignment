import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import stakeholder from "../../image/stakeholder-img.png"
import './stakeholders.css'; // Your custom CSS file


const Carousel = () => {
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
      image: stakeholder,
      heading: 'Individuals',
      description: 'Get your students ready and active for the mysterious corporate world with our AI-driven skill-based training platform',
    },
    {
      id: 2,
      image: stakeholder,
      heading: 'University',
      description: 'Get your students ready and active for the mysterious corporate world with our AI-driven skill-based training platform.',
    },
    {
      id: 3,
      image: stakeholder,
      heading: 'Corporations',
      description: 'Get your students ready and active for the mysterious corporate world with our AI-driven skill-based training platform.',
    },
    {
        id: 4,
        image: stakeholder,
        heading: 'Individuals',
        description: 'Get your students ready and active for the mysterious corporate world with our AI-driven skill-based training platform',
      },
      {
        id: 5,
        image: stakeholder,
        heading: 'University',
        description: 'Get your students ready and active for the mysterious corporate world with our AI-driven skill-based training platform.',
      },
      {
        id: 6,
        image: stakeholder,
        heading: 'Corporations',
        description: 'Get your students ready and active for the mysterious corporate world with our AI-driven skill-based training platform.',
      },
    // Add more cards as needed
  ];

  return (
    <div className="card-slider-container">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={`Card ${card.id}`} />
            <h3 className='c-head'>{card.heading}</h3>
            <p className='c-para'>{card.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
