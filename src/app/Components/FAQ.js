import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What store would you recommend for a start, one product store or niche store?",
      answer: "We recommend starting a niche store for beginners as it helps in exploring multiple options at once and also targets broader audience. It also minimizes the risks like if one product does not getthe expected response in the trial you can testthe other product."
    },
    {
      question: "Which platform you use to build the stores?",
      answer: "We use Shopify because itis userfriendly, easy and a reliable platform."
    },
    {
      question: "Where are the products shipped from?",
      answer: "We ship our products from reliable suppliers based in the US, Europe, or Asia. We strike a deal as soon as sales start coming in and get everything delivered according to the delivery time."
    },
    {
      question: "Why choose the products placed in the store?",
      answer: "We research on markettrends, demands and analyze profitability of a product hence each of our productis carefully handpicked by ourteam and can ensure your store’s growth."
    },
    {
      question: "I have never done drop shipping. Should Itry it?",
      answer: "Yes, drop shipping does notrequire much. Itis a low investment beginner-friendly model which is a great option to start your business with"
    },
    {
      question: "How can I contact you before or after my purchase?",
      answer: "You can contact us via our email, phone orthe contactform on our site. Our supportteam is available both before and after our purchase."
    },
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
