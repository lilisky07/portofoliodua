import React from 'react';
import TestimonialText from '../../atoms/Testimonial/TestimonialText';
import TestimonialInfo from '../../molecules/Testimonial/TestimonialInfo';
import './TestimonialCard.css';

const TestimonialCard = ({ text, image, name, rating }) => {
  return (
    <div className="testimonial-card">
      <TestimonialText text={text} />
      <TestimonialInfo image={image} name={name} rating={rating} />
    </div>
  );
};

export default TestimonialCard;
