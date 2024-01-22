import React from 'react';
import "./stakeholders.css";
import Carousel from './Carousel'; // Import the Carousel component

function Stakeholders() {
  return (
    <div className="stakeholders section">
        <div className="container">
            <h3 className="section__title card__title">OUR VALUES</h3>
            <h2 className="section__subtitle">Our Stakeholders</h2>
            <Carousel /> {/* Include the Carousel component here */}
            <button className="button card-btn">Connect With Us</button>
        </div>
    </div>
  )
}

export default Stakeholders;
