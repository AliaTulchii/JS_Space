// const questions = require('./questions')
const questions = [
	{
		question: "What is the difference between == operator and ===?" ,
        answers: [
            "nothing, it's the same operator",
            "with strict equality, type reduction is performed",
            "in the case of non-strict equality, type reduction is not performed",
            "with strict equality, type reduction is not performed",
        ],
		correct: 4,
	},
	{
		question: "Variable declared with const...",
		answers: [
			"may be changed after announcement",
			"must be initialized when declared",
			"can store several values ​​at once",
			"is initialized to undefined by default",
		],
		correct: 2,
	},
	{
		question: "What will be the result of this expression? Number('25.7px')",
		answers: [
			"25",
			"257",
			"25.7",
			"NaN",
		],
		correct: 4,
	},
	{
		question: "Select the variable name written in camelCase notation",
        answers: [
            "total_price",
            "TOTAL_PRICE",
            "TotalPrice",
            "totalPrice",
        ],
		correct: 4,
    },
    {
		question: "Variable declared with let...",
        answers: [
            "may not be changed after announcement",
            "is initialized to undefined by default",
			"must be initialized when declared",
			"can store several values ​​at once",			
        ],
		correct: 2,
    },
    {
		question: "Which of these values ​​results in true in the Boolean conversion?",
        answers: [
            "undefined",
            "0",
            "'false'",
            "false",
        ],
		correct: 3,
    },
    {
		question: "Which method will lowercase the string “MANGO”?",
        answers: [
            "“MANGO”.transform('lower-case')",
            "“MANGO”.makeLowerCase()",
            "“MANGO”.lowerCase()",
            "“MANGO”.toLowerCase()",
        ],
		correct: 4,
    },
    {
		question: "Select a non-existent data type",
        answers: [
            "Number",
            "Boolean",
            "Char",
            "String",
        ],
		correct: 3,
    },
    {
		question: "Select the correct pattern string entry with age variable interpolation",
        answers: [
            "`I'm {age} years old`",
            "`I'm #{age} years old`",
            "`I'm ${age} years old`",
            "'I'm ${age} years old'",
        ],
		correct: 3,
    },
    {
		question: "What will be the result of the expression 100 +2+”30”?",
        answers: [
            "'100230'",
            "'132'",
            "'10230'",
            "132",
        ],
		correct: 3,
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