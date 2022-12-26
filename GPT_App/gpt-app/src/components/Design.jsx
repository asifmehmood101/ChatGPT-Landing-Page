import React from 'react';
import MacBook from '../Assets/MacbookPro.png';

export const Design = () => {
  return (
    <div style={{ backgroundColor: '#252b42' }}>
      <section className='design-container'>
        <div className='content-container'>
          <h2>Fastest way to Develop your Product</h2>
          <p>
            Maximize efficiency and minimize setbacks with our expert guidance
            and resources for successful product development
          </p>
          <button>Try for Free</button>
        </div>
        <div className='image-container'>
          <img src={MacBook} alt='Organization tools' />
        </div>
      </section>
    </div>
  );
};
