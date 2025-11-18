// prmitive data types 

// 1) numbers

let a = 98;
console.log(typeof a);

let price = 90.87;
console.log(typeof price);

// 2 String

let name;
name = "buttler";
console.log(typeof name);

// boolean

let isfollow = true;
console.log(typeof isfollow);

// undefined

let x;
console.log(typeof x);

// null

let y = null;
console.log(typeof y);

// non premitive data types 

// object

const player  = {
    fullname:"Buttler",
    age:30,
    run:3000,
    team:"RR"
};

console.log(player);

console.log("Player datatype is : "+typeof player);

console.log(player["fullname"]+player["team"]);

console.log(player.age);
console.log(player["fullname"]);

player.run+=200;

console.log(player.run);