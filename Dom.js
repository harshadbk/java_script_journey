console.log("Hey hii stop please :");
alert("I love you aakruti");

// dom --> document object model

console.log(window);
console.dir(document.body);
console.dir(document.body.childNodes[1]);

document.body.style.background = "";

// document.body.childNodes[1].innerText = "CSK won last match";

// select using id

let h2 = document.getElementById("love");
console.dir(h2);

let web2 = document.getElementsByClassName("web");
console.dir(web2);

let but = document.getElementById("butt");
console.dir(but);

let hs = document.getElementsByTagName("h6");
console.dir(hs);

let element = document.querySelector("h3");
console.dir(element);

let element2 = document.querySelectorAll("h3");
console.dir(element2);

let element3 = document.querySelector(".web");
console.dir(element3);

let element4 = document.querySelectorAll(".web"); // it returns a nodes of list
console.dir(element4);

// we use hash symbol to access tag #

let fe = document.querySelector("h1");
console.dir(fe);

let fe2 = document.querySelectorAll("h1");
console.dir(fe2);

// Dom manipulation 

// 1) tag name : returns a tag for every element nodes 

// fe.tagName

// 2) innerText:

console.dir(document.body.firstChild);

console.dir(document.querySelector("div").children);

let div = document.querySelector("div");
console.dir(div);

console.log(div.innerText);

console.log(div.innerHTML)

console.dir(div.innerText="Kl rahul");

console.dir(div.textContent); // it gives hidden text also 


