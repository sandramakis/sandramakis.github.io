"use strict";

// Intersector for animations

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shown");
    } else {
      entry.target.classList.add("hidden");
    }
  });
});

// Add intersector on elements
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// MENU ICON
const menuIconSpan = document.querySelector(".menu-icon--span");
const menuListSpan = document.querySelector(".menu-list--span");

// All list items
const menuIcon1 = document.querySelector(".menu--icon--1");
const menuIcon2 = document.querySelector(".menu--icon--2");
const menuIcon3 = document.querySelector(".menu--icon--3");

// Overlay
const overlay = document.querySelector(".overlay");
const main = document.querySelector("main");

// get the nav bar to add fixed position
const nav = document.querySelector("nav");

// Menu Update ftn
function menuUpdate() {
  // main.appendChild(overlay);
  // main.classList.toggle("overlay-added");

  menuListSpan.classList.toggle("menu-display");
  document.body.classList.toggle("menu-display");

  menuIcon3.classList.toggle("hide-third-icon");
  menuIcon2.classList.toggle("rotate-icon-2");
  menuIcon1.classList.toggle("rotate-icon-1");

  const icons = document.querySelectorAll(".menu-icon");
  icons.forEach((icon) => {
    icon.style.transition = "ease-in 0.5s";
  });
}

// Update year at the footer
const footerYear = document.querySelector(".year");
const date = new Date();
const currentYear = date.getFullYear();
footerYear.textContent = currentYear;

// Event listeners

// event listener on the menu icon span
menuIconSpan.addEventListener("click", menuUpdate);

// Make the icons close with the Escape key
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") menuUpdate();

  if (menuListSpan.classList.contains("hidden")) menuUpdate();
});

// Menu closes when clicked outside the box
overlay.addEventListener("click", menuUpdate);

// listen for when the nav bar reaches the top of the screen
const topOfNav = nav.offsetTop;

function fixNav() {
  console.log(window.scrollY, topOfNav);

  if (window.scrollY >= topOfNav) {
    document.querySelector("main").style.paddingTop = `${nav.offsetHeight}px`;
    document.body.classList.add("fixed-nav");
  } else {
    document.querySelector("main").style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);
