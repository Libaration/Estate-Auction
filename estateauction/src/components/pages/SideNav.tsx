import React, { ReactElement, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';

interface Props {
  isLoggedIn: boolean;
}

function SideNav({ isLoggedIn }: Props): ReactElement {
  const sideNavRef = useRef<any>();
  return (
    <>
      <div className="menuIcon">
        <Hamburger
          direction="right"
          onToggle={(toggled) => {
            if (toggled) {
              sideNavRef.current.style.left = '0';
              sideNavRef.current.style.opacity = '100';
            } else {
              sideNavRef.current.style.left = '-200px';
              sideNavRef.current.style.opacity = '0';
            }
          }}
        />
      </div>

      <div className="sideNav" ref={sideNavRef}>
        <div className="sideNavLinks">
          <Link to="/">Home</Link>
          <Link to="/homes">Auctions</Link>
          {isLoggedIn ? (
            <>
              {' '}
              <Link to="/homes/add">List New Home</Link>
              <Link to="/profile">My Profile</Link>
            </>
          ) : (
            ''
          )}
          {isLoggedIn ? (
            <Link to="/logout">Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </>
  );
}

export default SideNav;
