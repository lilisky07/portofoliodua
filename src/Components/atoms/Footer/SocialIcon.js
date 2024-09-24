import React from 'react';
import './SocialIocn.css';

const SocialIcon = ({ link, imgSrc, altText }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imgSrc} alt={altText} className="social-icon" />
    </a>
  );
};

export default SocialIcon;
