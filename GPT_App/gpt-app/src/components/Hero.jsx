import React from 'react';
import { NavBar } from './NavBar';

export const Hero = () => {
  return (
    <section id='hero'>
      <NavBar />
      <div className='hero-content'>
        <h2>Software Development with ChatGPT</h2>
        <p>
          Streamline your software development process and stay ahead of the
          competition with ChatGPT's advanced capabilities
        </p>
        <a className='cta-button' href='*'>
          Try Now
        </a>
      </div>
    </section>
  );
};
