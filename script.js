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



const audio = document.getElementById("background-audio");
        const audioToggle = document.getElementById("audio-toggle");
        const audioStatus = document.getElementById("audio-status");

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                audioToggle.textContent = "🔊";
                audioStatus.textContent = "Playing: Theme";
            } else {
                audio.pause();
                audioToggle.textContent = "🔇";
                audioStatus.textContent = "Paused: Theme";
            }
        }
        document.addEventListener("DOMContentLoaded", function () {
            let audio = document.getElementById("background-audio");
            if (audio) {
                audio.volume = 0.2; // Set volume (0.0 to 1.0)
            }
        });

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
        
        