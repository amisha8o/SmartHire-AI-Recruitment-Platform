import { useState } from "react"

function MockInterview({ skills }) {

const [questions,setQuestions]=useState("")
const [loading,setLoading]=useState(false)

async function startInterview(){

setLoading(true)

try{

const res = await fetch(
"http://localhost:5000/api/ai/mock-interview",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
skills
})
}
)

const data = await res.json()

console.log("Status:", res.status)
console.log("Response:", data)

if (!res.ok) {

  alert(data.message || "Server Error")

  return

}

setQuestions(data.questions)

}
catch{

alert("AI Server Error")

}

setLoading(false)

}

return(

<div
style={{
marginTop:"30px",
background:"#122248",
padding:"25px",
borderRadius:"20px"
}}
>

<h2>🎤 AI Mock Interview</h2>

<p>
Generate Technical Interview Questions using AI
</p>

<button
onClick={startInterview}
style={{
marginTop:"15px",
padding:"12px 25px",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer",
fontWeight:"bold"
}}
>

{
loading
?

"Generating..."

:

"🎤 Start Interview"

}

</button>

{
questions && (

<div
style={{
marginTop:"25px",
background:"#071028",
padding:"20px",
borderRadius:"15px",
whiteSpace:"pre-wrap",
lineHeight:"30px"
}}
>

{questions}

</div>

)

}

</div>

)

}

export default MockInterview