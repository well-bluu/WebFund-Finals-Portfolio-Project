// ==================
//    SELECTORS
// ==================
const introOverlay = document.getElementById("intro-overlay");
const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const themeBtn = document.getElementById("theme-btn");
const profilePicture = document.getElementById("profile-picture");

// ==================
//    IMAGES
// ==================
const lightImg = "./assets/images/me-open-eyes.jpg";
const darkImg = "./assets/images/me-close-eyes.png";

// ==================
//    INTRO OVERLAY
// ==================
window.addEventListener("load", () => {
  setTimeout(() => {
    introOverlay.classList.add("hidden");
    setTimeout(() => (introOverlay.style.display = "none"), 800);
  }, 2500);
});

// ==================
//    HAMBURGER MENU
// ==================
function closeMenu() {
  hamburgerBtn.classList.remove("active");
  menu.classList.remove("active");
  overlay.classList.remove("active");
}

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", closeMenu);
menu
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));

// ==================
//    DARK MODE
// ==================
function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  profilePicture.src = isDark ? darkImg : lightImg;
  profilePicture.alt = isDark ? "Me with closed eyes" : "Me with open eyes";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

themeBtn.addEventListener("click", () => {
  setTheme(!document.body.classList.contains("dark"));
});

// ==================
//    SMOOTH SCROLL
// ==================
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
