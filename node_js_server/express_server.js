const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Its a home page");
    res.send("Welcome to the home page!"); 
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
