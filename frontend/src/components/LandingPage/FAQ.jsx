import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const FAQ = () => {
  const faqData = [
    {
      question : "About Our Company",
      answer : "At Your Company Name, we believe in the power of innovation and excellence. Our mission is to provide high-quality products and services that drive success for our customers. With years of experience in Your Industry/Niche, we specialize in understanding our clients’ needs and offering tailored solutions to ensure their growth and satisfaction."
    },
    {
      question: 'What is Nicheflare?',
      answer:
        'Nicheflare is a niche content subscription network offering exclusive articles, videos, and interactive guides on specialized topics behind a paywall.',
    },
    {
      question: 'How do I subscribe to Nicheflare?',
      answer:
        'You can subscribe by registering an account and choosing a subscription plan that fits your needs, either monthly or annually.',
    },
    {
      question: 'What kind of content is available?',
      answer:
        'We offer high-quality, specialized content such as gourmet cooking tutorials, advanced DIY projects, and sustainable living tips.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer:
        'Yes, you can cancel your subscription at any time through your account settings. Your access will remain active until the end of the current billing cycle.',
    },
    {
      question: 'Do you offer a free trial?',
      answer:
        'We offer a 14-day free trial for new subscribers to explore our content and features before committing to a paid plan.',
    },
    {
      question: 'How can I become a content contributor?',
      answer:
        'If you have expertise in a niche area and are interested in contributing content, please reach out to us through our contact page for more information.',
    },
    {
      question: 'Is my payment information secure?',
      answer:
        'Absolutely. We use industry-standard encryption and secure payment gateways to ensure your payment information is safe.',
    },
    {
      question: 'Do you offer corporate subscriptions?',
      answer:
        'Yes, we offer corporate and group subscriptions. Please contact our sales team to discuss custom plans and pricing.',
    },
    

  ];

  return (
    <div className="faq-container container my-5">
      <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded="false"
                aria-controls={`collapse-${index}`}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
