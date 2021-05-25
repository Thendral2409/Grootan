const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required:true,
    },
    Dob: {
        type: String,
        required:true,
    },
    firstName: {
        type: String,
        required:true,
    },
    lastName: {
        type: String,
        required:true,
    },
    more: {
        address1: {
            type: String,
        },
        address2: {
            type: String,
        },
        address3: {
            type: String,
        },
        phone: {
            type: Number,
        },
    },
})

const UserDB = mongoose.model("UserDB", schema);

module.exports = UserDB;