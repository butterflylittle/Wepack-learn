import fn from "./fn.js";
import data from "./data/data.txt";
import logo from "./images/logo.png";
import css from "./css/css.css";

console.log("data", data);

// console.log('logo', logo);
let img = new Image();
img.src = logo;
document.body.appendChild(img);

console.log(fn);
// console.log('css', css, css.toString());
// let styleElement = document.createElement('style');
// styleElement.innerHTML = css.toString();
// document.head.appendChild(styleElement);
