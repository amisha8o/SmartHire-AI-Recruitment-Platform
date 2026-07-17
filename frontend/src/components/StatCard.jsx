function StatCard({
title,
value,
color,
icon
}){

return(

<div style={styles.card}>

<div>

<p style={styles.title}>
{title}
</p>

<h1
style={{
...styles.value,
color:color
}}
>
{value}
</h1>

<p style={styles.subtitle}>
Updated Just Now
</p>

</div>

<div
style={{
...styles.icon,
background:`linear-gradient(135deg,${color},#3b82f6)`
}}
>

{icon}

</div>

</div>

)

}

const styles={

card:{
background:"linear-gradient(145deg,#122248,#1a2f63)",
padding:"28px",
borderRadius:"22px",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
boxShadow:"0 10px 30px rgba(0,0,0,.35)",
transition:"0.3s",
cursor:"pointer",
border:"1px solid rgba(255,255,255,.05)"
},

title:{
margin:0,
fontSize:"15px",
color:"#94a3b8",
fontWeight:"500"
},

value:{
marginTop:"12px",
marginBottom:"6px",
fontSize:"38px",
fontWeight:"700"
},

subtitle:{
margin:0,
fontSize:"13px",
color:"#6b7280"
},

icon:{
width:"72px",
height:"72px",
borderRadius:"20px",
display:"flex",
justifyContent:"center",
alignItems:"center",
fontSize:"34px",
color:"#fff",
boxShadow:"0 8px 20px rgba(59,130,246,.35)"
}

}

export default StatCard