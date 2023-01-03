import React from 'react';
import Twitter from '../Assets/Tweeter.svg';
import Facebook from '../Assets/Facebook.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/Logo.svg';

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='#products'>Product</Link>
        </li>
        <li>
          <Link to='#pricing'>Pricing</Link>
        </li>
        <li>
          <Link to='#about'>About</Link>
        </li>
        <li>
          <Link to='#contact'>Contact</Link>
        </li>
        <li className='dropdown-menu'>
          <Link to='/use-cases'>Use-Cases</Link>
        </li>
        <li className='logo'>
          <Logo />
        </li>
      </ul>
      <ul>
        <li>
          <a href='https://twitter.com' target='_blank' rel='noreferrer'>
            <img src={Twitter} alt='Twitter' />
          </a>
        </li>
        <li>
          <a href='https://facebook.com' target='_blank' rel='noreferrer'>
            <img src={Facebook} alt='Facebook' />
          </a>
        </li>
      </ul>
    </nav>
  );
};
