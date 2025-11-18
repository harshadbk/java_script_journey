let str1 = "Harshad Khatale";

console.log(str1.length);

console.log(str1[4]);

// templets literals or string interpolation

let sentence = `I love aakruti`;
console.log(typeof sentence);

const obj ={
   name:"powel",
   team:"rr"
};

console.log("The name of player is ",obj.name," and team is ",obj.team);

let temlit = `The name of player is ${obj.name} and team is ${obj.team} `;
console.log(temlit);

console.log(typeof temlit);

// escape charecters

let a = "I love\naakruti";

console.log("I love\naakruti");
console.log("I love \t aakruti");
console.log(a.length);

// String methods

console.log(a.toUpperCase());
console.log(a.toLowerCase());

// Strings are immutable in js 

let abc = "   joss   buttler   ";

console.log(abc.trim());

console.log(a.slice(2,8));
console.log(a.concat(abc));
console.log(a.replace(a,abc));
console.log(a.charAt(3));

// practice questions 

const prompt = require("prompt-sync")();

let name = prompt("Enter the full name :");

let username = "@"+name+name.length;

console.log(username);