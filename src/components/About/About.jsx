import React from 'react'
import "./about.css";

function About() {
  return (
    <div className="about">
        <div className="container c-about">
            <div className="about__content">
                <h3 className="section__title main">ABOUT HIVE STEPS</h3>
                <h2 className='sub-main'>Language Learning Platform powered by Artificial Intelligence</h2>
                <p className='a-intro'>Hive steps bridges the gap between learning a new language with ease, practice and real-time feedback through its futuristic platform. Based on  years of research from global educators to help learn with confidence. Be it IELTS, SAT, or any interview.</p>
                <p className='a-para'>• Includes Learning Courseware and Practice Modules.</p>
                <p className='a-para'>• Focused on Reading, Listening, Writing and Speaking in the right order.</p>
                <p className='a-para'>• Create your own content & Assessments easily.</p>
                <p className='a-para'>• Scalable Cloud solutions to grow as your needs grow.</p>
                <button className="button">Connect With Us</button>
            </div>
            <div className="sec-img"> 
            </div>
        </div>
    </div>
  )
}

export default About