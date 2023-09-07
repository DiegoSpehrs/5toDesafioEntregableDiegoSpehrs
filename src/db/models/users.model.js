import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    first_name:{
        typeof: 'string',
        require: true
    },
    last_name:{
        typeof: 'string',
        require: true
    },
    username:{
        typeof: 'string',
        require: true,
        unique: true
    },
    password:{
        typeof: 'string',
        require: true
    },
    isAdmin:{
        type: 'boolean',
        default: false
    }
})

export const usersModel = mongoose.model('users', usersSchema);