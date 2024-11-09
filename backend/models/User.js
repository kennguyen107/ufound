const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    googleID: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String
    }},
    {
        timestamps: true
});


module.exports = mongoose.model('User', userSchema);