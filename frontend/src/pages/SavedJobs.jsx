import { useEffect, useState } from "react"

function SavedJobs(){

const [jobs,setJobs]=useState([])

useEffect(()=>{

loadSavedJobs()

},[])

async function loadSavedJobs(){

try{

const email = localStorage.getItem("email")

const res = await fetch(
`http://localhost:5000/api/saved-jobs/${email}`
)

const data = await res.json()

setJobs(data)

}catch{

alert("Unable to Load Saved Jobs")

}

}

return(

<div
style={{
minHeight:"100vh",
background:"#071028",
color:"white",
padding:"40px"
}}
>
<button
onClick={()=>{
localStorage.removeItem("page")
window.location.reload()
}}
style={{
padding:"12px 20px",
background:"#3b82f6",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer",
marginBottom:"25px"
}}
>
⬅ Back to Dashboard
</button>

<h1>❤️ Saved Jobs</h1>

{jobs.length===0 ? (

<h3>No Saved Jobs</h3>

):( 

jobs.map((job)=>(

<div
key={job._id}
style={{
background:"#122248",
padding:"20px",
borderRadius:"15px",
marginTop:"20px"
}}
>

<h2>{job.title}</h2>

<p>🏢 {job.company}</p>

<p>📍 {job.location}</p>

<p>💰 {job.salary}</p>

</div>

))

)}

</div>

)

}

export default SavedJobs