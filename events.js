/*
 Events are things that happen in the system you are 
 programming — the system produces (or "fires") a signal
 of some kind when an event occurs, and provides a 
 mechanism by which an action can be automatically taken 
 (that is, some code running) when the event occurs. Events
 are fired inside the browser window, and tend to be attached
 to a specific item that resides in it. This might be a single 
 element, a set of elements, the HTML document loaded in the current
 tab, or the entire browser window. There are many different types of events that can occur.
*/

let btn1 = document.querySelector("#btn1");

// btn1.onclick=(e)=>{
    // console.dir("btn1 was clicked ");
    // let a = 25;
    // ++a;
    // console.dir(a);
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// };

let div1 = document.querySelector("#div1");

div1.onclick = ()=>{
    console.log("You are inside Div class");
    let c = 90;
    ++c;
    console.dir(c);
};

// event listners 


btn1.addEventListener("click",(e)=>{
    console.log("Button 1 was cliked - handler 1");
    console.log(e.type);
    console.log(e.target);
})

btn1.addEventListener("click",(e)=>{
    console.log("Button 1 was cliked - handlers 2");
    console.log(e.type);
    console.log(e.target);
})

btn1.addEventListener("click",(e)=>{
    console.log("Button 1 was cliked - handler 3");
    console.log(e.type);
    console.log(e.target);
})

const handler4 = (e)=>{
    console.log("Button 1 was cliked - handlers 4");

}

btn1.addEventListener("click", handler4);

btn1.removeEventListener("click", handler4);



let btn2 = document.querySelector("#btn2");

let c_mode = "light";

btn2.addEventListener("click",()=>{
    if(c_mode=="light"){
        c_mode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        c_mode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(c_mode);
})
