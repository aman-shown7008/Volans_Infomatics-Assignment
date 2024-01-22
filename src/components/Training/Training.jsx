import React from 'react';
import "./training.css";
import firstImage from "../../image/traning_first-img.png";
import secondImage from "../../image/traning_second-img.png";
import thirdImage from "../../image/traning_third-img.png";
import fourthImage from "../../image/traning_fourth-img.png";

function Training() {
  return (
    <div className="training section">
        <div className="container">
            <h3 className="section__title card__title">YOUR TRAINING PARTNER</h3>
            <h2 className="section__subtitle">Why Choose Us?</h2>
            <p className="t-text">Language lab is a perfect solution to learn languages from foundation to advanced. Our 21st century, user-friendly software enables learning with AI driven communication assessments and scores. Learn in the meta.</p>
            <div className="traning-cards">
                <div className="t-left-card">
                    <div className="t-card">
                        <img src={firstImage} alt="" className="traning-img" />
                        <h3 className="s-head t-note">Global/ Industry Experts</h3>
                        <p className="s-note t-note">Acquire the need-specific skills from all around the globe.</p>
                    </div>
                    <div className="t-card">
                        <img src={secondImage} alt="" className="traning-img" />
                        <h3 className="s-head t-note">The LSRW Module</h3>
                        <p className="s-note t-note">Highly effective listening, speaking, reading and writing methodologies.</p>
                    </div>
                </div>
                
                <div className="t-right-card">
                    <div className="t-card">
                        <img src={thirdImage} alt="" className="traning-img" />
                        <h3 className="s-head t-note">Lesson Studio</h3>
                        <p className="s-note t-note">Grab customised learning materials for optimum results</p>
                    </div>
                    <div className="t-card">
                        <img src={fourthImage} alt="" className="traning-img" />
                        <h3 className="s-head t-note">AI Assessments</h3>
                        <p className="s-note t-note">These assessments often utilize machine learning algorithms and data analytics.</p>
                    </div>
                </div>
            </div>
            <button type="button" className="button t-button">Connect With Us</button>
        </div>
    </div>
  )
}

export default Training;