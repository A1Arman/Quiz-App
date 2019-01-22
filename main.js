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
];

let currentQuestion = 0;
let currentScore = 0;
let currentQuestionCounter = 1;

function generateQuestionForm(questionArr) {
    return `
    <form class="question-container" role='quiz-container'>
        <fieldset>
        <legend class="question">${questionArr.question}</legend>
        <label for="answer1">
            <input type="radio" class="answer" id="answer1" name="Question_1" value= "${questionArr.answers[0]}" required>
            ${questionArr.answers[0]}
        </label>
        <br>
        <label for="answer2">
            <input type="radio" id="answer2" class="answer" name="Question_1" value ="${questionArr.answers[1]}" required>
            ${questionArr.answers[1]}
        </label>
        <br>
        <label for="answer3">
            <input type="radio" class="answer" id="answer3" name="Question_1" value="${questionArr.answers[2]}"  required>
            ${questionArr.answers[2]} 
        </label>
        <br>
        <button type="submit" class="answer" id="question-submit">Submit</button>
        </fieldset>
    </form>`;
}


function renderScores() {
    $('#start-button').on('click dblclick', event => {
        const scoreMenu = `
            <h3 id="questions-remaining">Question: <span id="js-question-left">${currentQuestionCounter} /10</span></h3>
            <h3 id="score">Score: <span id="js-score-total">${currentScore}</span></h3>`;
        $('.main-header-section').html(scoreMenu);
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

function handleCheckAnswer() {
    $('.js-main-container').on('submit', '.question-container', event => {
       event.preventDefault();
       const answerVal = $( "input[type=radio][name=Question_1]:checked" ).val();
       if(answerVal === QUESTIONS[currentQuestion].correctAnswer) 
       {
            rightAnswer();
       }
       else 
       {
            wrongAnswer();
       }
    });
}

function renderQuestion(questionIndex) {
    const question = QUESTIONS[questionIndex];
    let questionForm = generateQuestionForm(question);
    $('.js-main-container').html(questionForm);
}

function handleStartButton() {
    $('#start-button').click(event => {
        currentQuestion = 0;
        renderQuestion(currentQuestion);
    });
}

function rightAnswer() {
    currentScore++;
    const correct = 
    `<section role="status" class="status-page">
    <h2>TOUCHDOWN!</h2>
    <h3>You are correct!</h3>
    <iframe src="https://giphy.com/embed/9J586eKzRoW6zjY23y" width="400" height="248" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nfl-football-sport-indianapolis-colts-9J586eKzRoW6zjY23y"></a></p>
    <button id="next-question">Next Question</button>
    </section>`;
    $('#js-score-total')[0].innerHTML = currentScore;
    $('.question-container').remove();
    $('.js-main-container').html(correct);
}

function wrongAnswer() {
    const wrong = 
    `<section role="status" class="status-page">
    <h2>Interception!</h2>
    <h3>You are Incorrect!</h3>
    <iframe src="https://giphy.com/embed/l0ExpYJiW867TwI9i" width="400" height="268" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nfl-football-new-england-patriots-l0ExpYJiW867TwI9i"></a></p>
    <button type="button" id="next-question">Next Question</button>
    </section>`;
    $('.question-container').remove();
    $('.js-main-container').html(wrong);
}

function handleNextQuestionButton() {
        $('.js-main-container').on('click', 'button#next-question', event => {
            currentQuestionCounter++;
            currentQuestion++;
            if(currentQuestion < QUESTIONS.length) {
                $('.status-page').remove();
                $('#js-question-left')[0].innerHTML = `${currentQuestionCounter} / 10`;
                renderQuestion(currentQuestion);
            }
            else {
                    finalScreen();
            }
        });
}

function restartButton() {
    $('.js-main-container').on('click', '#restart-button', event => {
        $('.final-section').remove();
        location.reload();
    });
}

function finalScreen() {
    const finalSection =
    `<section class="final-page" role="final page">
    <h2>Congratulations!!</h2>
    <h3>Your final score was ${currentScore}</h3>
    <button type="button" id="restart-button">Restart Quiz</button>
    </section>`;
    $('.status-page').remove();
    $('.js-main-container').html(finalSection);
}

function handleQuizApp() {
    handleStartButton();
    handleCheckAnswer();
    removeStarterSection();
    removeStarterHeading();
    renderScores();
    handleNextQuestionButton();
    restartButton();
}

$(handleQuizApp);