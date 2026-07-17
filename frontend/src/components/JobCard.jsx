function JobCard({

job,

saveJob,

applyJob,

saved,

applied

}){

const isSaved =
saved.includes(job.id)

const isApplied =
applied.includes(job.id)

return(

<div style={styles.card}>

<div>

<div style={styles.logo}>

{job.company.charAt(0)}

</div>

</div>

<div style={styles.info}>

<h2>

{job.title}

</h2>

<p>

🏢 {job.company}

</p>

<p>

📍 {job.location}

</p>

<p>

💰 {job.salary}

</p>

<p>

⭐ Match {job.match}

</p>

</div>

<div style={styles.buttons}>

<button

style={
isSaved
?
styles.saved
:
styles.save
}

onClick={()=>
saveJob(job)
}

>

{

isSaved

?

"❤️ Saved"

:

"🤍 Save"

}

</button>

<button

style={
isApplied
?
styles.applied
:
styles.apply
}

onClick={()=>
applyJob(job)
}

>

{

isApplied

?

"Applied"

:

"Apply"

}

</button>

</div>

</div>

)

}

const styles={

card:{

display:"flex",

justifyContent:"space-between",

alignItems:"center",

padding:"25px",

marginTop:"20px",

borderRadius:"20px",

background:"rgba(18,34,72,.95)",

boxShadow:"0 10px 20px rgba(0,0,0,.25)"

},

logo:{

width:"70px",

height:"70px",

borderRadius:"20px",

background:"linear-gradient(135deg,#6366f1,#3b82f6)",

display:"flex",

justifyContent:"center",

alignItems:"center",

fontSize:"30px",

fontWeight:"bold",

color:"white"

},

info:{

flex:1,

marginLeft:"20px"

},

buttons:{

display:"flex",

flexDirection:"column",

gap:"12px"

},

save:{

padding:"12px 18px",

background:"#334155",

color:"white",

border:"none",

borderRadius:"10px",

cursor:"pointer"

},

saved:{

padding:"12px 18px",

background:"#ef4444",

color:"white",

border:"none",

borderRadius:"10px",

cursor:"pointer"

},

apply:{

padding:"12px 18px",

background:"linear-gradient(90deg,#6366f1,#3b82f6)",

color:"white",

border:"none",

borderRadius:"10px",

cursor:"pointer"

},

applied:{

padding:"12px 18px",

background:"#22c55e",

color:"white",

border:"none",

borderRadius:"10px",

cursor:"pointer"

}

}

export default JobCard