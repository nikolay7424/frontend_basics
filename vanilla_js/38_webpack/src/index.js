import generateJoke from "./generateJoke";
import "./styles/main.scss";
import lol from "./assets/lol.svg";

const smile = document.getElementById('lol');
smile.src = lol;

console.log(generateJoke());
console.log(1);
