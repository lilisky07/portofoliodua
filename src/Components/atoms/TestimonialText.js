import React from 'react';
import './TestimonialText.css';

const TestimonialText = ({ text }) => {
  return (
    <div className="testimonial-text">
      <p>{text}</p>
    </div>
  );
};

export default TestimonialText;
