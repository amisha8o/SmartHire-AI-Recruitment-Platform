const mongoose = require("mongoose")

const resumeSchema =
new mongoose.Schema({

name:String,

filename:String,

score:Number,

createdAt:{
type:Date,
default:Date.now
}

})

module.exports =
mongoose.model(
"Resume",
resumeSchema
)