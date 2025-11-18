let marks = [75,83,63,48,77,45,38,46,83,47,64,76,32,54,87,68,73,57,64,32,57,45];

console.log(marks.length);

console.log(marks[6]);

console.log(typeof marks);

marks[4]=90;

console.log(marks);

// arrays are mutable in js

for(let i in marks){
    console.log(marks[i]);
}
console.log("\n\n\n");

for(let i of marks){
    console.log(i);
}
console.log("\n\n\n");

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
console.log("\n\n\n");
i=0;

while(i!=marks.length){
    console.log(marks[i]);
    i++;
}


// find average marks

let mark = [54,38,68,76,57,65,75,47,38];

let sum = 0;

for(let i in mark){
    sum+=marks[i];
}

let average = sum / mark.length

console.log("The average of marks is "+ average);

// reduce prize by offer 

let item = [250,645,300,900,50];

// for (let i in item){
//     item[i] = item[i]-(10/100)*item[i];
//     console.log(item[i]);
// }

// array methods 

console.log(item.push(78));
console.log(item);

console.log(item.pop(250));
console.log(item);

console.log(marks.toString());
let kl = marks.toString();
console.log(typeof kl);

console.log(marks.shift(54)); // delete from start in an any array
console.log(mark.unshift(67)); // add to start in an any array

// slice the array

let marks2 = [75,83,63,48,77,45,38,46,83,47,64,76,32,54,87,68,73,57,64,32,57,45];

console.log(marks2.slice(1,4)); // it does not chane the array 

console.log(marks2.splice(2,3,45,89,23)); // changes the original array 

console.log(marks2);

