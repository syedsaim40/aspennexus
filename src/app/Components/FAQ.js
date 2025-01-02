import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is Next.js?",
      answer: "Next.js is a React framework for production with features like server-side rendering and static site generation."
    },
    {
      question: "How do I use an accordion?",
      answer: "Click on the question to toggle the visibility of the answer."
    },
    {
      question: "Can I customize this component?",
      answer: "Yes, you can modify the styles and functionality to suit your needs."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleAccordion(index)}
          >
            <span>{faq.question}</span>
            <FontAwesomeIcon
              icon={openIndex === index ? faMinus : faPlus}
              className="faq-icon"
            />
          </button>
          <div
            className={`faq-answer ${
              openIndex === index ? 'open' : ''
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
