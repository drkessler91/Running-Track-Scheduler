const express = require('express');
const app = express();
const db = require('./dbConnection');
const Instructor = require('./models/instructorModel');
const Days = require('./models/dayModel');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(8000, () =>{
    console.log("schedule app running at port 8000");
})

app.get('/', (req, res) =>{
    res.send('GET check');
})

app.get('/getInstructors', async (req, res) =>{
    
    try{
        const instructors = await Instructor.find({});
        
        res.status(200).json(instructors);
    } catch(error){
        res.status(500).json({message:error.message});
    }
})


app.get('/getDays', async (req, res) =>{
    try{
        const days = await Days.find({});
        
        res.status(200).json(days);
    } catch(error){
        res.status(500).json({message:error.message});
    }
})



app.get('/getLessonPerDay', async (req, res) =>{
    try{
        const days = await Days.find({});
        //const dayNames = days.map(day => day.name);
        
        res.status(200).json(days);
    } catch(error){
        res.status(500).json({message:error.message});
    }
})