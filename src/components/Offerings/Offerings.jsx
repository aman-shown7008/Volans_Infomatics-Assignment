import React from 'react';
import "./offerings.css";

function Offerings() {
  return (
    <div className="offerings section">
        <div className="container">
            <h3 className="section__title l-title">OUR OFFERINGS</h3>
            <h2 className="section__subtitle l-subtitle O-sub">Explore Our Offerings</h2>
            <div className="data-offerings">
                <div className="left-side">
                    <div className="left-img"></div>
                    <div className="offerings-card">
                        <p className="s-count">1</p>
                        <div className="note-skills">
                            <h3 className="s-head">The LSRW Module</h3>
                            <p className="s-note">Highly effective listening, speaking, reading and writing methodologies.</p>
                        </div>
                    </div>
                    <div className="offerings-card">
                        <p className="s-count">3</p>
                        <div className="note-skills">
                            <h3 className="s-head">Skills Trainings & Workshops</h3>
                            <p className="s-note">Upskill and curate 21st-century skills.</p>
                        </div>
                    </div>
                    <div className="offerings-card">
                        <p className="s-count">5</p>
                        <div className="note-skills">
                            <h3 className="s-head">AI Assessment</h3>
                            <p className="s-note">Practice with AI, analyse your scores and generate your global ranking.</p>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right-img"></div>
                    <div className="offerings-card">
                        <p className="s-count">2</p>
                        <div className="note-skills">
                            <h3 className="s-head">Lesson Studio</h3>
                            <p className="s-note">Grab customised learning materials for optimum results</p>
                        </div>
                    </div>
                    <div className="offerings-card">
                        <p className="s-count">4</p>
                        <div className="note-skills">
                            <h3 className="s-head">Global Educators</h3>
                            <p className="s-note">Connect with experts around the globe</p>
                        </div>
                    </div>
                    <div className="offerings-card">
                        <p className="s-count">6</p>
                        <div className="note-skills">
                            <h3 className="s-head">User Friendly</h3>
                            <p className="s-note">Learn with ease in the metaverse.</p><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offerings