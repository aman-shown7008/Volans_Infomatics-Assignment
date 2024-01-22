import React from "react";
import "./Ljourney.css";

function Ljourney() {
  return (
    <div className="Ljourney section">
      <div className="container">
        <div className="left-content">
          <h3 className="section__title l-title">LEARNER'S JOURNEY</h3>
          <h2 className="section__subtitle l-subtitle">Road To Language Tab</h2>
          <p className="l-tab">
            Step into the metaverse with Language Lab to develop communication
            skills in the most effective manner. From phonetics to soft skills
            courses, get a hold of the language with global experts and AI with
            ease.
          </p>
          <div className="skills-content">
            <div className="l-skills">
              <div className="l-key-skills">
                <p className="s-count">1</p>
                <div className="note-skills">
                  <h3 className="s-head">Perfect Phonetics</h3>
                  <p className="s-note">Perfecting Your Base Foundation</p>
                </div>
              </div>
              <div className="l-key-skills">
                <p className="s-count">2</p>
                <div className="note-skills">
                  <h3 className="s-head">Focused Training</h3>
                  <p className="s-note">
                    Learn With Global Educators In The Area Of Your Interest And
                    Needs
                  </p>
                </div>
              </div>
              <div className="l-key-skills">
                <p className="s-count">3</p>
                <div className="note-skills">
                  <h3 className="s-head">Practice With AI</h3>
                  <p className="s-note">
                    Enhance Your Skills With AI Driven Tests
                  </p>
                </div>
              </div>
              <div className="l-key-skills">
                <p className="s-count">4</p>
                <div className="note-skills">
                  <h3 className="s-head">Assessment Scores</h3>
                  <p className="s-note">
                    Professional Analysis To Perfect The Needed Areas
                  </p>
                </div>
              </div>
            </div>
            <div className="right-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ljourney;
