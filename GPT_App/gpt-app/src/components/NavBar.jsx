import React from 'react';
import Twitter from '../Assets/Tweeter.svg';
import Facebook from '../Assets/Facebook.svg';
import { Link } from 'react-router-dom';

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
          <svg
            width='75'
            height='55'
            viewBox='0 0 49 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg%22%3E'
          >
            <path
              d='M4.01172 13.9941L14.71 18.3179V21.6675L0.730469 15.1904V12.6953L14.71 6.23535V9.58496L4.01172 13.9941ZM20.3325 27.1362H17.6152L28.0059 0.117188H30.7061L20.3325 27.1362ZM45.3179 13.8916L34.0215 9.46533V6.21826L48.6162 12.6782V15.1733L34.0215 21.6504V18.3691L45.3179 13.8916Z'
              fill='#16E998'
            ></path>
          </svg>
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
