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

// Menu Update ftn
function menuUpdate() {
  // main.appendChild(overlay);
  // main.classList.toggle("overlay-added");

  menuListSpan.classList.toggle("menu-display");

  menuIcon3.classList.toggle("hide-third-icon");
  menuIcon2.classList.toggle("rotate-icon-2");
  menuIcon1.classList.toggle("rotate-icon-1");

  const icons = document.querySelectorAll(".menu-icon");
  icons.forEach((icon) => {
    icon.style.transition = "ease-in 0.5s";
  });
}

// event listener on the menu icon span
menuIconSpan.addEventListener("click", menuUpdate);

// Make the icons close with the Escape key
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Escape") menuUpdate();

  if (menuListSpan.classList.contains("hidden")) menuUpdate();
});

// Menu closes when clicked outside the box
overlay.addEventListener("click", menuUpdate);

// Update year at the footer
const footerYear = document.querySelector(".year");
const date = new Date();
const currentYear = date.getFullYear();
footerYear.textContent = currentYear;
console.log(footerYear);
