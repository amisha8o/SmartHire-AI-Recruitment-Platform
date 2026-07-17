const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const router = express.Router()

const Recruiter = require("../models/Recruiter")

// Recruiter Register
router.post("/recruiter/register", async (req, res) => {

try{

const {company,name,email,password} = req.body

const exists = await Recruiter.findOne({email})

if(exists){

return res.status(400).json({
message:"Recruiter already exists"
})

}

const hashedPassword = await bcrypt.hash(password,10)

const recruiter = new Recruiter({

company,
name,
email,
password:hashedPassword

})

await recruiter.save()

res.json({
message:"Recruiter Registered Successfully"
})

}catch{

res.status(500).json({
message:"Server Error"
})

}

})

// Recruiter Login
router.post("/recruiter/login", async (req,res)=>{

try{

const {email,password} = req.body

const recruiter = await Recruiter.findOne({email})

if(!recruiter){

return res.status(400).json({
message:"Recruiter Not Found"
})

}

const match = await bcrypt.compare(
password,
recruiter.password
)

if(!match){

return res.status(400).json({
message:"Wrong Password"
})

}

const token = jwt.sign(

{
id:recruiter._id
},

process.env.JWT_SECRET

)

res.json({

message:"Login Successful",

token,

recruiter

})

}catch{

res.status(500).json({
message:"Server Error"
})

}

})

module.exports = router