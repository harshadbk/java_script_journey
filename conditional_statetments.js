// arithmetic operators

let a = 6;
let b = 5;

console.log("The addition is ",a+b);
console.log("The subtraction is ",a-b);
console.log("The multiply is ",a*b);
console.log("The division is ",a/b);
console.log("The reminder is ",(a%b));
console.log("The exponential is ",(a**b));

// unary operators 

console.log("The increment is ",(a++));
console.log(a);
console.log("The decrement is ",(a--));
console.log(a);

console.log("The increment is ",(++a));
console.log("The decrement is ",(--a));

a+=8;

console.log(a);

console.log(a==b);

let c = 89;
let d = "89";

console.log(c==d);

console.log(c===d);

console.log(a>b);
console.log(a<b);
console.log(a<=b);

// logical operator

console.log(a>b && a==14);
console.log(a<b && a==14);


console.log(a>b || a==14);
console.log(a<b || a==14);

console.log(!(a<b));


// conditional operators

let age = 20;

if(age<18){
   console.log("You can not vote");
}
else{
   console.log("You can vote");
}

if(age<18){
    console.log("You can not vote");
 }
else if(age<12){
    console.log("you are in 6 th standard");
}
 else{
    console.log("You can vote");
 }

// ternary opearators

age>18 ? console.log("adult") : console.log("not adult");

// mdn docs

let name = "aakruti";

switch(name){
    case "abc":
        console.log("Not");
        break;
    
    case "def":
        console.log("Not");
        break;
    
    case "ghi":
        console.log("Not");
        break;
    
    case "aakruti":
        console.log("yes");
        break;
    
    default:
        console.log("nothing");
}

let prompt = require("prompt-sync")();
let userInput = prompt("Enter the number :");
console.log("User input:", userInput);

if (userInput % 5 === 0){
    console.log("multiple of 5");
}
else{
    console.log("not multiple of 5");
}
