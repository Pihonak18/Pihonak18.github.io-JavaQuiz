function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>End Score</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    
};




var questions = [
    new Question("Commonly used data types do NOT include:", ["Strings", "Booleans","Alerts", "Numbers"], "Alerts"),
    new Question("The condition in an if/else statement is enclosed within __", ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"], "Square Brackets"),
    new Question("Arrays in javascript can be used to store __", ["Numbers and Strings", "Other Arrays","Booleans", "All of the Above"], "All of the Above"),
    new Question("String values must be enclosed within __ when be assigned to variables", ["Commas", "Curly Brackets", "Quotes", "Parentheses"], "Quotes"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is:", ["Javascript", "Terminal/Bash", "For Loops", "Console Log"], "Console Log")
];


var quiz = new Quiz(questions);




populate();





