import React from 'react';


const NavbarLinks = () => {
  return (
    <ul className="navbar-nav ms-auto custom-nav">
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#work">Work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavbarLinks;
