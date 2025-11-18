// function api(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     console.log("Weather data");
//     resolve("Successfully");
//     },2000
//     )
//    });
// }

// async function getApi(){
//     await api();
//     await api();
// }

// getApi();

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



  async function getalldata(){
    console.log("getting data 1.....");
    await getData(1);
    console.log("getting data 2.....");
    await getData(2);
    console.log("getting data 3.....");
    await getData(3);
    console.log("getting data 4.....");
    await getData(4);
    console.log("getting data 5.....");
    await getData(5);
    console.log("getting data 6.....");
    await getData(6);
  }

  getalldata();

