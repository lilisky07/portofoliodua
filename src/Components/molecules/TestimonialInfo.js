import React from 'react';
import TestimonialPhoto from '../atoms/TestimonialPhoto';
import TestimonialDetails from './TestimonialDetails';
import './TestimonialInfo.css';

const TestimonialInfo = ({ image, name, rating }) => {
  return (
    <div className="testimonial-info">
      <TestimonialPhoto src={image} alt={`${name}'s photo`} />
      <TestimonialDetails name={name} rating={rating} />
    </div>
  );
};

export default TestimonialInfo;
