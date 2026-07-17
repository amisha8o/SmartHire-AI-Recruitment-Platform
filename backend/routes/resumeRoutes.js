const express = require("express")
const upload = require("../middleware/upload")
const Candidate = require("../models/Candidate")
const Resume = require("../models/Resume")
const extractSkills = require("../utils/extractSkills")
const pdfParse = require("pdf-parse")
const fs = require("fs")


const router = express.Router()

router.post(
"/upload",
upload.single("resume"),
async(req,res)=>{

try{

const buffer =
fs.readFileSync(req.file.path)

const pdf =
await pdfParse(buffer)

const foundSkills =
extractSkills(pdf.text)

const score =
Math.min(
foundSkills.length * 12,
100
)

const resume =
new Resume({

name:req.file.originalname,

filename:req.file.filename,

score

})

await resume.save();

console.log("✅ Resume Saved");

console.log("📦 req.body =>", req.body);

console.log("Creating Candidate...");

await Candidate.create({

  name: req.body.name || "Candidate",

  email: req.body.email || "candidate@gmail.com",

  role: "Software Engineer",

  atsScore: score,

  status: "Applied",

  resume: req.file.filename

});

console.log("✅ Candidate Saved");

res.json({

  message: "Resume Uploaded Successfully ✅",

  skills: foundSkills,

  score,

  resumeText: pdf.text

});

} catch (error) {

  console.log("❌ Resume Route Error");

  console.log(error);

  res.status(500).json({

    message: "Resume Analysis Failed"

  });

}

})

router.get(
"/resumes",
async(req,res)=>{

const data =
await Resume.find().sort({
createdAt:-1
})

res.json(data)

})

module.exports = router