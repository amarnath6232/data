const db = require('mongoose');

db.connect('mongodb://localhost:27017/employeeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log("connected mongodb.");

    } else {
        console.log("Error connecting mongodb.", err);
    }
});

const Course = require('./employee.model');
