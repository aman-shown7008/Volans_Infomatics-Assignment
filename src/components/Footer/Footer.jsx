import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <div className="Footer section">
        <div className="container footer-container">
            <div className="footer-sec">
                <h4 className="footer-head">About us</h4>
                <p className="footer-head-desc">Language Learning Platform Powered By Artificial Intelligence.</p>
                <button type="button" className="button footer-button">Know More</button>
            </div>
            <div className="footer-sec">
                <h4 className="footer-head">Featured links</h4>
                <p className="footer-desc">Gallery</p>
                <p className="footer-desc">Blogs</p>
                <p className="footer-desc">Contact Us</p>
            </div>
            <div className="footer-sec">
                <h4 className="footer-head">Other offerings</h4>
                <p className="footer-desc">Princeton</p>
                <p className="footer-desc">Hive Grad</p>
                <p className="footer-desc">Fakerz</p>
            </div>
            <div className="footer-sec">
                <h4 className="footer-head">Contact info</h4>
                <p className="footer-desc">+ 91-9560573049</p>
                <p className="footer-desc">support@hivesteps.com</p>
                <h4 className="footer-head">Social Media</h4>
                <div className="footer-links">
                    <a href="http://"> <i class="ft bx bxl-facebook"></i> </a>
                    <a href="http://"> <i class="ft bx bxl-twitter"></i> </a>
                    <a href="http://"> <i class="ft bx bxl-youtube"></i> </a>
                    <a href="http://"> <i class="ft bx bxl-linkedin"></i> </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;