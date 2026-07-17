function CoverLetter({ username, skills }) {

const skillText =
skills.length > 0
? skills.join(", ")
: "Software Development"

const letter = `Dear Hiring Manager,

I am excited to apply for the Software Engineer position at your organization.

My technical skills include ${skillText}. I enjoy solving real-world problems, building scalable applications, and continuously learning new technologies.

I have worked on multiple full-stack projects using the MERN Stack and AI-powered applications. I am confident that my problem-solving skills and passion for software development will allow me to contribute effectively to your team.

Thank you for your time and consideration.

Sincerely,

${username}`

return (

<div
style={{
background:"#122248",
padding:"30px",
borderRadius:"20px",
marginTop:"25px"
}}
>

<h2>📄 AI Cover Letter</h2>

<textarea
readOnly
value={letter}
style={{
width:"100%",
height:"260px",
padding:"15px",
marginTop:"20px",
borderRadius:"12px",
background:"#0d1838",
color:"white",
border:"none",
resize:"none"
}}
/>

<button
onClick={()=>{
navigator.clipboard.writeText(letter)
alert("Cover Letter Copied ✅")
}}
style={{
marginTop:"15px",
padding:"12px 25px",
background:"#3b82f6",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer"
}}
>
📋 Copy Cover Letter
</button>

</div>

)

}

export default CoverLetter