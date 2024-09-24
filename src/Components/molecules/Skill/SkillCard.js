import React from 'react';
import SkillIcon from '../../atoms/Skills/SkillIcon';
import SkillTitle from '../../atoms/Skills/SkillTitle';
import SkillDescription from '../../atoms/Skills/SkillDescription';
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
