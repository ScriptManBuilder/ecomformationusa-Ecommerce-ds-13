import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'E-commerce & Online Retail Businesses',
      answer: 'Merchants acquiring customers through e-commerce platforms, online stores, and digital shopping carts. We specialize in recovering failed payments from online transactions and web-based checkout flows.'
    },
    {
      question: 'Digital Product & SaaS Merchants',
      answer: 'Businesses processing high-volume online orders and digital subscriptions. Our system is optimized for automated checkouts and e-commerce billing environments with elevated decline rates.'
    },
    {
      question: 'Shopify, WooCommerce & Platform Stores',
      answer: 'Both standalone online stores and platform-based e-commerce operations. Our decline recovery technology works seamlessly with your existing e-commerce infrastructure and payment gateways.'
    },
    {
      question: 'Direct-to-Consumer (DTC) Brands',
      answer: 'Merchants running direct-to-consumer campaigns with online order fulfillment. Recover more revenue from your marketing spend by salvaging declined web orders.'
    },
    {
      question: 'B2B E-commerce Platforms',
      answer: 'Business-to-business companies processing orders via online portals and e-commerce platforms. Reduce payment friction in your B2B sales process and improve conversion rates on digital transactions.'
    },
    {
      question: 'Subscription & Recurring Billing Services',
      answer: 'E-commerce businesses handling subscription renewals, recurring billing, and payment updates. Perfect for reducing involuntary churn and recovering failed recurring payments automatically.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Who We Serve</FAQTitle>
        <FAQDescription>
          We support businesses across multiple industries and payment environments
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
