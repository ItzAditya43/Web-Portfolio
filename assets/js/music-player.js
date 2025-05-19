const audio = document.getElementById("audio");
const muteBtn = document.getElementById("mute-btn");

muteBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    muteBtn.textContent = "🔊";
  } else {
    audio.pause();
    muteBtn.textContent = "🔇";
  }
});
