import React from 'react';
import { ContactUs } from '../components/ContactUs';
import { Design } from '../components/Design';
import { Feature } from '../components/Feature';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
export const Main = () => {
  return (
    <div>
      <Hero />
      <Feature
        heading='Feature'
        subtitle='ChatGPT is a cutting-edge natural language processing (NLP) model
        developed by OpenAI.'
        showFeatures
      />
      <Design />
      <ContactUs />
      <Footer />
    </div>
  );
}