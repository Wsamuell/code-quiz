
const startBox = document.getElementById("lets-begin");
const timer = document.getElementById('timeLeft')
const intro = document.getElementById("intro");
const questionBox = document.getElementById("quiz-questions");
const question = document.getElementById("question");
const answerChoices = document.getElementById("answer-choices");
const questionButtons = document.getElementsByClassName('q-button')




let currentQuestion = {};
let correctAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let timeLeft = 5;
let timerBegins;

let questions = [
    {
        question: "Arrays in Javascript can be used to store ____.",
        choice1: "Numbers and strings",
        choice2: "Other arrays",
        choice3: "Booleans",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        choice1: "<javascript",
        choice2: "<scripted>",
        choice3: "<script>",
        choice4: "<js>",
        answer: 3
    },
    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        choice1: "<SCRIPT>",
        choice2: "<BODY>",
        choice3: "<HEAD>",
        choice4: "<TITLE>",
        answer: 1
    },
    {
        question: "JavaScript entities start with _______ and end with _________.",
        choice1: "Semicolon, colon",
        choice2: "Semicolon, Ampersand",
        choice3: "Ampersand, colon",
        choice4: "Ampersand, semicolon",
        answer: 4
    },
    {
        question: "The first index of an array is ____.",
        choice1: "0",
        choice2: "1",
        choice3: "8",
        choice4: "any",
        answer: 1
    }
]

// constants 
const correctAnswerPoints = 10;
const totalQuestions = 5;
const timeQuiz = document.getElementById("#timeLeft")
const viewHighScores = document.getElementById("view-scores");
const saveScores = document.getElementById("save-scores");
const restartGame = document.getElementById("restart-game");
const clearScores = document.getElementById("clear-scores");

// timer function for quiz

function totalTIme() {
    timerBegins = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerBegins);
        }
    }, 1000)
}



// if the Lets begin button is clicked then 
letsBegin = () => {
    console.log('lets begin is running')
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];

    pullQuestion();
    totalTIme();
    const questionContainer = document.getElementById("quiz-questions");
    questionContainer.classList.remove("hide");
};
pullQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion["question"];
    document.getElementById('choice-1').innerText = currentQuestion.choice1
    document.getElementById('choice-2').innerText = currentQuestion.choice2
    document.getElementById('choice-3').innerText = currentQuestion.choice3
    document.getElementById('choice-4').innerText = currentQuestion.choice4
    };

// check answer function and move to next question
// for (var i = 0; i < questionIndex.length; i++){
//     var buttonSelect = confirm 
// }


// quiz timer done/ quiz is over

// display high score and also reset quiz




startBox.onclick = letsBegin;


