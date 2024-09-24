import React from 'react';
import TestimonialName from '../../atoms/Testimonial/TestimonialName';
import TestimonialRating from '../../atoms/Testimonial/TestimonialRating';
import './TestimonialDetails.css';

const TestimonialDetails = ({ name, rating }) => {
  return (
    <div className="testimonial-details">
      <TestimonialRating rating={rating} />
      <TestimonialName name={name} />
      <p className="testimonial-google">Google</p>
    </div>
  );
};

export default TestimonialDetails;
