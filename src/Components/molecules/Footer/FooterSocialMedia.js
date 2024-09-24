import React from 'react';
import SocialIcon from '../../atoms/Footer/SocialIcon';
import './FooterSocialMedia.css';
import facebook from '../../image/facebook.png';
import icon1 from '../../image/discord.png';

const SocialMedia = () => {
  return (
    <div className="social-icons">
      <SocialIcon link="https://www.facebook.com" imgSrc={facebook} altText="Facebook" />
      <SocialIcon link="https://www.dribble.com" imgSrc={icon1} altText="Dribbble" />
      <SocialIcon link="https://www.behance.com" imgSrc={facebook} altText="Behance" />
      <SocialIcon link="https://www.instagram.com" imgSrc={facebook} altText="Instagram" />
      <SocialIcon link="https://www.discord.com" imgSrc={facebook} altText="Discord" />
    </div>
  );
};

export default SocialMedia;
