let questions = [
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ["<javascript", "<scripted>", "<script>", "<js>"],
        answer: "<script>"
    },
    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        choices: ["<SCRIPT>", "<BODY>", "<HEAD>", "<TITLE>"],
        answer: "<SCRIPT>"
    },
    {
        question: "JavaScript entities start with _______ and end with _________.",
        choices: ["Semicolon, colon", "Semicolon, Ampersand", "Ampersand, colon", "Ampersand, semicolon"],
        answer: "Ampersand, semicolon"
    },
    {
        question: "The first index of an array is ____.",
        choices: ["0", "1", "8", "any"],
        answer: "0"
    }
]


//  variables to be use
// also why use let instead of variable why are they interchangeable in this case
let currentQuestion = -1;
let score = 0;
let timeLeft = 0;
let timer;


// timer function for quiz

function letsBegin() {

    timeLeft = 90
    document.getElementById('timeLeft').innerHTML = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timeLeft').innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    },
        1000);
        nextQuestion();
}

function endGame() {
    clearInterval(timer);

    var endScript =
        `

        <div class="container hide" id="recap">
        <h2>You scored `+ score + ` points!</h2>
        <form class="">
            <p>Lets get your score saved !!!
            <input id="player-name" class="form-control mr-sm-2 ml-sm-4" type="search" placeholder="Enter Your Initials" aria-label="Search">
                
            <button onclick="addScore() class="btn btn-outline-success my-2 my-sm-0" type="submit">Save My
                    Score</button>
            </p>
        </form>
        </div>
        `;
    document.getElementsByClassName('quiz-body').innerHTML = endScript;
}

function setScore() {
    localStorage.setItem('High-Score', score);
    localStorage.setItem('Player-Name', document.getElementById('player-name').value);
    getScores();
}

function getScores() {
    var showScores = `
   <h2>`+ localStorage.getItem('Player-Name') + `Your last score was </h2>
   <h1>` + localStorage.getItem('High-Score') + `</h1><br><br>

   <button id="restart-game" type="button" class="btn btn-success">Restart Game?</button>

    `;
    document.getElementsByClassName('quiz-body').innerHTML = showScores;
}

function clearScores() {
    localStorage.clear();
    restart();
}

function restart() {
    clearInterval(timer);
    let currentQuestion = -1;
    let score = 0;
    let timeLeft = 0;
    let timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var newQuiz = `
    <h4 class="font-weight-bold">Welcome back!! wanna try again?!?!</h4>
                    <p>
                        <button onclick="letsBegin" id="restart-game" type="button" class="btn btn-success">Restart Game?</button>
                        <button id="clear-scores" type="button" class="btn btn-info">Clear All Scores</button>
                    </p>
    
    `
    document.getElementsByClassName('quiz-body').innerHTML = newQuiz;


}

function correctAnswer() {
    timeLeft += 20;
    nextQuestion();
}

function wrongAnswer() {
    timeLeft -= 20;
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++
    if(currentQuestion > questions.length -1) {
        endGame();
        return;
    }
    var eachQuestion = "<h2>" + questions[currentQuestion].question + "</h2>"
    for (var optionsLoop = 0; optionsLoop < questions[currentQuestion].choices.length; optionsLoop++) {
        var optionButton = '<button onclick=\"[ANS]\">[CHOICE]</button>';
        optionButton = optionButton.replace('[CHOICE]', questions[currentQuestion].choices[optionsLoop]);
        if(questions[currentQuestion].choices[optionsLoop] == questions[currentQuestion].answer) {
            optionButton = optionButton.replace("[ANS]", "correctAnswer()");
        } else {
            optionButton = optionButton.replace("[ANS]", "wrongAnswer()");

        }
        eachQuestion += optionButton
    }

    document.getElementsByClassName('quiz-body').innerHTML = eachQuestion;

}

