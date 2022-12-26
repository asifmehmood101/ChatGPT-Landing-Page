import React from 'react';
import { ContactForm } from './ContactForm';

export const ContactUs = () => {
  return (
    <section className='contact-us'>
      <h1>Contact Us</h1>
      <h3>
        Most calendars are designed for teams. Slate is designed for freelancers
      </h3>
      <ContactForm />
    </section>
  );
};
