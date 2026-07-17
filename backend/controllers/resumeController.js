const pdf = require("pdf-parse")

const analyzeResume = async (req, res) => {

try {

const file = req.files.resume

const data = await pdf(file.data)

const text = data.text.toLowerCase()

let skills = []

if(text.includes("react")) skills.push("React")
if(text.includes("node")) skills.push("Node.js")
if(text.includes("mongo")) skills.push("MongoDB")
if(text.includes("javascript")) skills.push("JavaScript")

let score = skills.length * 20

res.json({
skills,
score
})

} catch(err){
console.log(err)
res.status(500).json({message:"Error parsing resume"})
}

}

module.exports = { analyzeResume }