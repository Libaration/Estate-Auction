import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../icon.png';
import logoText from '../logoText.png';

const Navbar = (props) => {
  return (
    <div className="nav">
      <div className="sideLogo">
        <img src={icon} alt="logo-icon" />
      </div>
      <div className="header">
        <img src={logoText} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
