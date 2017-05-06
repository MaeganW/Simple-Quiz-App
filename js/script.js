function submitAnswers() {
    var total = 5;
    var score = 0;

    //Getting user input
    var q1 = document.forms.quiz.q1.value;
    var q2 = document.forms.quiz.q2.value;
    var q3 = document.forms.quiz.q3.value;
    var q4 = document.forms.quiz.q4.value;
    var q5 = document.forms.quiz.q5.value;

    //Validation
    for (var i = 1; i <= total; i++) {
        if (eval("q" + i) === null || eval("q" + i) === '') {
            alert("You missed question " + i);
            return false;
        }
    }

    //Set correct answers
    var answers = ["c", "a", "d", "c", "a"];

    //Check answers
    for (var i = 1; i <= total; i++) {
        if (eval("q" + i) === answers[i - 1]) {
            score++;
        }
    }

    //Display Results
    var results = document.querySelector("#results");
    results.innerHTML = "<h3>You scored <span>" + score + "</span> out of <span>" + total + "</span></h3>";
    alert("You scored " + score + " out of " + total);
    
    return false;
}
