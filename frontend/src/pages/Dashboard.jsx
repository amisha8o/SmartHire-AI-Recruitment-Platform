import VoiceInterview from "../components/VoiceInterview"
import MockInterview from "../components/MockInterview"
import { toast } from "react-toastify"
import Analytics from "../components/Analytics"
import ATSReport from "../components/ATSReport"
import CoverLetter from "../components/CoverLetter"
import InterviewQuestions from "../components/InterviewQuestions"
import { useState, useEffect } from "react"

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import StatCard from "../components/StatCard"
import CandidateProfile from "../components/CandidateProfile"
import ResumeUpload from "../components/ResumeUpload"
import ResumeAnalysis from "../components/ResumeAnalysis"
import JobCard from "../components/JobCard"

function Dashboard(){

const username =
localStorage.getItem("name") || "Candidate"

const [tab,setTab] =
useState("Dashboard")
console.log("Current Tab:", tab)

const [resume,setResume] =
useState(null)

const [uploaded,setUploaded] =
useState(false)

const [saved,setSaved] =
useState([])

const [applied,setApplied] =
useState([])

const [history,setHistory] =
useState([])

const [skills,setSkills] =
useState([])

const [score,setScore] =
useState(0)

const [search,setSearch] =
useState("")

const [aiReport, setAiReport] = useState("")

const [company,setCompany]=
useState("All")

const [jobs, setJobs] = useState([])
const [recommendedJobs, setRecommendedJobs] = useState([])
const [strengths, setStrengths] = useState([]);
const [missingSkills, setMissingSkills] = useState([]);
const [suggestions, setSuggestions] = useState([]);

async function loadJobs(){

try{

const res = await fetch(
"http://localhost:5000/api/jobs"
)

const data = await res.json()

const jobsWithMatch = data.map((job)=>({

...job,

match:
Math.floor(Math.random()*16)+85+"%"

}))

setJobs(jobsWithMatch)

}catch{

console.log("Job Loading Failed")

}

}

async function loadSavedJobs(){

try{

const email = localStorage.getItem("email")

const res = await fetch(
`http://localhost:5000/api/saved-jobs/${email}`
)

const data = await res.json()

setSaved(
data.map((item)=>item.jobId)
)

}catch{

console.log("Unable to Load Saved Jobs")

}

}

useEffect(()=>{

loadHistory()

loadJobs()

loadSavedJobs()

},[])

async function loadHistory(){

try{

const res =
await fetch(
"http://localhost:5000/api/resumes"
)

const data =
await res.json()

setHistory(data)

}

catch{}

}

async function analyzeResume(){
  console.log("🔥 analyzeResume called");

if(!resume){

toast.warning("Upload Resume First")

return

}

try{

const form = new FormData()

form.append("resume", resume)

form.append("name", "Amisha")

form.append("email", "amisha@gmail.com")

const res=
await fetch(
"http://localhost:5000/api/upload",
{
method:"POST",
body:form
}
)

const data=
await res.json()
console.log("UPLOAD API RESPONSE =", data);
console.log("Resume Text =", data.resumeText);

if(res.ok){

setUploaded(true)

const detectedSkills = data.skills || []

setSkills(detectedSkills)

loadRecommendedJobs(detectedSkills)

setScore(
data.score || 85
)

loadHistory()

toast.success(data.message)
try{

const aiRes = await fetch(

"http://localhost:5000/api/ai/resume-analysis",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

resumeText:data.resumeText

})

}

)

const aiData = await aiRes.json()

setAiReport(aiData.result)
setStrengths(aiData.strengths || []);
setMissingSkills(aiData.missingSkills || []);
setSuggestions(aiData.suggestions || []);

}catch{

toast.error("AI Analysis Failed")

}

}

else{

toast.error("Upload Failed")

}

}

catch{

toast.error("Server Error")

}

}

async function loadRecommendedJobs(userSkills) {

  try {

    const res = await fetch(
      "http://localhost:5000/api/recommend-jobs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
           skills: userSkills
})
        
      }
    )

    const data = await res.json()

    setRecommendedJobs(data)

  } catch {

    console.log("Recommendation Failed")

  }

}
async function saveJob(job){

if(saved.includes(job._id))
return

try{

const email = localStorage.getItem("email")

await fetch(
"http://localhost:5000/api/save-job",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({

email,

jobId:job._id,

company:job.company,

title:job.title,

location:job.location,

salary:job.salary

})
}
)

setSaved([
...saved,
job._id
])

toast.success("❤️ Job Saved Successfully")

}catch{

toast.error("Unable to Save Job")

}

}

function applyJob(job){

if(applied.includes(job._id))
return

setApplied([
...applied,
job._id
])

toast.success("Applied Successfully ✅")


}

function logout(){

localStorage.clear()

window.location.reload()

}
return (
<div
style={{
display: "flex",
minHeight: "100vh",
background: "#071028",
color: "white"
}}
>

{/* SIDEBAR */}
<Sidebar
tab={tab}
setTab={setTab}
saved={saved.length}
applied={applied.length}
logout={logout}
/>

{/* MAIN AREA */}
<div style={{ flex: 1, padding: "30px" }}>

<Navbar username={username} />

{/* DASHBOARD */}
{tab === "Dashboard" && (
<>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"20px",
marginTop:"30px"
}}
>

<StatCard
title="Resume Score"
value={`${score}%`}
color="#22c55e"
icon="📄"
/>

<StatCard
title="Saved Jobs"
value={saved.length}
color="#f59e0b"
icon="❤️"
/>

<StatCard
title="Applied"
value={applied.length}
color="#3b82f6"
icon="💼"
/>

<StatCard
title="Available Jobs"
value={jobs.length}
color="#8b5cf6"
icon="🚀"
/>

</div>

</>
)}

{/* PROFILE */}
{tab === "Profile" && (

<CandidateProfile
username={username}
level={
applied.length >= 3
? "Advanced"
: applied.length >= 1
? "Intermediate"
: "Beginner"
}
score={score}
/>

)}

<div
style={{
marginTop:"25px",
marginBottom:"25px"
}}
>

<input
type="text"
placeholder="🔍 Search Jobs..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
width:"100%",
padding:"15px",
borderRadius:"12px",
border:"none",
fontSize:"16px",
background:"#122248",
color:"white",
outline:"none"
}}
/>

</div>

<div
style={{
display:"flex",
gap:"15px",
marginTop:"15px",
marginBottom:"25px"
}}
>

<select
value={company}
onChange={(e)=>setCompany(e.target.value)}
style={{
padding:"12px",
borderRadius:"10px",
background:"#122248",
color:"white",
border:"none",
fontSize:"15px"
}}
>

<option value="All">All Companies</option>
<option value="Google">Google</option>
<option value="Microsoft">Microsoft</option>
<option value="Amazon">Amazon</option>
<option value="Adobe">Adobe</option>

</select>

</div>

{tab === "Resume" && (
<>
  <ResumeUpload
    resume={resume}
    setResume={setResume}
    analyzeResume={analyzeResume}
  />

  {uploaded && (
   <ResumeAnalysis
  score={score}
  skills={skills}
  aiReport={aiReport}
  strengths={strengths}
  missingSkills={missingSkills}
  suggestions={suggestions}
/>
  )}

  {uploaded && (
    <InterviewQuestions
      skills={skills}
    />
  )}
  
{uploaded && (

<VoiceInterview />

)}

{uploaded && (

<CoverLetter
username={username}
skills={skills}
/>

)}
 

  {uploaded && (
    <ATSReport
      username={username}
      score={score}
      skills={skills}
    />
  )}
</>
)}
{recommendedJobs.length > 0 && (

<div
style={{
marginTop:"30px",
background:"#122248",
padding:"25px",
borderRadius:"20px"
}}
>

<h2 style={{marginBottom:"20px"}}>

⭐ AI Recommended Jobs

</h2>

{

recommendedJobs.slice(0,5).map(job=>(

<div
key={job._id}
style={{

background:"#071028",

padding:"18px",

marginBottom:"15px",

borderRadius:"15px",

display:"flex",

justifyContent:"space-between",

alignItems:"center"

}}
>

<div>

<h3>{job.title}</h3>

<p>{job.company}</p>

<p>{job.location}</p>

</div>

<div
style={{
textAlign:"right"
}}
>

<h2
style={{
color:"#22c55e"
}}
>
{job.match}%
</h2>

<p>Match</p>

<button
onClick={()=>saveJob(job)}
style={{
marginTop:"10px",
padding:"8px 15px",
background:"#2563eb",
border:"none",
color:"white",
borderRadius:"8px",
cursor:"pointer"
}}
>
❤️ Save
</button>

<br/><br/>

<button
onClick={()=>applyJob(job)}
style={{
padding:"8px 15px",
background:"#22c55e",
border:"none",
color:"white",
borderRadius:"8px",
cursor:"pointer"
}}
>
Apply
</button>

</div>

</div>

))

}

</div>

)}
{/* JOBS */}
{tab === "Jobs" && (

<div style={{ marginTop: "30px" }}>

  <h2>💼 Recommended Jobs</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "20px",
      marginTop: "20px"
    }}
  >

    {jobs
      .filter((job) => {

        const searchText = search.trim().toLowerCase()

        const searchMatch =
          searchText === "" ||
          job.title.toLowerCase().includes(searchText) ||
          job.company.toLowerCase().includes(searchText)

        const companyMatch =
          company === "All" ||
          job.company === company

        return searchMatch && companyMatch

      })
      .map((job) => (

        <div
          key={job._id}
          style={{
            background:"#122248",
            padding:"20px",
            borderRadius:"15px"
          }}
        >

          <h3>{job.title}</h3>

          <p>📍 {job.location}</p>

          <p>🏢 {job.company}</p>

          <p>💰 {job.salary}</p>

          <p>📊 Match: {job.match}</p>

          <div
            style={{
              display:"flex",
              gap:"10px",
              marginTop:"15px"
            }}
          >

            <button
              onClick={() => saveJob(job)}
              style={{
                flex:1,
                padding:"10px",
                background:"#ef4444",
                border:"none",
                color:"white",
                borderRadius:"10px",
                cursor:"pointer"
              }}
            >
              ❤️ Save
            </button>

            <button
              onClick={() => applyJob(job)}
              style={{
                flex:1,
                padding:"10px",
                background:"#3b82f6",
                border:"none",
                color:"white",
                borderRadius:"10px",
                cursor:"pointer"
              }}
            >
              Apply
            </button>

          </div>

        </div>

      ))}

  </div>

</div>

)}

{/* ANALYTICS */}
{tab === "Analytics" && (

<Analytics
  score={score}
  saved={saved.length}
  applied={applied.length}
  jobs={jobs.length}
/>

)}
</div>
</div>

)

}

export default Dashboard