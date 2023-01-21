import React from 'react';
import Location from '../Assets/Location.svg';
import Phone from '../Assets/phone.svg';
import Facebook from '../Assets/Facebook.svg';
import Linkedin from '../Assets/Linkedin.svg';
import { ReactComponent as Logo } from '../Assets/Logo.svg';

// TODO: change footer as per GS website footer

export const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer-inner-section'>
        <div className='Site-map-container'>
          <div className='Links-block Links-block-1'>
            <Logo />
            <p className='company-name'>Garmatsch Software</p>

            <div className='address-container'>
              <address>
                <img src={Location} alt='Location' />
                <p>123 Main Street, Anyhow, USA</p>
              </address>
              <address style={{ marginBottom: '20px' }}>
                <img src={Phone} alt='Phone#' />
                <a href='tel:1234567890' style={{ marginBottom: '0' }}>
                  Call us at 123-456-7890
                </a>
              </address>
            </div>
            <div className='social-Links'>
              <a href='https://linkedin.com'>
                <img src={Linkedin} alt='Linkedin' />
              </a>
              <a href='https://facebook.com'>
                <img src={Facebook} alt='Facebook' />
              </a>
            </div>
          </div>
          <div className='Links-block'>
            <p style={{ marginBottom: '20px' }}>Use-Case</p>
            <a href='*'>Home</a>
            <a href='*'>Product</a>
            <a href='*'>Pricing</a>
            <a href='*'>About</a>
            <a href='*'>Contact</a>
          </div>
        </div>
      </section>
    </footer>
  );
};
