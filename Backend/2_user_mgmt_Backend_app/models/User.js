const { Schema, model } = require('mongoose');


// Schema
// username, name, email, password, isAdmin, createdAt
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        maxLength: 20
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });


// Model
const UserModel = model('User', userSchema, "Users");

module.exports = UserModel;