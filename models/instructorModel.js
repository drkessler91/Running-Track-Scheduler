const mongo = require('mongoose');

const instructorSchema = mongo.Schema(
    {
        name:{
            type: String,
            required: true
        }
    }
)

const Instructor = mongo.model('Instructor', instructorSchema); 
module.exports = Instructor;