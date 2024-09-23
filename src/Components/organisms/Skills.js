import React from 'react';
import SkillCard from '../molecules/SkillCard';
import './Skills.css';
import Version1 from '../image/Version=1.png';
import Version2 from '../image/Version=2.png';
import Version3 from '../image/Version=3.png';

const Skills = () => {
  return (
    <div className="skills-container">
      <SkillCard 
        iconSrc={Version1}
        iconAlt="Product Design" 
        title="Product Design" 
        description="Crafting digital products that solve real-world problems with innovative design solutions." 
      />
      <SkillCard 
        iconSrc={Version2}
        iconAlt="Visual Design" 
        title="Visual Design" 
        description="Creating engaging visuals to communicate ideas and enhance user experiences." 
      />
      <SkillCard 
        iconSrc={Version3}
        iconAlt="Art Direction" 
        title="Art Direction" 
        description="Leading the creative vision to align with the brand's aesthetic and storytelling goals." 
      />
    </div>
  );
};

export default Skills;
