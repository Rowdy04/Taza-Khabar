const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema({
   username:{
        type: String,
        required: true,
        unique: true,
        trim:true
   },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
});

const Signup = mongoose.model('signups', SignupSchema);

module.exports = Signup;