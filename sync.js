/*
In synchronous execution, code is executed line by line in
 a sequential order. Each line of code waits for the previous
  one to finish before executing. This means that if a function 
  call is made, the program will wait for that function to complete 
  before moving on to the next line of code.
*/

// synchronize programming

// console.log("One");
// console.log("Two");
// console.log("Three");

// // set time out functions in js

// function hellow(){
//     console.log("I love you aakruti");
// }

// setTimeout(hellow,2000);

// setTimeout(()=>{
//     console.log("I love you aakruti"); 
// },3000);

// console.log("Four");
// console.log("Five");
// console.log("Six");

// asynchronized programming

/*
In asynchronous execution, operations can be initiated and 
continue to execute in the background without blocking the 
main execution thread. This allows the program to continue 
executing other tasks while waiting for the asynchronous 
operation to complete. Asynchronous operations are commonly
 used for tasks such as fetching data from a server, reading 
 files, or handling user input.
*/

// call back function 

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumcallback){
    sumcallback(a,b);
}

calculator(1,2,sum);

