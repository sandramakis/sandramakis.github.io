"use strict";

const menuContainer = document.querySelector(".menu--container");
const menu = document.querySelector(".menu-icon--span");
const hiddenMenu = document.querySelector(".menu-list--span");

const iconToHide = document.querySelector(".menu--icon");
const listItems = document.getElementsByClassName("list--item");

// Clear Menu List Function
const clearMenu = function () {
  hiddenMenu.classList.add("hidden");
};

// Clear Menu List Function
const clearMenuWIthEscapeKey = function () {
  document.querySelector(".menu--icon--1").style.transform = "none";
  document.querySelector(".menu--icon--2").style.transform = "none";
  document.querySelector(".menu--icon--3").classList.remove("hidden");
};

menu.addEventListener("click", function () {
  hiddenMenu.classList.toggle("hidden");
  if (!hiddenMenu.classList.contains("hidden")) {
    // Change the angle for icons
    document.querySelector(".menu--icon--1").style.transform = "rotate(240deg)";
    document.querySelector(".menu--icon--2").style.transform = "rotate(120deg)";
    document.querySelector(".menu--icon--3").classList.add("hidden");

    // Add a transition to the icons
    document.querySelector(".menu--icon--2").style.transform = "ease-in-out 3s";
    listItems.style.transition = "ease-in-out 3s";
  } else {
    clearMenuWIthEscapeKey();
  }
});

// Make the icons close with the Escape key
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Escape") clearMenu();

  if (hiddenMenu.classList.contains("hidden")) clearMenuWIthEscapeKey();
});
