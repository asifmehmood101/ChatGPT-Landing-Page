import React from 'react';
import { UseCasesHero } from '../components/UseCasesHero';
import { Feature } from '../components/Feature';
import { Footer } from '../components/Footer';
import { DataArray as StaticDataArray } from '../Utility/DummyData';

export const UseCases = () => {
  return (
    <div>
      <UseCasesHero />
      <Feature
        heading='List of use-Cases'
        subtitle='ChatGPT is a cutting-edge natural language processing (NLP) model
        developed by OpenAI.'
      />
      <div class='showCase-container'>
        {StaticDataArray.map(({ id, title, subtitle, Link, image }) => {
          return (
            <div class='hoverbox' key={id}>
              <img class='hoverbox__image' src={image} alt='Test Img' />
              <h3>{title}</h3>
              <p>{subtitle}</p>
              <a href={Link}>More infos</a>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
