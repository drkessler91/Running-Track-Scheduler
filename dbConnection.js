const mongo = require('mongoose');


mongo.connect('<mongodburi>')
.then(() => {
    console.log('connected to mongoDB');
}).catch((error) => {
    console.log(error);
})

