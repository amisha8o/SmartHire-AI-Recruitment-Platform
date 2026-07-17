const mongoose = require("mongoose")

const RecruiterSchema = new mongoose.Schema({

company:{
type:String,
required:true
},

name:{
type:String,
required:true
},

email:{
type:String,
required:true,
unique:true
},

password:{
type:String,
required:true
},

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Recruiter", RecruiterSchema)