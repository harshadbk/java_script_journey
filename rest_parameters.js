function promise(...paras){
    for(let para of paras){
        console.log("I will",para);
    }
}

promise("become","IAS")

function add(...nums){
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
    console.log(sum);
}

add(12,3,4,5,6,7,18);