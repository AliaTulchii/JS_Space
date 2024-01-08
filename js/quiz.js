// import  {questions}  from "./questions";
const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];



const headerContainer = document.querySelector('#quiz-header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0;
let questionIndex = 0;


clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage() {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}


function showQuestion() {
    const headerTemplate = `<h2 class="title">%title%</h2>`;    
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question'])
    headerContainer.innerHTML = title;

    let answerNumber = 1;
    for (item of questions[questionIndex]['answers']) {
        console.log(answerNumber, item)
        const questionTemplate = `
            <li>
                <label>
                    <input value="%number%" type="radio" class="answer" name="answer" />
                    <span>%answer%</span>
                </label>
            </li>
        `;

        
        const answerHTML = questionTemplate
            .replace('%answer%', item)
            .replace('%number%', answerNumber);
        
        console.log(answerHTML);
        listContainer.innerHTML += answerHTML;
        answerNumber++;
     }
}

function checkAnswer() {
    console.log('checkAnswer started');

    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
    
    if (!checkedRadio) {
        submitBtn.blur()
        return
    }

    const userAnswer = parseInt(checkedRadio.value);


    if (userAnswer === questions[questionIndex]['correct']) {
        score++;
    }

    if (questions.length - 1 !== questionIndex) {
        console.log('its not last question')
        questionIndex++;
        clearPage();
        showQuestion();
        return;
    } else {
        console.log('its last question')
        clearPage();
        showResults();
    }
}

function showResults(params) {
    console.log('showResults started');

    const resultsTemplate = `
        <h2 class="title">%title%</h2>
        <h3 class="summary">%message%</h3>
        <p class="result">%result%</p>
    `;

    let title, message;

    if (score === questions.length) {
        title = 'Congratulations🥳';
        message = 'You answered all the questions correctly!👩‍💻';
    } else if ((score * 100) / questions.length) {
        title = 'Not a bad result🥳';
        message = 'You answered half of all questions correctly!😎';
    } else {
        title = 'Its worth trying to answer better🧐';
        message = 'So far you have less than half of the correct answers!🥺';
    }

    let result = `${score} of ${questions.length}`;

    const finalMessage = resultsTemplate
        .replace('%title%', title)
        .replace('%message%', message)
        .replace('%result%', result);
    
    headerContainer.innerHTML = finalMessage;

    submitBtn.blur();
    submitBtn.innerHTML = 'Try again';
    submitBtn.onclick = () => {
        history.go()
    };
}