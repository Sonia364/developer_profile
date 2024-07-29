'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// Function to toggle the navigation
const navToggleFunc = function () {
  nav.classList.toggle('active');
  // Save the state of the nav to session storage
  sessionStorage.setItem('navState', nav.classList.contains('active'));
};

// Add event listeners for navigation buttons
navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// Restore the state of the navigation on page load
if (sessionStorage.getItem('navState') === 'true') {
  nav.classList.add('active');
}

// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

// Function to toggle the theme
const toggleTheme = function () {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].classList.toggle('light');
    themeBtn[i].classList.toggle('dark');
  }

  // Save the current theme to session storage
  sessionStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
};

// Add event listeners for theme buttons
for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener('click', toggleTheme);
}

// Restore the theme on page load
const savedTheme = sessionStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
  document.body.classList.remove('dark-theme');

  for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].classList.add('light');
    themeBtn[i].classList.remove('dark');
  }
} else if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  document.body.classList.remove('light-theme');

  for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].classList.add('dark');
    themeBtn[i].classList.remove('light');
  }
}
