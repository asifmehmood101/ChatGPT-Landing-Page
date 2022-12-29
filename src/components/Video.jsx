import React from 'react';
import ReactPlayer from 'react-player';
import { PauseIcon } from '../Assets/PauseIcon';
import { PlayIcon } from '../Assets/PlayIcon';

export const Video = ({ showControls, videoSrc, videoType = 'introvideo' }) => {
  const [playing, setPlaying] = React.useState(false);

  const HandleVideoPlayer = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <div
      className={
        videoType === 'useCase' ? 'useCase-video-container' : 'video-container'
      }
    >
      <ReactPlayer
        url={videoSrc}
        width='100%'
        height='100%'
        controls={showControls}
        playing={playing}
      />

      {!showControls && (
        <button className='video-button' onClick={HandleVideoPlayer}>
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      )}
    </div>
  );
};
