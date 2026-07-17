const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI("PASTE_YOUR_AQ_KEY_HERE")

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash"
})

async function test() {

  try {

    const result = await model.generateContent("Hello")

    console.log(result.response.text())

  } catch (e) {

    console.log(e)

  }

}

test()