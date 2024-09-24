import React from 'react';
import './SkillIcon.css';

const SkillIcon = ({ src, alt }) => {
  return <img src={src} alt={alt} className="skill-icon" />;
};

export default SkillIcon;
