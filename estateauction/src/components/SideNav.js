import React from 'react';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import { useRef, useEffect } from 'react';

export default function SideNav() {
  const sideNavRef = useRef();

  return (
    <>
      <div className="menuIcon">
        <Hamburger
          direction="right"
          onToggle={(toggled) => {
            if (toggled) {
              sideNavRef.current.style.left = '0';
            } else {
              sideNavRef.current.style.left = '-200px';
            }
          }}
        />
      </div>

      <div className="sideNav" ref={sideNavRef}>
        <div className="sideNavLinks">
          <Link to="/">Home</Link>
          <Link to="/homes">Auctions</Link>
        </div>
      </div>
    </>
  );
}
