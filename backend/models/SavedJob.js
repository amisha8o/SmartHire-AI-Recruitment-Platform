const mongoose = require("mongoose")

const SavedJobSchema = new mongoose.Schema({

email:{
type:String,
required:true
},

jobId:{
type:String,
required:true
},

company:String,

title:String,

location:String,

salary:String,

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("SavedJob", SavedJobSchema)