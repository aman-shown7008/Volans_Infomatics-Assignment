// FAQs.jsx

import React, { useState } from 'react';
import './FAQs.css';

function FAQs() {
  const faqsData = [
    { id: 1, question: 'Q. How do I sign up for corporate training for my college students?', answer: 'Click on Connect with us and sign up the futuristic training platform.' },
    { id: 2, question: 'Q. Will I receive any certificate for completing the training?', answer: 'Yes, after completing the training course, you will receive the certificate for the same.' },
    { id: 3, question: 'Q. How will I get access to my selected candidates?', answer: 'After logging in your account, you can access the selected candidates.' },
    { id: 4, question: 'Q. What should I do to access the same questionnaires again?', answer: 'You can go the company website to access the same questionnaire again.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="FAQs section">
      <div className="container">
        <h3 className="section__title card__title">WANT TO CLEAR YOUR DOUBTS?</h3>
        <h2 className="section__subtitle">Frequently Asked Questions</h2>
        <p className="t-text">
          Hive Steps bridges the gap between learning a new language with ease, practice,
          and real-time feedback through its futuristic platform. Based on years of
          research from global educators to help learn with confidence. Be it IELTS, SAT,
          or any interview.
        </p>
        <div className="accordion-container">
          <div className="accordion-column left">
            {faqsData.slice(0, 2).map((faq, index) => (
              <div
                key={faq.id}
                className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}>
                <div className="accordion-title">
                  <span>{faq.question}</span>
                  {activeIndex === index ? '-' : '+'}
                </div>
                <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
          <div className="accordion-column right">
            {faqsData.slice(2).map((faq, index) => (
              <div
                key={faq.id}
                className={`accordion-item ${activeIndex === index + 2 ? 'active' : ''}`}
                onClick={() => toggleAccordion(index + 2)}
              >
                <div className="accordion-title">
                  <span>{faq.question}</span>
                  {activeIndex === index + 2 ? '-' : '+'}
                </div>
                <div className={`accordion-content ${activeIndex === index + 2 ? 'active' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
