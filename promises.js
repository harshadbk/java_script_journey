/*
Promises in JavaScript are a way to handle asynchronous
 operations. They represent a value that may be available
  now, or in the future, or never. Promises are commonly 
  used for handling tasks such as fetching data from 
  a server, reading files, or any other asynchronous 
  operation that might take some time to complete.
*/

// let promise = new Promise((resolve,reject)=>{
//   console.log("I am a promise ");
//   reject("unsuccess");
// });

// function getData(dataId,getNextData){
//   return new Promise((resolve,reject)=>{ 
//   setTimeout(()=>{
//       console.log("Data",dataId);
//       resolve("Success");
//       if(getNextData){
//           getNextData();
//       }
//   },6000);
// });
// }
// let finalvalue = getData(123);
// console.log(finalvalue);
// console.log(finalvalue);

const getpromise = ()=>{
return new Promise((resolve,reject)=>{
  console.log("I am a promise ");
  resolve("Success");
  reject("Rejected");
});
};

let promises = getpromise();

promises.then((res)=>{
  console.log("Promised full filled !!!!"+res);
});

promises.catch((err)=>{
  console.log("Promise rejected !!!"+err);
})

// promise chains 

function asyncdata1 (){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Say somethings ");
      resolve("Success");
    },4000);
  });
}

function asyncdata2 (){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Say somethings ");
      resolve("Success");
    },4000);
  });
}

console.log("Fetching data 1");

let p1 = asyncdata1();
p1.then((res)=>{
  console.log(res);
  console.log("Fetching data 2");
  let p2 = asyncdata2();
  p2.then((res)=>{
  console.log(res);
})
})
