const checkHighScores = document.getElementById('view-scores');


let questions = [
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ['javascript', 'scripted', 'script', 'js'],
        answer: 'script'
    },
    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        choices: ["SCRIPT", "BODY", "HEAD", "TITLE"],
        answer: "SCRIPT"
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

    clearInterval(timer);
    timeLeft = 60
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

        <div class="container" id="recap">
        <h2>You scored `+ score + ` points!</h2>
            <p>Lets get your score saved !!!</p>
            <br>
            <input id="player-name" class="form-control mr-sm-2 ml-sm-4" type="search" placeholder="Enter Your Initials" aria-label="Search">
            <br>

            <button class="btn btn-outline-success my-2 my-sm-0" id="set-score">Save My
                    Score</button>
        </div>
        `;
        console.log('end game happens')
    document.getElementById('quiz-body').innerHTML = endScript;
}
document.addEventListener('click', function(event) {
    if(event.target && event.target.id === 'set-score') {
        setScore();
    }
})

function setScore() {
    localStorage.setItem('High-Score', score);
    localStorage.setItem('Player-Name', document.getElementById('player-name').value);
}

function viewScores() {

    var showScores = `
   <h2>`+ localStorage.getItem('Player-Name') + ` your last score was </h2>
   <h1>` + localStorage.getItem('High-Score') + `</h1><br><br>

   <button id="restart-game" type="button" class="btn btn-success">Restart Game?</button>

    `;
    document.getElementById('quiz-body').innerHTML = showScores;
}
checkHighScores.addEventListener('click', viewScores)
document.addEventListener('click', function(event) {
    if (event.target && event.target.id==="restart-game") {
        restart();
    }
})

function clearScores() {
    localStorage.clear();
    console.log('High scores reset')
    restart();
}

function restart() {
    clearInterval(timer);
    currentQuestion = -1;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var newQuiz = `
    <h4 class="font-weight-bold">Welcome back!!</h4><br>
    <h4 class="font-weight-bold">Wanna try again?!?!</h4>

                    <p>
                        <button id="restart-game-final" type="button" class="btn btn-success">Restart Game?</button>
                        <button id="clear-scores-restart" type="button" class="btn btn-info">Clear All Scores</button>
                    </p>
    
    `
    document.getElementById('quiz-body').innerHTML = newQuiz;

}

document.addEventListener('click', function(event) {
    if (event.target && event.target.id === "clear-scores-restart") {
        clearScores();
    }
})


document.addEventListener('click', function(event) {
    if(event.target && event.target.id === "restart-game-final") {
        letsBegin();
    }
})
function correctAnswer() {
    score += 10;
    nextQuestion();
}

function wrongAnswer() {
    timeLeft -= 10;
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++
    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }
    var eachQuestion = "<h2>" + questions[currentQuestion].question + "</h2>"
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var optionButton = "<br><br>  <button onclick='[ANS]' class='btn btn-warning'>[CHOICE]</button>";
        optionButton = optionButton.replace('[CHOICE]', questions[currentQuestion].choices[i]);
        if (questions[currentQuestion].choices[i] == questions[currentQuestion].answer) {
            optionButton = optionButton.replace("[ANS]", "correctAnswer()");
        } else {
            optionButton = optionButton.replace("[ANS]", "wrongAnswer()");

        }
        eachQuestion += optionButton
    }
    console.log(eachQuestion);
    document.getElementById('quiz-body').innerHTML = eachQuestion;

}

