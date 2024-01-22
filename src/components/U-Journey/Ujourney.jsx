import React from "react";
import "./Ujourney.css";

function Ujourney() {
  return (
    <div className="Ujourney section">
      <div className="container">
        <div className="left-content">
          <h3 className="section__title U-title">UNIVERSITY JOURNEY</h3>
          <h2 className="section__subtitle U-subtitle">Recruit Excellence</h2>
          <p className="U-tab">
            Hive Steps presents the future development platform to develop
            communication skills and a strategic mindset to bridge the
            professional gap between campus and corporate for students.
          </p>
          <div className="skills-content uj-skills">
            <div className="right-content-uj"></div>
            <div className="U-skills">
              <div className="U-key-skills">
                <p className="s-count">1</p>
                <div className="note-skills">
                  <h3 className="s-head">Soft Skills/ Technical Training</h3>
                  <p className="s-note">
                    Learn from global educators in your interest fields.
                  </p>
                </div>
              </div>
              <div className="U-key-skills">
                <p className="s-count">2</p>
                <div className="note-skills">
                  <h3 className="s-head">Practice with AI</h3>
                  <p className="s-note">
                    Sharpen your skills with AI driven insights.
                  </p>
                </div>
              </div>
              <div className="U-key-skills">
                <p className="s-count">3</p>
                <div className="note-skills">
                  <h3 className="s-head">Assessment Scores</h3>
                  <p className="s-note">
                    Learn from global educators in your interest fields.
                  </p>
                </div>
              </div>
              <div className="U-key-skills">
                <p className="s-count">4</p>
                <div className="note-skills">
                  <h3 className="s-head">US Branding</h3>
                  <p className="s-note">
                    Learn from global educators in your interest fields.
                  </p>
                </div>
              </div>
              <button type="button" className="button uj-butt">
                Connect With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ujourney;
