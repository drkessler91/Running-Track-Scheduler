console.log("hello");

const express = require('express');
const app = express();

app.listen(3000, () =>{
    console.log("schedule app running at port 3000");
})

app.get('/', (req, res) =>{
    res.send('get check');
})