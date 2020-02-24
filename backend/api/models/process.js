const mongoose = require('mongoose');
const { Schema } = mongoose;

const processSchema = new Schema({
    nameProcess: { type: String, required: true},
    namePetitioner: { type: String, required: false},    
    identification: { type: String, required: false}, 
    phone: { type: Number, required: false},	
    dateCreate: {type: Date, required: true},
    dateReceived: {type: Date, required: false},
    dateResponse: {type: Date, required: false},
    status: {type: Array, "default": []},
	files: {type: Array, "default": []}
	
})


module.exports = mongoose.model('Process', processSchema);
