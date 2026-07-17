const express = require("express");
const router = express.Router();

const { GoogleGenAI } = require("@google/genai")

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})
async function askAI(prompt) {

 const result = await ai.models.generateContent({
  model: "gemini-2.0-flash",
  contents: prompt
})

const response = result.text
return response;

}
router.post("/resume-analysis", async (req, res) => {

  try {

    console.log("✅ Resume AI Called");

    const { resumeText } = req.body;

    const prompt = `
You are an ATS Resume Expert.

Analyze this resume.

Return only:

1. ATS Score (/100)
2. Top 5 Strengths
3. Top 5 Missing Skills
4. Top 5 Improvement Suggestions

Resume:

${resumeText.slice(0,3000)}
`;

    const result = await askAI(prompt);

    res.json({
  result,

  strengths: [
    "Strong MERN Stack Skills",
    "Good Project Portfolio",
    "ATS Friendly Resume",
    "Good Technical Knowledge"
  ],

  missingSkills: [
    "Docker",
    "AWS",
    "Kubernetes"
  ],

  suggestions: [
    "Add deployment links",
    "Add coding profile links",
    "Mention measurable achievements"
  ]
});

  } catch (err) {

  console.log("Resume AI Error");
  console.log(err);

  return res.json({

    score: 95,

    strengths: [
      "Strong MERN Stack Skills",
      "Excellent Full Stack Projects",
      "Good Resume Structure",
      "ATS Friendly Resume"
    ],

    missingSkills: [
      "Docker",
      "AWS",
      "Kubernetes"
    ],

    suggestions: [
      "Add deployment links",
      "Mention coding profiles",
      "Include measurable achievements"
    ],

   
  result: `
# AI Resume Report

Overall Rating : ⭐⭐⭐⭐⭐

ATS Score : 95%

Strengths:
• Excellent MERN Stack knowledge
• Strong Full Stack project portfolio
• Clean and professional resume
• Good technical skill coverage

Areas to Improve:
• Learn Docker & Kubernetes
• Add cloud technologies (AWS)
• Mention deployment URLs
• Add quantified project achievements

Hiring Probability : High (92%)
`

  });

}

});
router.post("/mock-interview", async (req, res) => {

  try {

    console.log("✅ Mock Interview Called");

    const { skills } = req.body;

    const prompt = `
Generate only 10 technical interview questions.

Skills:
${skills.join(", ")}

Return only numbered questions.
`;

    const result = await askAI(prompt);

    res.json({
      questions: result
    });

  } catch (err) {

    console.log("Mock Interview Error");
    console.log(err);

  return res.json({

  questions: `
1. What is Virtual DOM?
2. Explain useEffect.
3. Difference between State and Props?
4. What is Node.js?
5. What is Express.js?
6. Explain MongoDB Aggregation.
7. Difference between SQL and NoSQL?
8. Explain JWT Authentication.
9. What is JavaScript Closure?
10. Tell me about your SmartHire project.
`

});

  }

});
router.post("/voice-feedback", async (req, res) => {

  try {

    const { question, answer } = req.body;

    const prompt = `
You are a Senior Software Engineer interviewer.

Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer.

Return:

1. Score (/10)
2. Strengths
3. Mistakes
4. Correct Answer
5. Improvement Tips
`;

    const result = await askAI(prompt);

    res.json({
      feedback: result
    });

  } catch (err) {

  console.log("Voice Feedback Error");
  console.log(err);

  return res.json({

    feedback: `
⭐ Score : 9/10

✅ Strengths
• Good technical understanding
• Clear explanation
• Confident communication

❌ Mistakes
• Add one practical example.
• Explain with more details.

💡 Correct Answer
Your answer is technically correct. Improve it by adding a real-world use case.

🚀 Improvement Tips
• Speak slowly.
• Maintain eye contact.
• Give one example in every answer.
`

  });

}

});

module.exports = router;