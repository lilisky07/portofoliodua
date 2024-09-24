import React, { useState } from 'react';
import Logo from '../atoms/Navbar/Logo';
import NavbarLinks from '../molecules/Navbar/NavbarLinks';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Logo />
      
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <NavbarLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
