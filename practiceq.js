// returns no of vowels in a string

function countVowels(msg){
    let count = 0;
    for(let i of msg){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
            count++;
        }
    }
    console.log(count);
}

countVowels("i love you aakruti");

console.log("\n\n\n\n");

let demo = (msg)=>{
    let count = 0;
    for(let i of msg){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
            count++;
        }
    }
    console.log(count);
}

demo("i love you aakruti");

console.log("\n\n\n\n");

// call back functions 

let arr =[1,2,3,4,5,6,7];

arr.forEach(function printval(val){
    console.log(val);
})

console.log("\n\n\n\n");

arr.forEach((value,ind)=>{
    console.log(value,ind);
})

// higher order function is a function in which it takes an argument as a function and returns it any value as a function

num = [4,6,8,9,10,56];

let sq = num.forEach((num)=>{
    console.log("The square root of ",num , "is :",num*num);  
});

// example 2 

let sq2 = num.map((num) => {
    return num * num;
});

// example 3 

console.log(sq2); 

let even = num.filter((value)=>{
    return value%2===0;
});

console.log(even);

// example 4 

let fvalue = 0;

let sumd = num.reduce((res,value)=>{
    return  res+value;
});

console.log(sumd);

// biggest number in an array 

let big = num.reduce((result,current)=>{
    return result>current ? result:current;
})

console.log(big);

let marks = [78,98,79,89,91,86];

let high=marks.filter((num)=>{
    return num >= 90;
});

console.log(high);


// problem on basis of array

const prompt = require("prompt-sync")();

let num2 = prompt("Enter the number :");

let numarr =[];

for(let i=0;i<num2;i++){
     let demon = parseFloat(prompt("Enter the array element :"));
     numarr.push(demon);
}

let rest = numarr.reduce((first,second)=>{
    return first+second;
});

console.log(rest);

let prod = numarr.reduce((first,second)=>{
    return first*second;
});

console.log(prod);