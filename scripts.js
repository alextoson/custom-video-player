const video = document.querySelector("#video");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timestamp = document.querySelector("#timestamp");

// Play & pause video
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

// Update play/pause icon
const updatePlayIcon = () => {
  if (video.paused) {
    play.querySelector("i").classList.replace("fa-pause", "fa-play");
  } else {
    play.querySelector("i").classList.replace("fa-play", "fa-pause");
  }
};

// Update progress & timestamp
const updateProgress = () => {
  return true;
};

// Set video time to progress

const setVideoProgress = () => {
  return true;
};

// stop video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

//Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
