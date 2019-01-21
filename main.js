'use strict';

const QUESTIONS = [
    {   question: 'Who holds the record for most touchdown passes in a season?',
        answers: [
            'Peyton Manning',
            'Drew Brees',
            'Tom Brady'
        ],
        correctAnswer: 'Peyton Manning'
    },
    {
        question: 'Who holds the record for most passing yards in a season?',
        answers: [
            'Drew Brees',
            'Brett Farve',
            'John Elway'
        ],
        correctAnswer: 'Drew Brees',
    },
    {
        question: 'Who holds the record for most rushing yards ever?',
        answers: [
            'Barry Sanders',
            'Emmitt Smith',
            'Walter Payton'
        ],
        correctAnswer: 'Emmitt Smith',
    },
    {
        question: 'Who holds the record for most passing touchdowns ever?',
        answers: [
            'John Elway',
            'Joe Namath',
            'Peyton Manning'
        ],
        correctAnswer: 'Peyton Manning'
    },
    {
        question: 'Who is the youngest rookie quarterback to win a superbowl?',
        answers: [
            'Patrick Mahomes',
            'Ben Roethlisberger',
            'Tom Brady'
        ],
        correctAnswer: 'Ben Roethlisberger',
    },
    {
        question: 'Who has the most receiving touchdowns ever?',
        answers: [
            'Jerry Rice',
            'Randy Moss',
            'Calvin Johnson'
        ],
        correctAnswer: 'Jerry Rice',
    },
    {
        question: 'Who holds the record for most rushing touchdowns ever?',
        answers: [
            'Barry Sanders',
            'Emmitt Smith',
            'Eric Dickerson'
        ],
        correctAnswer: 'Emmitt Smith',
    },
    {
        question: 'What team is the winningest team in the NFL ever? (Win/Loss Ratio)',
        answers: [
            'Green Bay Packers',
            'Chicago Bears',
            'Dallas Cowboys'
        ],
        correctAnswer: 'Dallas Cowboys',
    },
    {
        question: 'Who has the most receiving yards ever?',
        answers: [
            'Jerry Rice',
            'Randy Moss',
            'Terrell Owens'
        ],
        correctAnswer: 'Jerry Rice'   
    },
    {
        question: 'What two teams were the first teams in the NFL?',
        answers: [
            'Green Bay Packers and Chicago Bears',
            'Chicago Bears and Arizona Cardinals',
            'Green Bay Packers and Dallas Cowboys'
        ],
        correctAnswer: 'Chicago Bears and Arizona Cardinals',
    }
]


function generateQuestionForm(question) {
    return `
    <form class="question-container">
        <fieldset>
        <legend class="question">${question.question}</legend>
        <label for="answer1">
            <input type="radio" class="answer" id="answer1" name="Question_1" required>
            ${question.answers[0]}
        </label>
        <br>
        <label for="answer2">
            <input type="radio" id="answer2" class="answer" name="Question_1" required>
            ${question.answers[1]}
        </label>
        <br>
        <label for="answer3">
            <input type="radio" class="answer" id="answer3" name="Question_1" required>
            ${question.answers[2]} 
        </label>
        <br>
        <button type="submit" class="answer" id="question-submit">Next Question</button>
        </fieldset>
    </form>`
}


function renderScores() {
    $('#start-button').on('click dblclick', event => {
        let currentQuestionCounter = 1;
        let currentScore = 0;
        const score = `
            <h3 id="questions-remaining">Question: <span id="js-question-left">${currentQuestionCounter} /10</span></h3>
            <h3 id="score">Score: <span id="js-score-total">${currentScore}</span></h3>`
        $('.main-header-section').html(score);
    });
}

function removeStarterHeading() {
    $('#start-button').on('click dblclick', event => {
        $('#start-heading').remove();
    })
}

function removeStarterSection() {
    $('#start-button').on('click dblclick', event => {
        $('.main-starter-section').remove();
    })
}

function handleNextButton() {
    $('.js-main-container').on('submit', '.question-container', event => {
       event.preventDefault();
    });
}

function renderQuestion(questionIndex) {
    const question = QUESTIONS[questionIndex];
    let questionForm = generateQuestionForm(question);
    $('.js-main-container').html(questionForm);
}

function handleStartButton() {
    let currentQuestion = 0;
    $('#start-button').click(event => {
        renderQuestion(currentQuestion);
    });
}

function handleQuizApp() {
    handleStartButton();
    handleNextButton();
    removeStarterSection();
    removeStarterHeading();
    renderScores();
    renderQuestions();
}

$(handleQuizApp);