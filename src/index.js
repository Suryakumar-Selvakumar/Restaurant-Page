import { component } from "./home";
import { content } from "./menu";
import { contact } from "./contact";

const div = document.querySelector("#content");
const btnHome = document.querySelector(".home");
const btnMenu = document.querySelector(".menu");
const btnContact = document.querySelector(".contact");

div.appendChild(component());

btnHome.addEventListener("click", () => {
  div.innerHTML = "";
  div.appendChild(component());
});

btnMenu.addEventListener("click", () => {
  div.innerHTML = "";
  div.appendChild(content());
});

btnContact.addEventListener("click", () => {
  div.innerHTML = "";
  div.appendChild(contact());
});
