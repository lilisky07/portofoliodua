import React from 'react';
import SocialMedia from '../molecules/FooterSocialMedia';
import Form from '../molecules/FooterForm';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row">
          {/* Left Side - Text and Social Media */}
          <div className="col-lg-6 col-md-12 footer-left">
            <h2 className="footer-title">Let's work together</h2>
            <p className="footer-description">
              If you’re interested in working together or just want to say hello, feel free to get in touch.
            </p>
            <SocialMedia />
          </div>

          {/* Right Side - Form */}
          <div className="col-lg-6 col-md-12 footer-right">
            <Form />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
