const express = require("express")
const router = express.Router()

const { GoogleGenAI } = require("@google/genai")

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})


router.post("/mock-interview", async (req, res) => {

  try {

    const { skills } = req.body

    const prompt = `
You are a senior technical interviewer.

Ask only 5 technical interview questions based on the candidate skills.

Candidate Skills:
${skills.join(", ")}
`

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt
    })

    res.json({
      questions: result.text
    })

  } catch (error) {

    console.log("Mock Interview AI Error:", error)

    res.status(500).json({
      message: "AI Error"
    })

  }

})


module.exports = router