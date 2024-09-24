import React from 'react';
import SocialIcon from '../atoms/SocialIcon';
import './FooterSocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="social-icons">
      <SocialIcon link="https://www.facebook.com" imgSrc="/facebook.png" altText="Facebook" />
      <SocialIcon link="https://www.dribble.com" imgSrc="/dribbble.png" altText="Dribbble" />
      <SocialIcon link="https://www.behance.com" imgSrc="/behance.png" altText="Behance" />
      <SocialIcon link="https://www.instagram.com" imgSrc="/instagram.png" altText="Instagram" />
      <SocialIcon link="https://www.discord.com" imgSrc="/discord.png" altText="Discord" />
    </div>
  );
};

export default SocialMedia;
