//pseudo code
//will create a const myGreeting = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
//will create 3 const and to utilize addition subraction and mutiplication
//will create script.js and will add all my const inside the script.js
//will create getElementById innerHTML to call all my const to display it on my HTML also in console
 
 
 // created a 3 const and to utilize addition subraction and mutiplication
const firstNum = 3 + 1; 
const secondNum = 4 - 2;
const thirdNum = 1 * 0;
// created a const for string
const myGreeting = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: "; 
// created a console log to print out my const
console.log(myGreeting);
console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
// created a getElementById innerHTML to call all my const to display it on my HTML
document.getElementById("myGreeting").innerHTML = myGreeting + firstNum + secondNum + thirdNum;