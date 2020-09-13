 "use strict";

//Задача 1
String.prototype.isPalindrome = function() {
    const str1 = this.toLowerCase().replace(/[^а-ё]+/g,"");
    const str2 = str1.split("").reverse().join("");
    return str1 === str2;
}

//Задача 2
function getAverageMark(marks) {

    let sum = 0;

    if (marks.length == 0)
        return 0;

    for (let i = 0; i < marks.length; i++){
        sum += marks[i];
    }
    
    const average = sum / marks.length;
    
    return Math.round(average);
}

//Задача 3
function checkBirthday(birthday) {
    
    const now = Date.now();
    const xday = +new Date(birthday); 
    const diff = now - xday;
    const age = diff / (((1000 * 60 * 60 * 24 * 365) * 3 + (1000 * 60 * 60 * 24 * 366)) / 4);
    return age > 18 ? true : false;
}