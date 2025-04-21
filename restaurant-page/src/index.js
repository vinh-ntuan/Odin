import { addHome } from "./tab-home.js";
import { addMenu } from "./tab-menu.js";
import { addAbout } from "./tab-about";
import { addContact } from "./tab-contact";

const contentDiv = document.querySelector('#content');
const tabHomeButton = document.querySelector('button#home');
const tabMenuButton = document.querySelector('button#menu');
const tabAboutButton = document.querySelector('button#about');
const tabContactButton = document.querySelector('button#contact');

addHome(); // Default load the home tab

// Event listeners for tab buttons
tabHomeButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    addHome();
});
tabMenuButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    addMenu();
});
tabAboutButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    addAbout();
});
tabContactButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    addContact();
});
