let num1 = Number(prompt("Input your number 1 : "));
let num2 = Number(prompt("Input your number 2 : "));
let num3 = Number(prompt("Input your number 3 : "));
let numArray = [num1, num2, num3];
let sortNum = numArray.sort((a, b) => b - a);
alert(sortNum);
