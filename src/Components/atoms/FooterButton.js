import React from 'react';
import './Button.css';
const Button = ({ label }) => {
  return (
    <button className="btn btn-dark mt-3">{label}</button>
  );
};

export default Button;