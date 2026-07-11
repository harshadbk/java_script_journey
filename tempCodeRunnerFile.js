function add(...nums){
    for(let num of nums){
        sum += num;
    }
    console.log(sum);
}

add(12,3,4,5,6,7,18);