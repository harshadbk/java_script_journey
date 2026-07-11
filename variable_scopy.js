for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}

console.log(typeof foo); // "function" — not "undefined"
var foo = "hello";
function foo() {}

function foo() {}
var foo = "hello";
console.log(typeof foo);

harshad = "ME";

{
    // var harshad = "NO ME";
    console.log(harshad);
}

console.log(typeof foo);
var foo = "hello";
function foo() {
    // ask = "buttler"; error
}
console.log(foo)
console.log(typeof foo)

