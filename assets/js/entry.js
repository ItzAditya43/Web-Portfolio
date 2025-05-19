const video = document.getElementById('transitionVideo');
const exploreBtn = document.getElementById('exploreBtn');

// Load and play video1 (.mov file)
video.src = 'assets/videos/Timeline 1.mov';
video.play();

// After video1 ends → switch to video2 (looping)
video.onended = () => {
  video.src = 'assets/videos/Timeline 2.mov';
  video.loop = true;
  video.play();
  exploreBtn.style.display = 'block';  // Show explore button
};

// On clicking Explore → play video3 once
exploreBtn.addEventListener('click', () => {
  video.loop = false;
  exploreBtn.style.display = 'none';
  
  video.src = 'assets/videos/Timeline 3.mov';
  video.play();

  // When video3 ends → go to About Me
  video.onended = () => {
    window.location.href = 'about.html';
  };
});
