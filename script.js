// Create Quiz-Matic game
// Declare variables for questions/answers/buttons etc.
var startBtn = document.getElementById('start-button');

var timer = document.getElementById('timer');

var seconds = 60;

var hiScore = document.getElementById('hi-score');

var yourScore = document.getElementById('your-score');

function startTimer() {
    timer.innerHTML = seconds + ' seconds';
    if (seconds > 0) {
        seconds--;
    }}
function startGame() {
    document.getElementById('start-tab').setAttribute('class', 'hide');
    document.getElementById('question-box').removeAttribute('class','hide');
    setInterval(startTimer, 1000);
    hiScore.innerText = 'Hi Score: ' + 'none';
    yourScore.innerText = 'Your score: ' + 0;
}
startBtn.addEventListener('click', startGame)
// Set up timer set at 60 seconds for quiz
// Set up score display
// Question display block will have a simple statement of rules until start
// Start play includes start timer and display first question - will be randomly selected from bank of twenty questions plus four bonus questions
// Player selects answer with click function - if correct add to score. Each question will be worth ten points. Else answer is wrong, time is subtracted from amount.
// Conditions for bonus - can pass and only lose time spent - if correct you gain twenty points plus fifteen seconds on the clock. Else double time is removed from timer.
// Timer reaches zero game ends, player is asked for initials to save score to "High Scores" list