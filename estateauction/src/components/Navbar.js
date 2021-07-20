import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../icon.png';

const Navbar = (props) => {
  return (
    <div className="nav">
      <div className="sideLogo">
        <img src={icon} alt="logo-icon" />
      </div>
      <div className="header"></div>
      {props.loggedIn ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
