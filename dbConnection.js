const mongo = require('mongoose');


mongo.connect('mongodb+srv://admin:admin123@runningtrackscheduler.ihjr0zv.mongodb.net/Schedule-Week?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to mongoDB');
}).catch((error) => {
    console.log(error);
})

