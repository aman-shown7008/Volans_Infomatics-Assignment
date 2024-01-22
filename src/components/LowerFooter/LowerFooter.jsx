import React from 'react';
import "./lowerFooter.css";

function LowerFooter() {

    // Get the current year
    const currentYear = new Date().getFullYear();

  return (
    <div className="LowerFooter">
        <div className="container">
            <div className="lFooter-data">
                <div className="orange-line"></div>
                <p className="lowerFoor-para footerPara">Princeton Hive {currentYear} All Right Reserved</p>
                <p className="lowerFoor-para footerPara">Site Map</p>
                <p className="lowerFoor-para footerPara">Privacy Policy</p>
                <p className="lowerFoor-para">Terms And Conditions Apply</p>
            </div>
        </div>
    </div>
  )
}

export default LowerFooter