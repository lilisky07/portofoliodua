import React from 'react';
import './InputField.css';

const InputField = ({ type, placeholder }) => {
  return <input type={type} className="form-control" placeholder={placeholder} />;
};

export default InputField;
