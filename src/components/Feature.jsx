import React from 'react';
import { Video } from './Video';
import OpenType from '../Assets/OpenType.svg';
import RealData from '../Assets/realData.svg';
import Ways from '../Assets/ways.svg';
import IntroVideo from '../Assets/IntroVideo.mp4';
export const Feature = ({ heading, subtitle, showFeatures }) => {
  return (
    <section className='feature-section'>
      <h1>{heading}</h1>
      <h2>{subtitle}</h2>

      {showFeatures ? (
        <div className='features-container'>
          <div className='features'>
            <div className='logo'>
              <img src={OpenType} alt='OpenType' />
            </div>

            <div className='feature-detail'>
              <h3>Code completion and suggestion</h3>
              <p>
                ChatGPT can provide suggestions for code completion and assist
                with debugging by suggesting possible fixes for errors.
              </p>
            </div>
          </div>
          <div className='features'>
            <div className='logo'>
              <img src={RealData} alt='realData' />
            </div>

            <div className='feature-detail'>
              <h3>Documentation generation</h3>
              <p>
                ChatGPT can automatically generate documentation for code,
                making it easier for developers to understand and work with
                existing code bases.
              </p>
            </div>
          </div>
          <div className='features'>
            <div className='logo'>
              <img src={Ways} alt='Ways' />
            </div>

            <div className='feature-detail'>
              <h3>Collaboration and communication</h3>
              <p>
                ChatGPT can facilitate communication and collaboration between
                team members, helping them to stay on track and ensure that all
                necessary tasks are completed efficiently.
              </p>
            </div>
          </div>
        </div>
      ) : null}
      <div style={{ marginBottom: '30px' }} />
      <Video videoSrc={IntroVideo} showControls={false} />
    </section>
  );
};
