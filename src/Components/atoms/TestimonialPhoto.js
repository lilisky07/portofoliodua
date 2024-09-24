import React from 'react';
import './TestimonialPhoto.css';
import Image from '../image/ClientImage.png';
const TestimonialPhoto = ({ src, alt }) => {
  return <img src={Image} alt={alt} className="testimonial-photo" />;
};

export default TestimonialPhoto;
