/*
Callback hell, also known as "pyramid of doom" or 
"callback spaghetti", is a situation that arises 
in JavaScript code when you have multiple nested 
callbacks within each other, often resulting in 
code that is difficult to read, understand, and 
maintain. This typically occurs in asynchronous 
code where one operation depends on the result of 
another operation, leading to deeply nested callback functions.
*/

// const { get } = require("prompt-async");

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("Data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     console.log("Gettting data 2....");
//     getData(2,()=>{
//         console.log("Gettting data 3....");
//         getData(3,()=>{  
//             console.log("Gettting data 4....");        // callbacks hells 
//             getData(4);
//         })
//     });
// })


function getData(dataId,getNextData){
  return new Promise((resolve,reject)=>{ 
  setTimeout(()=>{                          // we solve this problem by using promise chain
      console.log("Data",dataId);
      resolve("Success");
      if(getNextData){
          getNextData();
      }
  },2000);
});
}

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })

getData(1).then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log(res);
})
