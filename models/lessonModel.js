const mongo = require('mongoose');

const lessonSchema = mongo.Schema(
    {
        day:{
            type: String,
            required: true
        },
        time:{
            type: String,
            required: true
        },
        instructor:{
            type: String,
            required: true
        },
        group:{
            type: Boolean,
            required: true
        },
        numOfStudents: 
        {
            type: Number,
            required: true
        } 
    }
)

const Lesson = mongo.model('Lesson', lessonSchema); 
module.exports = Lesson;