import "./plugins/todoList.js";
import { display_header_page } from "./plugins/header.js";

display_header_page("C:/Users/kazuaki.kuji/Desktop/研修/sample/profile/modules/header.html", "header");


const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const result = document.querySelector('.program1_result');

let count = 0;

function countUp() {
    count += 1;
    result.textContent = count
}

function countDown() {
    count -= 2;
    result.textContent = count
}

button1.addEventListener("click", countUp)
button2.addEventListener("click", countDown)