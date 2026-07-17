const express = require("express")
const router = express.Router()

const Job = require("../models/Job")

// Get All Jobs
router.get("/jobs", async (req, res) => {

try{

const jobs = await Job.find().sort({createdAt:-1})

res.json(jobs)

}
catch(err){


res.status(500).json({
message:"Server Error"
})

}

})

// Add Job
router.post("/jobs", async (req, res) => {

try{

const job = new Job(req.body)

await job.save()

res.json({
message:"Job Added Successfully"
})

}
catch(err){

res.status(500).json({
message:"Server Error"
})

}

})
router.get("/seed-jobs", async (req, res) => {

await Job.deleteMany({})

await Job.insertMany([

{
company:"Google",
title:"Frontend Engineer",
location:"Bangalore",
salary:"₹18 LPA",
experience:"Fresher",
skills:["React","JavaScript","HTML","CSS"],
description:"Frontend Developer"
},

{
company:"Microsoft",
title:"Software Engineer",
location:"Hyderabad",
salary:"₹22 LPA",
experience:"Fresher",
skills:["Java","DSA","SQL"],
description:"Software Engineer"
},

{
company:"Amazon",
title:"SDE-I",
location:"Pune",
salary:"₹20 LPA",
experience:"Fresher",
skills:["Node.js","MongoDB","Express"],
description:"Backend Developer"
}

])

res.json({
message:"Jobs Added Successfully"
})

})

router.delete("/jobs/:id", async (req,res)=>{

try{

await Job.findByIdAndDelete(
req.params.id
)

res.json({
message:"Job Deleted Successfully"
})

}catch{

res.status(500).json({
message:"Delete Failed"
})

}

})
router.put("/jobs/:id", async(req,res)=>{

try{

const updatedJob = await Job.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

)

res.json({

message:"Job Updated Successfully",

updatedJob

})

}catch{

res.status(500).json({

message:"Update Failed"

})

}

})
router.post("/recommend-jobs", async (req, res) => {

  try {

    const { skills } = req.body

    const jobs = await Job.find()

    const recommended = jobs.map(job => {

     const jobSkills = Array.isArray(job.skills)
  ? job.skills.map(skill => skill.toLowerCase())
  : job.skills.split(",").map(skill => skill.trim().toLowerCase())
        .map(s => s.trim().toLowerCase())

      const candidateSkills = skills.map(s =>
        s.toLowerCase()
      )

      const matched = jobSkills.filter(skill =>
        candidateSkills.includes(skill)
      )

      const match = Math.round(
        (matched.length / jobSkills.length) * 100
      )

      return {
        ...job._doc,
        match
      }

    })

    recommended.sort((a, b) => b.match - a.match)

    res.json(recommended)

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: "Recommendation Error"
    })

  }

})

module.exports = router