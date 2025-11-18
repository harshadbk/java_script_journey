// practice question 2

let guess = 78;

const prompt = require("prompt-sync")();

let un = prompt("Enter the Number :");

let guessn = 1;

while(guess!=un){
   un= prompt("You Enter the wrong Number, guess again:");
   guessn +=1;
}

console.log("You entered the right number in ",guessn,"attempts ");
console.log(typeof un);
let num = parseInt(un);
console.log(num);
console.log(typeof num);

let stri = toString(num);
console.log(typeof stri);
