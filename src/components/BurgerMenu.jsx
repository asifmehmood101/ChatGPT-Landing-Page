import React, { useState,useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import Facebook from '../Assets/Facebook.svg';
import Twitter from '../Assets/Tweeter.svg';
import { ReactComponent as Logo } from '../Assets/Logo.svg';
export const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {

    if (isOpen) {
      
      

    }



  },[isOpen])


  return (
    <div className='burger-men-container'>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        color={isOpen ? '#209266' : '#ffff'}
      />

      {isOpen && (
        <div className='burger-menu'>
          <div className='burger-logo'>
            <Logo />
          </div>
          <div className='burger-link'>
            <Link to='/' className='hover-1'>
              Home
            </Link>
          </div>
          <div className='burger-link'>
            <Link to='/'>Product</Link>
          </div>
          <div className='burger-link'>
            <Link to='/'>Pricing</Link>
          </div>
          <div className='burger-link'>
            <Link to='/'>About</Link>
          </div>
          <div className='burger-link'>
            <Link to='/'>Contact</Link>
          </div>
          <div className='burger-link'>
            <Link to='/use-cases'>Use-Cases</Link>
          </div>
        </div>
      )}
    </div>
  );
};
