import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className="nav">
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
