let video = document.querySelector('.video');
// Get the video button
let videoButton = document.querySelector('.video-button');

// Function to toggle the video between play and pause
const toggleVideo = () => {
  console.log(video);

  if (video.paused) {
    video.play();

    videoButton.innerHTML = `<div> <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="0" width="8" height="48" fill="white" />
  <rect x="24" y="0" width="8" height="48" fill="white" />
</svg></div>`;
  } else {
    video.pause();

    videoButton.innerHTML = `<div><svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.402344 0.593994L39.4434 24.0186L0.402344 47.4432V0.593994Z" fill="white"/>
</svg></div>`;
  }
};
