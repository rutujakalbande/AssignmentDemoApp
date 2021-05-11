var express = require('express');
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
 

const userSchema = mongoose.Schema({
    demoName: { type: String, required: true  },
    demoDate: { type: String, required: true },
    demoLocation: { type: String, required: true },
    demoMode: { type: String, required: true },
    demoFees: { type: String, required: true },
    demoFaculty: { type: String, required: true } 
});
 
module.exports = mongoose.model("tbl_demo", userSchema);