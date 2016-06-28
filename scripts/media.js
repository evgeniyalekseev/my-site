var min = 1;
var max = 100;
var guessNumber = Math.floor(Math.random() * (max - min + 1)) + min; //Загадываем случайное число

document.write("Компьютер загадал число от " + min + " до " + max + ". Угадайте его за 7 попыток.<br>");

var tryCount = 0; //Номер попытки
var userAnswer;
document.write("<br>Первый игрок<br>");

do {
    tryCount = tryCount + 1; //Увеличиваем количество попыток на единицу
    userAnswer = +prompt(tryCount + " попытка. Ваш вариант:");
    document.write(tryCount + ". " + userAnswer + " ");
    if (userAnswer > guessNumber) document.write("<b>Перелёт</b><br>");
    if (userAnswer < guessNumber) document.write("<b>Недолёт</b><br>");        
} while (userAnswer != guessNumber && tryCount < 7);

if (userAnswer == guessNumber) document.write("Поздравляем! Вы угадали!");
else document.write("Вы проиграли! Попробуйте ещё раз.");


var guessNumber = Math.floor(Math.random() * (max - min + 1)) + min; //Загадываем случайное число
var tryCount = 0;
document.write("<br><br>Второй игрок<br>");

do {
    tryCount = tryCount + 1; //Увеличиваем количество попыток на единицу
    userAnswer = +prompt(tryCount + " попытка. Ваш вариант:");
    document.write(tryCount + ". " + userAnswer + " ");
    if (userAnswer > guessNumber) document.write("<b>Перелёт</b><br>");
    if (userAnswer < guessNumber) document.write("<b>Недолёт</b><br>");        
} while (userAnswer != guessNumber && tryCount < 7);

if (userAnswer == guessNumber) document.write("Поздравляем! Вы угадали!");
else document.write("Вы проиграли! Попробуйте ещё раз.");