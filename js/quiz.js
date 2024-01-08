import { questions } from "./questions";

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0;
let questionIndex = 0;


clearPage();
showQuestion();

function clearPage() {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}


function showQuestion() {
    console.log('showQuestion')
}
