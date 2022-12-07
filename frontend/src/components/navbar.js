import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';

export default function Navbar() {
  let pathname = window.location.href;

  const { isSidebarOpen, controlSidebar, loggedIn, name } = useGlobalContext();
  const [linkStyle, setLinkStyle] = useState('');
  const { productId } = useParams();
  console.log(productId);

  const changeColor = () => {
    if (
      pathname === 'http://localhost:3000/about' ||
      pathname === 'http://localhost:3000/swatches' ||
      pathname === 'http://localhost:3000/account' ||
      pathname === 'http://localhost:3000/create' ||
      pathname.startsWith('http://localhost:3000/product/')
    )
      setLinkStyle('nav__links nav__linksy');
    else if (pathname === 'http://localhost:3000/sustainabilty')
      setLinkStyle('nav__links nav__linksb');
    else setLinkStyle('nav__links');
  };
  useEffect(() => {
    changeColor();
  }, [pathname]);
  return (
    <nav className='nav'>
      <div className='nav__banner'>
        <p>
          SOFA, SECTIONAL, LOVESEAT, AND OTTOMAN SHIPS WITHIN 4 WEEKS. CHAIR
          SHIPS WITHIN 5 WEEKS
        </p>
      </div>
      <div className={linkStyle}>
        <button
          className={`${
            isSidebarOpen === true
              ? 'toggle hamburger_menu hide-for-desktop'
              : 'hamburger_menu hide-for-desktop'
          }`}
          onClick={controlSidebar}
        >
          <span></span>
          <span></span>
        </button>
        <div className='links_container hide-for-mobile'>
          <Link
            to='/shop'
            className='link3 hide-for-mobile'
            onClick={() => setLinkStyle('nav__links')}
          >
            shop
          </Link>
          <Link
            to='/sustainabilty'
            className='link3 hide-for-mobile'
            onClick={() => setLinkStyle('nav__links nav__linksb')}
          >
            Sustainabilty
          </Link>
          <Link
            to='/swatches'
            className='link3 hide-for-mobile'
            onClick={() => setLinkStyle('nav__links nav__linksy')}
          >
            Swatches
          </Link>
        </div>
        <div className='logo'>
          <Link to='/' onClick={() => setLinkStyle('nav__links')}>
            <h2>SABAI</h2>
          </Link>
        </div>
        <div className='links_container hide-for-mobile'>
          <Link
            to='/about'
            className='link3 hide-for-mobile'
            onClick={() => setLinkStyle('nav__links nav__linksy')}
          >
            about
          </Link>
          {loggedIn ? (
            <Link
              to='/account'
              className='link3 hide-for-mobile'
              onClick={() => setLinkStyle('nav__links nav__linksy')}
            >
              {name}
            </Link>
          ) : (
            <Link
              to='/login'
              className='link3 hide-for-mobile'
              onClick={() => setLinkStyle('nav__links nav__linksy')}
            >
              Login
            </Link>
          )}
          <Link
            to='/cart'
            className='link3 hide-for-mobile'
            onClick={() => setLinkStyle('nav__links nav__linksy')}
          >
            cart
          </Link>
        </div>
        <div className='mobile_link hide-for-desktop'>
          <Link
            to='/cart'
            className='link3 hide-for-desktop'
            onClick={() => setLinkStyle('nav__links nav__linksy')}
          >
            basket
          </Link>
        </div>
      </div>
    </nav>
  );
}
