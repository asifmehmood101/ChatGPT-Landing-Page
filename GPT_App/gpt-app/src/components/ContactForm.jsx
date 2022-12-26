import React from 'react';

export const ContactForm = () => {
  return (
    <form>
      <input
        type='text'
        id='name'
        name='name'
        placeholder='Please enter your name'
      />
      <br />
      <input
        type='email'
        id='email'
        name='email'
        placeholder='Please enter your email'
      />
      <br />
      <textarea
        id='message'
        name='message'
        placeholder='Please enter your message'
      ></textarea>
      <br />
      <button type='submit'>Send</button>
    </form>
  );
};
