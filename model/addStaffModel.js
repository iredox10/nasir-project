const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    surName:{
        type: String,
        required: true
    },
    staffId:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})

const staffModel = mongoose.model('staffModel', staffSchema)

module.exports = staffModel