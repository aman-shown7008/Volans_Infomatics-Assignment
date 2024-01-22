import React, { useState } from "react";
import "./header.css";
import logoImage from '../../image/logo-1.png';

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className={`header ${isMenuActive ? "menu-active" : ""}`}>
      <div className="first-header">
        <div className="container f-header">
          <div className="contacts">
            <a href={`mailto:sales@hivesteps.com`} className="h-contact"> <i class="bx bx-envelope"></i> sales@hivesteps.com </a>
            <a href={`tel:9560573049`} className="h-contact"> <i class="bx bxs-phone"></i> +91-9560573049 </a>
          </div>
          <div className="social-links">
            <a href="http://facebook.com"> <i class="bx bxl-facebook"></i> </a>
            <a href="http://twitter.com"> <i class="bx bxl-twitter"></i> </a>
            <a href="http://youtube.com"> <i class="bx bxl-youtube"></i> </a>
            <a href="http://linkedlin.com"> <i class="bx bxl-linkedin"></i> </a>
            <button type="button" className="login-btn">Login</button>
          </div>
        </div>
      </div>

      <div className="second-header">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <img src={logoImage} alt="LOGO" />
            </div>
            <div className="push-left">
              <button id="menu-toggler" data-class="menu-active" className="hamburger" onClick={toggleMenu}>
                <span className="hamburger-line hamburger-line-top"></span>
                <span className="hamburger-line1 hamburger-line-middle"></span>
                <span className="hamburger-line hamburger-line-bottom"></span>
              </button>
              

              {/* Menu compatible with wp_nav_menu  */}
              <ul id="primary-menu" className="menu nav-menu">
                <li className="menu-item current-menu-item">
                  <a className="nav__link" href="#">
                    About
                  </a>
                </li>
                <li className="menu-item">
                  <a className="nav__link" href="#">
                    Values
                  </a>
                </li>
                <li className="menu-item">
                  <a className="nav__link" href="#">
                    Journey
                  </a>
                </li>
                <li className="menu-item">
                  <a className="nav__link" href="#">
                    Offerings
                  </a>
                </li>
                <li className="menu-item">
                  <a className="nav__link" href="#">
                    Why Us?
                  </a>
                </li>
                <li className="menu-item">
                  <a className="nav__link" href="#">
                    FQAs
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;

