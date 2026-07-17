const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({

company:{
type:String,
required:true
},

title:{
type:String,
required:true
},

location:{
type:String,
required:true
},

salary:{
type:String,
required:true
},

experience:{
type:String,
default:"Fresher"
},

skills:{
type:[String],
default:[]
},

description:{
type:String,
default:""
},

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Job", JobSchema)