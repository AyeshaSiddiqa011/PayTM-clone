const mongoose = require("mongoose")
const { Schema } = mongoose;

 mongoose.connect("mongodb://localhost:27017/")

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength:5
    },
    firstName : String,
    lastName : String,
    password: String,

})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const Account = mongoose.model('Account', accountSchema)
const User = mongoose.model('User', userSchema)
module.exports = { User, Account }