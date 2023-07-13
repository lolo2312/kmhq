const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'))
const QuestionCounterText = document.getElementById('questionCounter')
const progressText = document.getElementById('progressText');
const progressBarFull = document.getElementById('progressBarFull');
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

fetch('questions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startSurvey();
    })
    .catch((err) => {
        console.error(err);
    });

const MAX_QUESTIONS = 20;

function startSurvey() {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

function getNewQuestion() {
    if (questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('finalScore', score);
        return window.location.assign('end.html');
    }
    currentQuestion = availableQuesions[questionCounter];
    question.innerText = currentQuestion.question;
    // progressText.innerText = `Question ${questionCounter + 1}/${MAX_QUESTIONS}`;
    QuestionCounterText.innerText = `${questionCounter + 1}/${MAX_QUESTIONS}`;
    progressText.innerText = "진행상황";
    progressBarFull.style.width = `${((questionCounter) / MAX_QUESTIONS) * 100}%`;
    questionCounter++;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        const selectedChoice = e.target;
        const selectedAnswer = Number(selectedChoice.dataset['number']);
        incrementScore(selectedAnswer);
        getNewQuestion();
    });
});

function incrementScore(num) {
    score += num;
};
