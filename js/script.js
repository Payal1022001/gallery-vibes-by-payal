
// js/script.js

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Color Picker
const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", (e) => {
  document.body.classList.remove("pink", "blue", "purple");
  if (e.target.value !== "default") {
    document.body.classList.add(e.target.value);
  }
});

// Music Toggle
const music = new Audio("assets/music/bg-music.mp3");
music.loop = true;
let isPlaying = false;
document.getElementById("music-toggle").addEventListener("click", () => {
  isPlaying = !isPlaying;
  isPlaying ? music.play() : music.pause();
});

// Password-protected gallery logic
const correctPassword = "payal123";
const unlockBtn = document.getElementById("unlock-gallery");
const passInput = document.getElementById("gallery-pass");
const galleryContainer = document.getElementById("gallery-container");
const passMsg = document.getElementById("pass-msg");

unlockBtn.addEventListener("click", () => {
  if (passInput.value.trim() === correctPassword) {
    galleryContainer.style.display = "block";
    document.getElementById("password-lock").style.display = "none";
    passMsg.textContent = "";
  } else {
    passMsg.textContent = "Incorrect password. Please try again.";
  }
});

// Slider Autoplay
const slides = document.querySelectorAll(".slide");
let current = 0;
setInterval(() => {
  slides.forEach((slide, i) => {
    slide.style.display = i === current ? "block" : "none";
  });
  current = (current + 1) % slides.length;
}, 3000);

// Scroll To Top
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Lightbox Zoom Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const galleryImgs = document.querySelectorAll(".gallery-item img");
const closeBtn = document.querySelector(".close");

galleryImgs.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// AOS Init
AOS.init();

// Particles Init
particlesJS.load("particles-js", "particles.json", () => {
  console.log("Particles loaded.");
});

// Glowing Heart Trail
const heartTrail = () => {
  const heart = document.createElement("div");
  heart.innerText = "❤";
  heart.className = "heart-trail";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
};
setInterval(heartTrail, 400);
