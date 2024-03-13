const firstNum = 3 + 8; // created a const for addition
const secondNum = 15 - 1; // created a const for minus
const thirdNum = 4 * 5; // created a const for multiplication
// created a const for string
const myGreeting = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"; 
// created a console log to print out my const
console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
console.log(myGreeting);
// created a getElementById innerHTML to call all my const to display it on my HTML
document.getElementById("myGreeting").innerHTML = " " + myGreeting;
document.getElementById("firstCode").innerHTML = "The first Code is " + firstNum;
document.getElementById("secondCode").innerHTML = "The first Code is " + secondNum;
document.getElementById("thirdCode").innerHTML = "The first Code is " + thirdNum;

//will create a const myGreeting = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
//will create 3 const using addition minus and multiplcation, for example const addNum = 3 + 4; const minusNum = 3 - 4; and const multiplyNum = 3 * 8;
//will create script.js and will add all my const inside the script.js