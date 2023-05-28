const mongo = require('mongoose');

const daySchema = mongo.Schema(
    {
        name:{
            type: String,
            required: true
        },
        numOfLessons:{
            type: Number
        }
    }
)

const Day = mongo.model('Day', daySchema); 
module.exports = Day;