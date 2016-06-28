function Answers() {
    var score = 0;
    var userAnswer = document.getElementById("puzzle1").value;
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer == "р") score++;
                
    var userAnswer = document.getElementById("puzzle2").value;
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer == "время") score++;
                
    var userAnswer = document.getElementById("puzzle3").value;
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer == "дорога") score++;
                
    var userAnswer = document.getElementById("puzzle4").value;
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer == "@") score++;
    document.getElementById("count").innerHTML="Правильных "+score;
}