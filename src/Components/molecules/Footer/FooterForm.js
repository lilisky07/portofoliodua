import React from 'react';
import InputField from '../../atoms/Footer/InputField';
import Button from '../../atoms/Header/ButtonHeader';
import FooterForm from './FooterForm.css';

const Form = () => {
  return (
    <form className="footer-form">
      <div className="form-group">
        <InputField type="text" placeholder="Your Name" />
      </div>
      <div className="form-group">
        <InputField type="email" placeholder="Your Email Address" />
      </div>
      <Button label="Submit" />
    </form>
  );
};

export default Form;
