"use strict";
// Menu variables
const menuContainer = document.querySelector(".menu--container");
const menu = document.querySelector(".menu-icon--span");

// Each menu Icon
const menuIcon1 = document.querySelector(".menu--icon--1");
const menuIcon2 = document.querySelector(".menu--icon--2");
const menuIcon3 = document.querySelector(".menu--icon--3");

// Elements to hide
const iconToHide = document.querySelector(".menu--icon");
const hiddenMenu = document.querySelector(".menu-list--span");

// All list items
const listItems = document.getElementsByClassName("list--item");

// Overlay
const overlay = document.querySelector(".display-overlay");

// Clear Menu List Function
const clearMenu = function () {
  hiddenMenu.classList.add("hidden");
  overlay.classList.remove("overlay");
  menuIcon1.style.transform = "none";
  menuIcon2.style.transform = "none";
  menuIcon3.classList.remove("hidden");
};

// Menu event listener
menu.addEventListener("click", function () {
  hiddenMenu.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
  if (!hiddenMenu.classList.contains("hidden")) {
    // Change the angle for icons when displayed
    menuIcon1.style.transform = "rotate(240deg)";
    menuIcon2.style.transform = "rotate(120deg)";

    menuIcon3.classList.add("hidden");

    // Add a transition to the icons
    menuIcon2.style.transform = "ease-in-out 3s";
    listItems.style.transition = "ease-in-out 3s";
  } else {
    clearMenu();
  }
});

// Make the icons close with the Escape key
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Escape") clearMenu();

  if (hiddenMenu.classList.contains("hidden")) clearMenu();
});

// Menu closes when clicked outside the box
overlay.addEventListener("click", clearMenu);
