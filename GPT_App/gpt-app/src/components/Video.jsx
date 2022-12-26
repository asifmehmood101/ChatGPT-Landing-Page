import React from 'react';
import IntroVideo from '../Assets/video.mp4';

export const Video = () => {
  //   const VideoPlayerRef = React.useRef(null);
  //   //   const [] = React.useState();
  //   const HandleVideoPlayer = () => {
  //     if (VideoPlayerRef.paused) {
  //       VideoPlayerRef.play();

  //       VideoPlayerRef.innerHTML = `<div> <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <rect x="8" y="0" width="8" height="48" fill="white" />
  //   <rect x="24" y="0" width="8" height="48" fill="white" />
  // </svg></div>`;
  //     } else {
  //       VideoPlayerRef.pause();

  //       VideoPlayerRef.innerHTML = `<div><svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path d="M0.402344 0.593994L39.4434 24.0186L0.402344 47.4432V0.593994Z" fill="white"/>
  // </svg></div>`;
  //     }
  //   };
  return (
    <div className='video-container'>
      <video className='video' src={IntroVideo}></video>
      <button className='video-button'>
        <div>
          <svg
            width='40'
            height='48'
            style={{ margin: 'auto' }}
            viewBox='0 0 40 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.402344 0.593994L39.4434 24.0186L0.402344 47.4432V0.593994Z'
              fill='white'
            />
          </svg>
        </div>
      </button>
    </div>
  );
};
