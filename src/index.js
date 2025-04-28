import "./styles.css";
import { home } from "./home";
import { contact } from "./contact";
import { menuItems } from "./menu-items";

const mainContent = document.querySelector("#content");
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');


const loadHomePage = () => {
  mainContent.appendChild(home());
}


const clearContent = () => {
  mainContent.innerHTML = '';
};

homeButton.addEventListener('click', () => {
 clearContent();
 loadHomePage();
});

menuButton.addEventListener('click', () => {
  clearContent();
  mainContent.appendChild(menuItems());
});

contactButton.addEventListener('click', () => {
  clearContent();
  mainContent.appendChild(contact());
});
// Load the home page by default
loadHomePage();