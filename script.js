// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Typing Effect
const text = "Web technologies power the modern internet...";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-effect").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;

const quotes = [
    "Your website isn’t just code—it’s an experience. Build it like an artist, refine it like an engineer.",
    "Great web design is like great magic—when done right, no one sees the tricks, just the wonder.",
    "The web is a canvas, and every line of code you write is a brushstroke on the digital world.",
    "Training a model is like training your mind—the more data you process, the smarter you become.",
    "Machine Learning isn’t about making machines think—it’s about teaching them to learn, just like us.",
    "In AI, the difference between failure and innovation is one well-tuned parameter.",
    "DSA isn’t just about solving problems—it’s about solving them elegantly, efficiently, and with style.",
    "Every algorithm is a story of logic, and every data structure is its plot twist.",
    "The shortest path to success? Optimize your approach, just like a good Dijkstra’s algorithm.",
    "Code is poetry, logic is rhythm, and debugging is the art of turning chaos into harmony.",
];

document.getElementById("quote-btn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").textContent = quotes[randomIndex];
});


// Save this in a separate file (e.g., music-player.js) or inside a <script> tag at the bottom of your HTML

// References to DOM elements
const audio = document.getElementById("audio");
const muteBtn = document.getElementById("mute-btn");
const trackTitle = document.getElementById("track-title");

// Define your playlist
const playlist = [
  {
    title: "Slash of Void",
    src: "Background custom/FGO.mp3",
    bg: "Background custom/FGO.gif"
  },
  {
    title: "Flowers",
    src: "Background custom/Flowers.mp3",
    bg: "Background custom/Flowers.gif"
  },
  {
    title: "Genshin Main Theme",
    src: "Background custom/Genshin.mp3",
    bg: "Background custom/Genshin Main Theme.gif"
  }
];
let infoTimeout;
let currentIndex = 0;
let isMuted = false;

// Set a default volume (0.0 to 1.0)
audio.volume = 0.5;

// Load the first track and start playing
window.addEventListener("DOMContentLoaded", () => {
  loadTrack(currentIndex);
  audio.play();
});

// Load a track by index
function loadTrack(index) {
  const track = playlist[index];
  audio.src = track.src;
  trackTitle.textContent = track.title;

  document.querySelector('.music-player').style.backgroundImage = `url("${track.bg}")`;

  fadeInInfo();
  if (infoTimeout) clearTimeout(infoTimeout);
  infoTimeout = setTimeout(fadeOutInfo, 4000);
}

// When the current track ends, move to the next track and loop back
audio.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadTrack(currentIndex);
  audio.play();
});

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  audio.muted = isMuted;
  muteBtn.textContent = isMuted ? "🔇" : "🔊";
  
  // On mute toggle, fade in the track info for 4 seconds
  fadeInInfo();
  if (infoTimeout) clearTimeout(infoTimeout);
  infoTimeout = setTimeout(fadeOutInfo, 4000);
});

function fadeInInfo() {
  document.querySelector(".track-info").classList.remove("fade-out");
}

function fadeOutInfo() {
  document.querySelector(".track-info").classList.add("fade-out");
}




        function toggleDarkMode() {
            document.documentElement.classList.toggle("dark-mode");
        
            // Save preference to localStorage
            if (document.documentElement.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        }
        
        // Load the theme preference on page load
        window.onload = function() {
            if (localStorage.getItem("theme") === "dark") {
                document.documentElement.classList.add("dark-mode");
            }
        };
        
        