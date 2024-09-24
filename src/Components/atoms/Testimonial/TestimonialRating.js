import React from 'react';
import './TestimonialRating.css';

const TestimonialRating = ({ rating }) => {
  return <div className="testimonial-rating">{'★'.repeat(rating)}</div>;
};

export default TestimonialRating;
