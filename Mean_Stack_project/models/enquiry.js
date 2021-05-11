var express = require('express');
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
 

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true  },
    lastName: { type: String, required: true },
    cource: { type: String, required: true },
    location: { type: String, required: true },
    emailId: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    contactedByTeam: { type: Boolean, required: false, default: false },
    commentsByCandidate: { type: String, required: false }  
});
 
module.exports = mongoose.model("tbl_enquiry", userSchema);


 