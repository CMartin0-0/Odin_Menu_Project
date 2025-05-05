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
  homeButton.classList.add('active');
}


const clearContent = () => {
  mainContent.innerHTML = '';
  homeButton.classList.remove('active');
  menuButton.classList.remove('active');
  contactButton.classList.remove('active');

};

homeButton.addEventListener('click', () => {
 clearContent();
 loadHomePage();
});

menuButton.addEventListener('click', () => {
  clearContent();
  mainContent.appendChild(menuItems());
  menuButton.classList.add('active');
});

contactButton.addEventListener('click', () => {
  clearContent();
  mainContent.appendChild(contact());
  contactButton.classList.add('active');
});
// Load the home page by default
loadHomePage();