// // get parameters 

// let div = document.querySelector("div");
// console.dir(div);

// let id = div.getAttribute("id");
// console.dir(id);

// let name = div.getAttribute("name");
// console.dir(name);

// let dif = div.setAttribute("Mydiv","newDir");
// console.dir(dif);

// // set parameters

// let dj = div.style.backgroundColor="green";

// div.style.fontSize="40px";

// let bas =  div.innerText="I love aakruti";
// console.dir(bas);


let newbutton = document.createElement("button");
console.log(newbutton);

console.log(newbutton.innerText);
newbutton.innerText="Clicked me";

let div = document.querySelector("div");
div.append(newbutton); // add it to the last of any document 
div.prepend(newbutton);// add it to the start of any document 
div.before(newbutton);// add it to the before of any document 
div.after(newbutton);// add it to the after of any document 

console.dir(div);

// creates an heading 

let myheading = document.createElement("h1");
myheading.innerHTML="<i>I am Joss Buttler </i>";

document.querySelector("body").prepend(myheading);

// delete of any document

let head1 = document.querySelector("h1");
head1.remove();
