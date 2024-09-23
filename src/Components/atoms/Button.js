import React from 'react';

 
const Button = ({ toggleNavbar }) => {
  return (
    <button
    className="navbar-toggler"
    type="button"
    onClick={toggleNavbar}
  >
    <span className="navbar-toggler-icon"></span>

  </button>
  );
};

export default Button;
