import React from 'react';
import { Link } from 'react-router-dom';

export default function SideNav() {
  return (
    <div className="sideNav">
      <div className="sideNavLinks">
        <Link to="/">Home</Link>
        <Link to="/homes">Auctions</Link>
      </div>
    </div>
  );
}
