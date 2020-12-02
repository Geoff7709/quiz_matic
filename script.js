// Create Quiz-Matic game
// Declare variables for questions/answers/buttons etc.
var questions = [
    {question: 'What does ‘HTML’ stand for?', 
    bonus: false,
    answer: [
        {text: 'Hyper-Text Markup Language', correct: true},
        {text: 'Help Time Marketing Language', correct: false},
        {text: 'Hot Tamale Military Life', correct: false},
        {text: 'Half Time Millisecond Lab', correct: false}
    ]},  
    {question: 'What is the function of CSS in developing an application?',
    bonus: false,
    answer: [
        {text: 'It manipulates elements in the browser for user interface', correct: false},
        {text: 'Provides a basis for universal translation in the web', correct: false},
        {text: 'Adds stylistic display attributes to HTML', correct: true},
        {text: 'Lays out the basic display framework for an application', correct: false}
    ]},
    {question: 'What year was JavaScript first released?',
    bonus: false,
    answer: [
        {text: '1992', correct: false},
        {text: '2005', correct: false},
        {text: '2001', correct: false},
        {text: '1995', correct: true}
    ]},
    {question: 'What is the purpose of a function in JavaScript?',
    bonus: false,
    answer: [
        {text: 'It adds, subtracts, multiplies, or divides numbers', correct: true},
        {text: 'It helps navigate through a document', correct: false},
        {text: 'It does your taxes', correct: false},
        {text: 'It executes the block of code defined', correct: true}
    ]},
    {question: 'Which of the following is NOT an API?',
    bonus: false,
    answer: [
        {text: 'DOM', correct: false},
        {text: 'SEC', correct: true},
        {text: 'JQuery', correct: false},
        {text: 'Local Storage', correct: false}
    ]},
    {question: 'Which of the following is an array method?',
    bonus: false,
    answer: [
        {text: 'Catch', correct: false},
        {text: 'Splint', correct: false},
        {text: 'Throw', correct: false},
        {text: 'Pop', correct: true}
    ]},
    {question: 'What is the proper HTML tag to introduce or link a JavaScript file?',
    bonus: false,
    answer: [
        {text: '<java>', correct: false},
        {text: '<jscript>', correct: false},
        {text: '<script>', correct: true},
        {text: '<link>', correct: false}
    ]},
    {question: 'What are the three statements that must be included in a ‘for’ loop with no breaks in the following function?',
    bonus: false,
    answer: [
        {text: 'Variable, limit, counter', correct: true},
        {text: 'Function, limit, operator', correct: false},
        {text: 'Operator, equivalent, mode', correct: false},
        {text: 'There are only two statements: variable and limit', correct: false}
    ]},
    {question: 'What is the function of ‘while’ in JavaScript?',
    bonus: false,
    answer: [
        {text: 'Provides a timed break in the code', correct: false},
        {text: 'A loop that executes when a given statement is true', correct: true},
        {text: 'Lets other programmers know when hidden functions are occurring', correct: false},
        {text: 'Plays pleasing music while code is executed', correct: false}
    ]},
    {question: 'Which of the following is a primitive data type in JavaScript?',
    bonus: false,
    answer: [
        {text: 'String', correct: false},
        {text: 'Number', correct: false},
        {text: 'Boolean', correct: false},
        {text: 'All of the above', correct: true}
    ]},
    {question: 'What is the expected output in the page console from the following: var x = ‘Bananas’ + 20 + 8; console.log\(x\)?',
    bonus: false,
    answer: [
        {text: 'Bananas208', correct: true},
        {text: 'Bananas28', correct: false},
        {text: 'Error', correct: false},
        {text: '28Bananas', correct: false}
    ]},
    {question: 'What is recursion?',
    bonus: false,
    answer: [
        {text: 'The act of a function calling itself', correct: true},
        {text: 'Changing font families to better define different types of code', correct: false},
        {text: 'Debugging a block of code', correct: false},
        {text: 'When a developer excludes themselves from a project due to conflict of interest', correct: false}
    ]},
    {question: 'True or false: it is possible for a function to contain another function.',
    bonus: false,
    answer: [
        {text: 'True', correct: true},
        {text: 'False', correct: false},
    ]},
    {question: 'What does CSS stand for?',
    bonus: false,
    answer: [
        {text: 'Coastal Standard Second', correct: false},
        {text: 'Coded Stamping Size', correct: false},
        {text: 'Cascading Style Sheets', correct: true},
        {text: 'Cavalcade of Single Stars', correct: false}
    ]},
    {question: 'True or false: booleans and strings are interchangeable data types.',
    bonus: false,
    answer: [
        {text: 'False', correct: true},
        {text: 'True', correct: false},
    ]},
    {question: 'How are arrays used in JavaScript?',
    bonus: false,
    answer: [
        {text: 'To randomly choose between a variety of functions', correct: false},
        {text: 'To apply methods to a function', correct: false},
        {text: 'A single variable used to contain multiple values', correct: true},
        {text: 'To disintegrate my enemies', correct: false}
    ]},
    {question: 'What is the average airspeed of an unladen swallow?',
    bonus: true,
    answer: [
        {text: 'African or European?', correct: true},
        {text: 'I don’t know', correct: false},
        {text: 'Red, no blue', correct: false},
        {text: 'Nee', correct: false}
    ]},
    {question: ' What is the only animal with four knees?',
    bonus: true,
    answer: [
        {text: 'Lemur', correct: false},
        {text: 'Duckbill Platypus', correct: false},
        {text: 'Elephant', correct: true},
        {text: 'My third cousin', correct: false}
    ]},
    {question: 'What is the weight of the average humpback whale heart?',
    bonus: true,
    answer: [
        {text: '430 lbs', correct: true},
        {text: '50 lbs', correct: false},
        {text: 'This is the only mammal without a heart –their blood is pumped through body motion', correct: false},
        {text: 'A Volvo', correct: false}
    ]},
    {question: 'What is the national animal of Scottland?',
    bonus: true,
    answer: [
        {text: 'Badger', correct: false},
        {text: 'Red Deer', correct: false},
        {text: 'Scottish Wildcat', correct: false},
        {text: 'Unicorn', correct: true}
    ]},  
]

var startBtn = document.getElementById('start-button');

var questionDisplayed = document.getElementById('question');

var answerBtn = document.getElementById('answer-button');

var passBtn = document.getElementById('pass')

var timer = document.getElementById('timer');

var seconds = 60;

var hiScore = document.getElementById('hi-score');

var yourScore = document.getElementById('your-score');

function startTimer() {
    timer.innerHTML = seconds + ' seconds';
    if (seconds > 0) {
        seconds--;
    }
}

function renderQuestion() {
    document.querySelector('body').setAttribute('class', 'neutral');
    questionDisplayed.innerText = '';
    var q = questions[Math.floor(Math.random() * questions.length)]
    questionDisplayed.innerText = q.question;
    var ans = q.answer
    for (var i = 0; i <= ans.length - 1; i++) {
        var pTag = document.createElement('p');
        pTag.innerText = ans[i].text;
        for (var i = 0; i < ans.length; i++) {
        answerBtn[i].appendChild(pTag);
        } 
    }    
}

function startGame() {
    document.getElementById('start-tab').setAttribute('class', 'hide');
    document.getElementById('question-box').removeAttribute('class','hide');
    setInterval(startTimer, 1000);
    hiScore.innerText = 'Hi Score: ' + 'none';
    yourScore.innerText = 'Your score: ' + 0;
    renderQuestion()
}


startBtn.addEventListener('click', startGame)
// Set up timer set at 60 seconds for quiz
// Set up score display
// Question display block will have a simple statement of rules until start
// Start play includes start timer and display first question - will be randomly selected from bank of twenty questions plus four bonus questions
// Player selects answer with click function - if correct add to score. Each question will be worth ten points. Else answer is wrong, time is subtracted from amount.
// Conditions for bonus - can pass and only lose time spent - if correct you gain twenty points plus fifteen seconds on the clock. Else double time is removed from timer.
// Timer reaches zero game ends, player is asked for initials to save score to "High Scores" list