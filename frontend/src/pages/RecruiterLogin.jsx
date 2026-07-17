import { useState } from "react"
import axios from "axios"

function RecruiterLogin(){

const [isLogin,setIsLogin]=useState(true)

const [company,setCompany]=useState("")
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

async function handleSubmit(){

try{

const url=isLogin
? "http://localhost:5000/api/recruiter/login"
: "http://localhost:5000/api/recruiter/register"

const body=isLogin
? {email,password}
: {company,name,email,password}

const res=await axios.post(url,body)

alert(res.data.message)

if(res.data.token){

localStorage.setItem(
"recruiterToken",
res.data.token
)

localStorage.setItem(
"recruiterName",
res.data.recruiter.name
)

window.location.reload()

}

}catch(err){

alert(
err?.response?.data?.message ||
"API Error"
)

}

}

return(

<div
style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh",
background:"#071028"
}}
>

<div
style={{
width:"420px",
background:"#122248",
padding:"35px",
borderRadius:"20px",
color:"white"
}}
>

<h1>Recruiter Portal</h1>

{!isLogin && (

<>

<input
placeholder="Company Name"
value={company}
onChange={(e)=>setCompany(e.target.value)}
style={styles.input}
/>

<input
placeholder="Recruiter Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={styles.input}
/>

</>

)}

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={styles.input}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={styles.input}
/>

<button
onClick={handleSubmit}
style={styles.button}
>

{isLogin
? "Recruiter Login"
: "Recruiter Register"}

</button>

<p
style={{
cursor:"pointer",
marginTop:"20px"
}}
onClick={()=>
setIsLogin(!isLogin)
}
>

{isLogin
? "Create Recruiter Account"
: "Already have an account?"}

</p>

</div>

</div>

)

}

const styles={

input:{
width:"100%",
padding:"12px",
marginTop:"15px",
borderRadius:"10px",
border:"none"
},

button:{
width:"100%",
padding:"14px",
marginTop:"20px",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer"
}

}

export default RecruiterLogin