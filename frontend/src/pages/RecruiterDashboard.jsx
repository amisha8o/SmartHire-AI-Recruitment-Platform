import { useState, useEffect } from "react"
import { toast } from "react-toastify"
function RecruiterDashboard() {
	async function postJob(){
		if(
!company ||
!title ||
!location ||
!salary ||
!experience ||
!skills ||
!description
){

toast.warning("Please fill all fields")

return

}

try{

const res = await fetch(
"http://localhost:5000/api/jobs",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({

company,

title,

location,

salary,

experience,

skills:skills.split(","),

description

})
}

)

const data = await res.json()

toast.success(data.message)

loadJobs()

setCompany("")
setTitle("")
setLocation("")
setSalary("")
setExperience("")
setSkills("")
setDescription("")

}catch{

toast.error("Unable to Post Job")

}

}
async function deleteJob(id){

try{

const res = await fetch(
`http://localhost:5000/api/jobs/${id}`,
{
method:"DELETE"
}
)

const data = await res.json()

toast.success(data.message)

loadJobs()

}catch{

toast.error("Delete Failed")

}

}
async function updateStatus(id,status){

try{

const res = await fetch(

`http://localhost:5000/api/candidates/${id}`,

{
method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({status})

}

)

const data = await res.json()

toast.success(data.message)

loadCandidates()

}catch{

toast.error("Unable to Update Status")

}

}

async function shortlistCandidate() {

  await updateStatus(selectedCandidate._id, "Shortlisted")

  setSelectedCandidate({
    ...selectedCandidate,
    status: "Shortlisted"
  })

}

async function rejectCandidate() {

  await updateStatus(selectedCandidate._id, "Rejected")

  setSelectedCandidate({
    ...selectedCandidate,
    status: "Rejected"
  })

}

const [company,setCompany]=useState("")
const [title,setTitle]=useState("")
const [location,setLocation]=useState("")
const [salary,setSalary]=useState("")
const [experience,setExperience]=useState("")
const [skills,setSkills]=useState("")
const [description,setDescription]=useState("")
const [jobs,setJobs]=useState([])
const [candidates, setCandidates] = useState([]);
const [search, setSearch] = useState("")
const [minATS, setMinATS] = useState(0)
const [selectedCandidate, setSelectedCandidate] = useState(null)

const [showPopup, setShowPopup] = useState(false)

async function loadJobs(){

try{

const res=await fetch(
"http://localhost:5000/api/jobs"
)

const data=await res.json()

setJobs(data)

}catch{

toast.error("Unable to Load Jobs")

}

}

useEffect(() => {

  loadJobs();

  loadCandidates();

}, []);

async function loadCandidates() {

  try {

    const res = await fetch("http://localhost:5000/api/candidates");

    const data = await res.json();

    console.log("Candidates API:", data);

    setCandidates(data);

  } catch (err) {

    console.log(err);

    toast.error("Unable to Load Candidates");

  }

}
return (

<div
style={{
minHeight: "100vh",
background: "#071028",
color: "white",
padding: "40px",
fontFamily: "Segoe UI"
}}
>

<h1>
👨‍💼 Recruiter Dashboard
</h1>

<button
onClick={() => {

  localStorage.setItem("role", "candidate")

  window.location.reload()

}}
style={{
padding:"10px 20px",
background:"#ef4444",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer",
marginTop:"15px",
marginBottom:"20px"
}}
>

⬅ Candidate Dashboard

</button>

<p>
Manage Candidates & Hiring Process
</p>

<div
style={{
display: "grid",
gridTemplateColumns: "repeat(4,1fr)",
gap: "20px",
marginTop: "30px"
}}
>

<Card
title="Candidates"
value={candidates.length}
/>

<Card
title="Resumes"
value={candidates.filter(c=>c.resume).length}
/>

<Card
title="Selected"
value={
candidates.filter(
c=>c.status==="Selected"
).length
}
/>


<Card
title="Open Jobs"
value={jobs.length}
/>

</div>

<div
style={{
marginTop: "40px"
}}
>

<div
style={{
background:"#122248",
padding:"25px",
borderRadius:"20px",
marginTop:"30px",
marginBottom:"30px"
}}
>

<h2>➕ Post New Job</h2>

<input
placeholder="Company"
value={company}
onChange={(e)=>setCompany(e.target.value)}
style={styles.input}
/>

<input
placeholder="Job Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
style={styles.input}
/>

<input
placeholder="Location"
value={location}
onChange={(e)=>setLocation(e.target.value)}
style={styles.input}
/>

<input
placeholder="Salary"
value={salary}
onChange={(e)=>setSalary(e.target.value)}
style={styles.input}
/>

<input
placeholder="Experience"
value={experience}
onChange={(e)=>setExperience(e.target.value)}
style={styles.input}
/>

<input
placeholder="Skills (comma separated)"
value={skills}
onChange={(e)=>setSkills(e.target.value)}
style={styles.input}
/>

<textarea
placeholder="Job Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
style={{
...styles.input,
height:"100px"
}}
/>

<button
style={styles.postButton}
onClick={postJob}
>

🚀 Post Job

</button>

</div>
<div
style={{
marginTop:"40px",
marginBottom:"40px"
}}
>

<h2>💼 Posted Jobs</h2>

{jobs.length===0 ? (

<p>No Jobs Posted Yet</p>

) : (

<table
style={{
width:"100%",
marginTop:"20px",
borderCollapse:"collapse",
background:"#122248",
borderRadius:"15px",
overflow:"hidden"
}}
>

<thead>

<tr
style={{
background:"#1f3b72"
}}
>

<th style={styles.th}>Company</th>
<th style={styles.th}>Job</th>
<th style={styles.th}>Location</th>
<th style={styles.th}>Salary</th>
<th style={styles.th}>Action</th>

</tr>

</thead>

<tbody>

{jobs.map((job)=>(

<tr key={job._id}>

<td style={styles.td}>{job.company}</td>

<td style={styles.td}>{job.title}</td>

<td style={styles.td}>{job.location}</td>

<td style={styles.td}>{job.salary}</td>

<td style={styles.td}>

<button
onClick={() => deleteJob(job._id)}
style={{
background:"#ef4444",
color:"white",
border:"none",
padding:"8px 15px",
borderRadius:"8px",
cursor:"pointer"
}}
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

)}

</div>

<h2>
📋 Candidate List
</h2>

<input
type="text"
placeholder="🔍 Search Candidate..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
width:"100%",
padding:"12px",
marginTop:"20px",
marginBottom:"20px",
borderRadius:"10px",
border:"none",
fontSize:"15px"
}}
/>
<div
style={{
display:"flex",
alignItems:"center",
gap:"15px",
marginBottom:"20px"
}}
>

<p
style={{
margin:0,
fontWeight:"bold"
}}
>
ATS Filter
</p>

<input
type="range"
min="0"
max="100"
value={minATS}
onChange={(e)=>setMinATS(Number(e.target.value))}
style={{
width:"250px"
}}
/>

<h3
style={{
margin:0
}}
>
{minATS}%
</h3>

</div>

<table
style={{
width: "100%",
marginTop: "20px",
borderCollapse: "collapse",
background: "#122248",
borderRadius: "15px",
overflow: "hidden"
}}
>

<thead>

<tr
style={{
background: "#1f3b72"
}}
>

<th style={styles.th}>Candidate</th>
<th style={styles.th}>Role</th>
<th style={styles.th}>ATS Score</th>
<th style={styles.th}>Status</th>

</tr>

</thead>

<tbody>

{candidates
 .filter(candidate =>

candidate.name.toLowerCase().includes(search.toLowerCase()) &&

candidate.atsScore >= minATS

)
.map((candidate)=>(

<tr key={candidate._id}>

<td style={styles.td}>

<button
onClick={() => {

console.log(JSON.stringify(candidate, null, 2))
setSelectedCandidate(candidate)

setShowPopup(true)

}}
style={{
background:"transparent",
border:"none",
color:"#60a5fa",
cursor:"pointer",
fontWeight:"bold",
fontSize:"15px"
}}
>

{candidate.name}

</button>

</td>

<td style={styles.td}>{candidate.role}</td>

<td style={styles.td}>{candidate.atsScore}%</td>

<td style={styles.td}>
<div
style={{
display:"inline-block",
padding:"5px 12px",
borderRadius:"20px",
marginBottom:"8px",
fontWeight:"bold",
color:"white",

background:
candidate.status==="Applied"
? "#f59e0b"

: candidate.status==="Shortlisted"
? "#2563eb"

: candidate.status==="Interview"
? "#8b5cf6"

: candidate.status==="Selected"
? "#22c55e"

: "#ef4444"

}}
>

{candidate.status}

</div>

<br/>

<select
value={candidate.status}
onChange={(e)=>updateStatus(candidate._id,e.target.value)}
style={{
padding:"8px",
borderRadius:"8px",
background:"#1e293b",
color:"white",
border:"1px solid #334155"
}}
>

<option>Applied</option>
<option>Reviewing</option>
<option>Shortlisted</option>
<option>Interview</option>
<option>Selected</option>
<option>Rejected</option>

</select>

</td>

</tr>

))}

</tbody>

</table>

</div>
{
showPopup && selectedCandidate && (

<div
style={{
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100%",
background:"rgba(0,0,0,.7)",
display:"flex",
justifyContent:"center",
alignItems:"center",
zIndex:9999
}}
>

<div
style={{
width:"650px",
background:"#122248",
padding:"30px",
borderRadius:"20px",
color:"white"
}}
>

<h2>👤 Candidate Details</h2>

<hr/>

<h3>{selectedCandidate.name}</h3>

<p>📧 {selectedCandidate.email}</p>

<p>💼 {selectedCandidate.role}</p>

<p>📄 ATS Score : {selectedCandidate.atsScore}%</p>

<p>
📍 Status :
<b> {selectedCandidate.status}</b>
</p>

<p>
🛠 Skills :
{
selectedCandidate.skills?.join(", ")
}
</p>
{
selectedCandidate.resume && (

<button
onClick={() => {

const url = `http://localhost:5000/uploads/${selectedCandidate.resume}`

console.log(url)

window.open(url, "_blank")

}}
style={{
marginTop:"15px",
padding:"10px 20px",
background:"#8b5cf6",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer"
}}
>
📄 View Resume
</button>

)
}

<div
style={{
display:"flex",
gap:"15px",
marginTop:"25px"
}}
>

<button
style={{
padding:"10px 20px",
background:"#22c55e",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer"
}}
>
<button
onClick={shortlistCandidate}
style={{
padding:"10px 20px",
background:"#22c55e",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer"
}}
>
✅ Shortlist
</button>
</button>

<button
style={{
padding:"10px 20px",
background:"#ef4444",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer"
}}
>
<button
onClick={rejectCandidate}
style={{
padding:"10px 20px",
background:"#ef4444",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer"
}}
>
❌ Reject
</button>
</button>

<button
onClick={() => setShowPopup(false)}
style={{
padding:"10px 20px",
background:"#3b82f6",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer"
}}
>
Close
</button>

</div>

</div>

</div>

)
}

</div>

)

}



function Card({ title, value }) {

return (

<div
style={{
background: "#122248",
padding: "25px",
borderRadius: "20px",
textAlign: "center"
}}
>

<h1>{value}</h1>

<p>{title}</p>

</div>

)

}

const styles = {

th: {
padding: "15px",
textAlign: "left",
borderBottom: "1px solid #334155"
},

td: {
padding: "15px",
borderBottom: "1px solid #334155"
},
input:{
width:"100%",
padding:"12px",
marginTop:"12px",
borderRadius:"10px",
border:"none",
fontSize:"15px"
},

postButton:{
marginTop:"20px",
padding:"14px",
width:"100%",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer",
fontWeight:"bold"
}

}

export default RecruiterDashboard