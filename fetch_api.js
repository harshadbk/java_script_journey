const url = "https://cat-fact.herokuapp.com/facts";

const getFacts = async()=>{
    console.log("Getting data .....");
    let promise = await fetch(url);
    console.log(promise.status);
    console.log(promise.text);
    let data = await promise.json();
    console.log(data[4].text);
};

console.log(getFacts());

