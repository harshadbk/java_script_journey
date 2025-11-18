// for loop

for(let i=0;i<=4;i++){
    console.log("I love you aakruti");
}

let sum=0;

for(let i=0;i<6;i++){
    sum+=i;
}

console.log(sum);

let a = 0;

while (a<=10) {
    console.log(a);
    a++;
}

// for of loop

let str = "I love you aakruti";


for(let i of str){
    console.log(i);  // iterator
}

console.log(size);

// for in loop


const player ={
    fullname:"Buttler",
    age:30,
    run:3000,
    team:"RR"
};

for(let i in player){
    console.log(i,player[i]);
}


let i=0;

for(i=0;i<=100;i++){
    if(i%2===0){
        console.log(i);
    }
}
