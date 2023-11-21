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

const allSections = document.querySelectorAll("main section");

// get the nav bar to add fixed position
const nav = document.querySelector("nav");

const arrowLeft = document.querySelector(".arrow.left");
const arrowRight = document.querySelector(".arrow.right");

// MENU Update ftn
function menuUpdate() {
  menuListSpan.classList.toggle("menu-display");
  document.body.classList.toggle("menu-display");

  menuIcon3.classList.toggle("hide-third-icon");
  menuIcon2.classList.toggle("rotate-icon-2");
  menuIcon1.classList.toggle("rotate-icon-1");

  const icons = document.querySelectorAll(".menu-icon");
  icons.forEach((icon) => {
    icon.style.transition = "ease-in 0.5s";
  });

  document.body.classList.toggle("overlay");
}

// remove OVERLAY
function removeOverlay() {
  if (document.body.classList.contains("overlay")) {
    allSections.forEach((section) => {
      section.style.opacity = "1";
    });

    menuListSpan.classList.remove("menu-display");
    menuIconSpan.classList.remove("menu-display");

    menuIcon3.classList.remove("hide-third-icon");
    menuIcon2.classList.remove("rotate-icon-2");
    menuIcon1.classList.remove("rotate-icon-1");
    document.querySelector(".menu--container").style.marginTop = "0";
  }
}

// Update year at the FOOTER
const footerYear = document.querySelector(".year");
const date = new Date();
const currentYear = date.getFullYear();
footerYear.textContent = currentYear;

// listen for when the nav bar reaches the top of the screen
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    allSections.forEach((section) => {
      section.style.paddingTop = `${nav.offsetHeight}px`;
    });
    document.body.classList.add("fixed-nav");
  } else {
    document.querySelector("main").style.paddingTop = 0;
    allSections.forEach((section) => {
      section.style.paddingTop = 0;
    });
    document.body.classList.remove("fixed-nav");
  }
}

// PROJECT SLIDER
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector("#next");
const previousSlide = document.querySelector("#previous");

let curSlide = 0;
let maxSlide = slides.length - 1;

function nextSlideFtn() {
  // once we hit the max slides, start afresh
  if (curSlide === maxSlide) curSlide = 0;
  else curSlide++;

  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });

  clearInterval(window.onload(autoSlide));
}

// Next button
nextSlide.addEventListener("click", nextSlideFtn);

// Previous button
previousSlide.addEventListener("click", function () {
  // if the current slide is the first slide, then the max slide should be ===curSlide(this is to ensure the previous slide keeps going backwards)

  if (curSlide === 0) curSlide = maxSlide;
  else curSlide--;

  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
});

// Event listeners
// on the menu icon span
menuIconSpan.addEventListener("click", menuUpdate);

// icons close with Escape key
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") menuUpdate();

  if (menuListSpan.classList.contains("hidden")) menuUpdate();
});

// Menu closes when clicked outside the box
allSections.forEach((section) =>
  section.addEventListener("click", removeOverlay)
);

window.addEventListener("scroll", fixNav);
window.onload = (autoSlide) => {
  setInterval(() => {
    nextSlideFtn();
  }, 2000);
  setTimeout(() => {
    nextSlideFtn();
  }, 10000);
};
