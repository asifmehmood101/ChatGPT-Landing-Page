import React from 'react';
import Location from '../Assets/Location.svg';
import Phone from '../Assets/phone.svg';
import Facebook from '../Assets/Facebook.svg';
import Linkedin from '../Assets/Linkedin.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer-inner-section'>
        <div className='Links-block'>
          <p>Pages</p>
          <a href='*'>Home</a>
          <a href='*'>Product</a>
          <a href='*'>Pricing</a>
          <a href='*'>About</a>
          <a href='*'>Contact</a>
        </div>
        <div className='Links-block'>
          <p>Use-Case</p>
          <a href='*'>Home</a>
          <a href='*'>Product</a>
          <a href='*'>Pricing</a>
          <a href='*'>About</a>
          <a href='*'>Contact</a>
        </div>
        <div className='Links-block'>
          <p>Timothy</p>
          <a href='*'>Home</a>
          <a href='*'>Product</a>
          <a href='*'>Pricing</a>
          <a href='*'>About</a>
          <a href='*'>Contact</a>
        </div>
        <div className='address-container'>
          <address>
            <img src={Location} alt='Location' />
            <p>123 Main Street, Anyhow, USA</p>
          </address>
          <address>
            <img src={Phone} alt='Phone#' />
            <a href='tel:1234567890'>Call us at 123-456-7890</a>
          </address>

          <ul>
            <li>
              <a href='https://facebook.com'>
                <img src={Facebook} alt='Facebook' />
              </a>
            </li>
            <li>
              <a href='https://linkedin.com'>
                <img src={Linkedin} alt='Linkedin' />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
