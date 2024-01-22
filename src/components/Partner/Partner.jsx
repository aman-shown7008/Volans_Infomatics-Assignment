import React from 'react';
import Carousel1 from './Carousel1';
import "./partner.css";


function Partner() {
  return (
    <div className="Partner section">
        <div className="container">
            <h3 className="section__title l-title">YOUR TRAINING PARTNER</h3>
            <h2 className="section__subtitle l-subtitle O-sub">Our Partners</h2>
            <Carousel1/>
        </div>
    </div>
  )
}

export default Partner;