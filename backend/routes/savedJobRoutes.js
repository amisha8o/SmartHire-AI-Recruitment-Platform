const express = require("express")
const router = express.Router()

const SavedJob = require("../models/SavedJob")

// Save Job
router.post("/save-job", async (req, res) => {

try{

const savedJob = new SavedJob(req.body)

await savedJob.save()

res.json({
message:"Job Saved Successfully"
})

}catch{

res.status(500).json({
message:"Server Error"
})

}

})

// Get Saved Jobs
router.get("/saved-jobs/:email", async (req, res) => {

try{

const jobs = await SavedJob.find({
email:req.params.email
})

res.json(jobs)

}catch{

res.status(500).json({
message:"Server Error"
})

}

})

module.exports = router