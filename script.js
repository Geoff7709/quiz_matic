var questions = [
    {question: 'What does ‘HTML’ stand for?', 
    bonus: false,
    order: 1,
    answer: [
        {text: 'Hyper-Text Markup Language', correct: true},
        {text: 'Help Time Marketing Language', correct: false},
        {text: 'Hot Tamale Military Life', correct: false},
        {text: 'Half Time Millisecond Lab', correct: false}
    ]},  
    {question: 'What is the function of CSS in developing an application?',
    bonus: false,
    order: 2,
    answer: [
        {text: 'It manipulates elements in the browser for user interface', correct: false},
        {text: 'Provides a basis for universal translation in the web', correct: false},
        {text: 'Adds stylistic display attributes to HTML', correct: true},
        {text: 'Lays out the basic display framework for an application', correct: false}
    ]},
    {question: 'What year was JavaScript first released?',
    bonus: false,
    order: 3,
    answer: [
        {text: '1992', correct: false},
        {text: '2005', correct: false},
        {text: '2001', correct: false},
        {text: '1995', correct: true}
    ]},
    {question: 'What is the purpose of a function in JavaScript?',
    bonus: false,
    order: 4,
    answer: [
        {text: 'It adds, subtracts, multiplies, or divides numbers', correct: false},
        {text: 'It helps navigate through a document', correct: false},
        {text: 'It does your taxes', correct: false},
        {text: 'It executes the block of code defined', correct: true}
    ]},
    {question: 'Which of the following is NOT an API?',
    bonus: false,
    order: 4,
    answer: [
        {text: 'DOM', correct: false},
        {text: 'SEC', correct: true},
        {text: 'JQuery', correct: false},
        {text: 'Local Storage', correct: false}
    ]},
    {question: 'Which of the following is an array method?',
    bonus: false,
    order: 6,
    answer: [
        {text: 'Catch', correct: false},
        {text: 'Splint', correct: false},
        {text: 'Throw', correct: false},
        {text: 'Pop', correct: true}
    ]},
    {question: 'What is the proper HTML tag to introduce or link a JavaScript file?',
    bonus: false,
    order: 7,
    answer: [
        {text: '<java>', correct: false},
        {text: '<jscript>', correct: false},
        {text: '<script>', correct: true},
        {text: '<link>', correct: false}
    ]},
    {question: 'What are the three statements that must be included in a ‘for’ loop with no breaks in the following function?',
    bonus: false,
    order: 8,
    answer: [
        {text: 'Variable, limit, counter', correct: true},
        {text: 'Function, limit, operator', correct: false},
        {text: 'Operator, equivalent, mode', correct: false},
        {text: 'There are only two statements: variable and limit', correct: false}
    ]},
    {question: 'What is the function of ‘while’ in JavaScript?',
    bonus: false,
    order: 9,
    answer: [
        {text: 'Provides a timed break in the code', correct: false},
        {text: 'A loop that executes when a given statement is true', correct: true},
        {text: 'Lets other programmers know when hidden functions are occurring', correct: false},
        {text: 'Plays pleasing music while code is executed', correct: false}
    ]},
    {question: 'Which of the following is a primitive data type in JavaScript?',
    bonus: false,
    order: 10,
    answer: [
        {text: 'String', correct: false},
        {text: 'Number', correct: false},
        {text: 'Boolean', correct: false},
        {text: 'All of the above', correct: true}
    ]},
    {question: 'What is the expected output in the page console from the following: var x = ‘Bananas’ + 20 + 8; console.log\(x\)?',
    bonus: false,
    order: 11,
    answer: [
        {text: 'Bananas208', correct: true},
        {text: 'Bananas28', correct: false},
        {text: 'Error', correct: false},
        {text: '28Bananas', correct: false}
    ]},
    {question: 'What is recursion?',
    bonus: false,
    order: 12,
    answer: [
        {text: 'The act of a function calling itself', correct: true},
        {text: 'Changing font families to better define different types of code', correct: false},
        {text: 'Debugging a block of code', correct: false},
        {text: 'When a developer excludes themselves from a project due to conflict of interest', correct: false}
    ]},
    {question: 'True or false: it is possible for a function to contain another function.',
    bonus: false,
    order: 13,
    answer: [
        {text: 'True', correct: true},
        {text: 'False', correct: false},
    ]},
    {question: 'What does CSS stand for?',
    bonus: false,
    order: 14,
    answer: [
        {text: 'Coastal Standard Second', correct: false},
        {text: 'Coded Stamping Size', correct: false},
        {text: 'Cascading Style Sheets', correct: true},
        {text: 'Cavalcade of Single Stars', correct: false}
    ]},
    {question: 'True or false: booleans and strings are interchangeable data types.',
    bonus: false,
    order: 15,
    answer: [
        {text: 'False', correct: true},
        {text: 'True', correct: false},
    ]},
    {question: 'How are arrays used in JavaScript?',
    bonus: false,
    order: 16,
    answer: [
        {text: 'To randomly choose between a variety of functions', correct: false},
        {text: 'To apply methods to a function', correct: false},
        {text: 'A single variable used to contain multiple values', correct: true},
        {text: 'To disintegrate my enemies', correct: false}
    ]},
    {question: 'What is the average airspeed of an unladen swallow?',
    bonus: true,
    order: 17,
    answer: [
        {text: 'African or European?', correct: true},
        {text: 'I don’t know', correct: false},
        {text: 'Red, no blue', correct: false},
        {text: 'Nee', correct: false}
    ]},
    {question: ' What is the only animal with four knees?',
    bonus: true,
    order: 18,
    answer: [
        {text: 'Lemur', correct: false},
        {text: 'Duckbill Platypus', correct: false},
        {text: 'Elephant', correct: true},
        {text: 'My third cousin', correct: false}
    ]},
    {question: 'What is the weight of the average humpback whale heart?',
    bonus: true,
    order: 19,
    answer: [
        {text: '430 lbs', correct: true},
        {text: '50 lbs', correct: false},
        {text: 'This is the only mammal without a heart –their blood is pumped through body motion', correct: false},
        {text: 'A Volvo', correct: false}
    ]},
    {question: 'What is the national animal of Scottland?',
    bonus: true,
    order: 20,
    answer: [
        {text: 'Badger', correct: false},
        {text: 'Red Deer', correct: false},
        {text: 'Scottish Wildcat', correct: false},
        {text: 'Unicorn', correct: true}
    ]},  
]
var usedQuestions = [];

var startBtn = document.getElementById('start-button');

var questionDisplayed = document.getElementById('question');

var answerDiv = document.getElementById('answers');

var passBtn = document.getElementById('pass');

var timer = document.getElementById('timer');

var seconds = 60;

var hiScore = document.getElementById('hi-score');

var highScore = localStorage.final ? JSON.parse(localStorage.getItem('final')) : {name: '', score: 0};

var yourScore = document.getElementById('your-score');

var recordYourScore = document.getElementById('submit-score');

var playerInitials = document.getElementById('player-initials');

var score = 0;

function setHiScore() {
    hiScore.innerText = highScore.name + ": " + highScore.score;
}

setHiScore()

function startTimer() {
    var timer = setInterval(function(){
        seconds--;
        document.getElementById('timer-display').innerHTML = seconds + ' Seconds';
        if (seconds <= 0) {
            clearInterval(timer);
            endGame()
        }
    }, 1000);
}
function startGame() {
    document.getElementById('start-tab').setAttribute('class', 'hide');
    document.getElementById('question-box').setAttribute('class', 'container border border-dark rounded pop-box');
    startTimer();
    hiScore.innerText = highScore.name + ": " + highScore.score;
    yourScore.innerText = score;
    renderQuestion()
}

startBtn.addEventListener('click', startGame)

function renderQuestion() {
    // document.querySelector('body').setAttribute('class', 'neutral');
    questionDisplayed.innerText = '';
    answerDiv.innerHTML = '';
    var q = questions[Math.floor(Math.random() * questions.length)];
    if (!usedQuestions.includes(q.order)) {
        questionDisplayed.innerText = q.question;
        usedQuestions.push(q.order)
        var ans = q.answer;
        for (var i = 0; i <= ans.length - 1; i++) {
            var ansBtn = document.createElement('button')
            ansBtn.innerText = ans[i].text;
            ansBtn.setAttribute('class', 'btn btn-primary btn-lg  btn-block');
            ansBtn.setAttribute('value', ans[i].correct);
            answerDiv.addEventListener('click', checkAnswer)
            answerDiv.appendChild(ansBtn);
        }    
    } 
}

function checkAnswer(event) {
    if (event.target.matches('button')) {
        var choice = event.target.value;
        if (choice == 'true') {
            yourScore.innerText = score += 10;
            renderQuestion()
        } else {
            seconds -= 10;
            renderQuestion()
        }
    }
}

function endGame() {
    document.getElementById('question-box').setAttribute('class', 'hide');
    document.getElementById('record-score').setAttribute('class', 'container pop-box')    
}
recordYourScore.addEventListener('click', function(event){
    event.preventDefault();
    var finalPost = {name: playerInitials.value, score: score};
    var presentHi = JSON.parse(localStorage.getItem('final'))
    if (presentHi === null) {
        localStorage.setItem('final',  JSON.stringify(finalPost));
        resetGame()
    } else if (finalPost.score > presentHi.score) {
        localStorage.setItem('final',  JSON.stringify(finalPost));
        resetGame();
    } else {
        resetGame()
    }
})
function resetGame() {
    highScore = JSON.parse(localStorage.getItem('final'))
    seconds = 60;
    document.getElementById('record-score').setAttribute('class', 'hide');
    document.getElementById('start-tab').setAttribute('class', 'container');
    hiScore.innerText = highScore.name + ": " + highScore.score;
    document.getElementById('timer-display').innerHTML = seconds + ' Seconds';
    score = 0
}



// Conditions for bonus - can pass and only lose time spent - if correct you gain twenty points plus fifteen seconds on the clock. Else double time is removed from timer.
// Timer reaches zero game ends, player is asked for initials to save score to high scores list