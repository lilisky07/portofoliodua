import React from 'react';
import SkillIcon from '../atoms/SkillIcon';
import SkillTitle from '../atoms/SkillTitle';
import SkillDescription from '../atoms/SkillDescription';
import './SkillCard.css';

const SkillCard = ({ iconSrc, iconAlt, title, description }) => {
  return (
    <div className="skill-card">
      <SkillIcon src={iconSrc} alt={iconAlt} />
      <SkillTitle title={title} />
      <SkillDescription description={description} />
    </div>
  );
};

export default SkillCard;
