function ResumeAnalysis({

score,

skills,

aiReport,

strengths,

missingSkills,

suggestions

}){

return(

<div style={styles.container}>

<div style={styles.left}>

<h2>
🤖 AI Resume Analysis
</h2>

<div style={styles.scoreSection}>

<div style={styles.circle}>

<h1>{score}%</h1>

<p>ATS Score</p>

</div>

<div>

<h2 style={{marginBottom:"10px"}}>
Excellent Resume ✅
</h2>

<p>
Hiring Probability :
<span style={{color:"#22c55e"}}>
 High
</span>
</p>

<p>
Resume Strength :
<span style={{color:"#3b82f6"}}>
 Strong
</span>
</p>

<p>
Interview Chance :
<span style={{color:"#22c55e"}}>
 92%
</span>
</p>

</div>

</div>

<hr style={styles.hr}/>

<h2>
✅ Detected Skills
</h2>

<div>

{

skills.length===0

?

<p>
No Skills Detected
</p>

:

skills.map((item)=>(

<span
key={item}
style={styles.skill}
>

{item}

</span>

))

}

</div>

<hr style={styles.hr}/>

<h2>
💪 Resume Strengths
</h2>

{

strengths.map((item)=>(

<div
key={item}
style={styles.success}
>

✅ {item}

</div>

))

}

</div>

<div style={styles.right}>

<h2>
❌ Missing Skills
</h2>

{

missingSkills.map((item)=>(

<div
key={item}
style={styles.error}
>

{item}

</div>

))

}

<hr style={styles.hr}/>

<h2>
💡 AI Suggestions
</h2>

{

suggestions.map((item)=>(

<div
key={item}
style={styles.tip}
>

🚀 {item}

</div>

))

}

<hr style={styles.hr}/>

<h2>
📈 Hiring Insights
</h2>

<div style={styles.insight}>

<p>
⭐ ATS Friendly Resume
</p>

<p>
⭐ Strong Technical Skills
</p>

<p>
⭐ Recruiter Visibility : High
</p>

<p>
⭐ Suitable For Product Companies
</p>

</div>
<hr style={styles.hr}/>

<h2>🤖 AI Resume Report</h2>

<div
style={{
marginTop:"20px",
background:"#071028",
padding:"20px",
borderRadius:"15px",
whiteSpace:"pre-wrap",
lineHeight:"28px",
maxHeight:"400px",
overflowY:"auto"
}}
>

{aiReport || "Generating AI Report..."}

</div>

</div>

</div>

)

}

const styles={

container:{
display:"grid",
gridTemplateColumns:"2fr 1fr",
gap:"25px",
marginTop:"25px"
},

left:{
background:"linear-gradient(145deg,#122248,#1a2f63)",
padding:"30px",
borderRadius:"22px",
boxShadow:"0 10px 30px rgba(0,0,0,.35)"
},

right:{
background:"linear-gradient(145deg,#122248,#1a2f63)",
padding:"30px",
borderRadius:"22px",
boxShadow:"0 10px 30px rgba(0,0,0,.35)"
},

scoreSection:{
display:"flex",
alignItems:"center",
gap:"40px",
marginTop:"20px"
},

circle:{
width:"170px",
height:"170px",
borderRadius:"50%",
background:"linear-gradient(135deg,#22c55e,#3b82f6)",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
color:"white",
boxShadow:"0 10px 25px rgba(34,197,94,.35)"
},

skill:{
display:"inline-block",
padding:"10px 18px",
margin:"8px",
background:"#3b82f6",
borderRadius:"25px",
fontWeight:"600"
},

success:{
marginTop:"12px",
padding:"12px",
background:"#134e4a",
borderRadius:"10px"
},

error:{
marginTop:"12px",
padding:"12px",
background:"#3f1d1d",
borderRadius:"10px"
},

tip:{
marginTop:"12px",
padding:"12px",
background:"#1e3a8a",
borderRadius:"10px"
},

insight:{
marginTop:"15px",
lineHeight:"32px"
},

hr:{
margin:"25px 0",
border:"1px solid #243b66"
}

}

export default ResumeAnalysis