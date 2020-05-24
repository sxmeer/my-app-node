const mongoose = require('mongoose');

var User = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    id:{
        type:Number,
        required: true
    }
});

module.exports = mongoose.model('users', User);