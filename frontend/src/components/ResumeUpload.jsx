import { useState } from "react"

function ResumeUpload({
  resume,
  setResume,
  analyzeResume
}) {

  const [drag, setDrag] = useState(false)

  const handleDrop = (e) => {

    e.preventDefault()

    setDrag(false)

    const file = e.dataTransfer.files[0]

    if (file) {

      setResume(file)

    }

  }

  return (

    <div style={styles.card}>

      <h2>
        📄 Resume Upload
      </h2>

      <p style={styles.subtitle}>
        Upload your latest resume in PDF format.
      </p>

      <div

        onDragOver={(e) => {
          e.preventDefault()
          setDrag(true)
        }}

        onDragLeave={() => setDrag(false)}

        onDrop={handleDrop}

        style={{
          ...styles.dropArea,
          border: drag
            ? "2px solid #3b82f6"
            : "2px dashed #4b5563",
          background: drag
            ? "#1d4ed833"
            : "#0b1738"
        }}

      >

        <div style={{fontSize:"60px"}}>
          📂
        </div>

        <h3>
          Drag & Drop Resume Here
        </h3>

        <p style={{color:"#94a3b8"}}>
          or click below to browse
        </p>

        <input
          type="file"
          accept=".pdf"
          onChange={(e)=>
            setResume(e.target.files[0])
          }
        />

      </div>

      {

        resume &&

        <div style={styles.fileCard}>

          <div>

            <h3 style={{margin:0}}>
              📄 {resume.name}
            </h3>

            <p style={{marginTop:"8px",color:"#94a3b8"}}>
              {(resume.size/1024).toFixed(1)} KB
            </p>

          </div>

          <div style={styles.success}>
            Ready ✅
          </div>

        </div>

      }

      <button

        style={styles.button}

        onClick={analyzeResume}

      >

        🤖 Analyze Resume

      </button>

    </div>

  )

}

const styles={

card:{
marginTop:"25px",
padding:"30px",
borderRadius:"22px",
background:"linear-gradient(145deg,#122248,#1a2f63)",
boxShadow:"0 10px 30px rgba(0,0,0,.35)"
},

subtitle:{
marginTop:"8px",
color:"#94a3b8"
},

dropArea:{
marginTop:"25px",
padding:"45px",
borderRadius:"20px",
textAlign:"center",
transition:".3s"
},

fileCard:{
marginTop:"25px",
padding:"20px",
borderRadius:"15px",
background:"#13244d",
display:"flex",
justifyContent:"space-between",
alignItems:"center"
},

success:{
padding:"10px 18px",
background:"#22c55e",
borderRadius:"20px",
fontWeight:"bold"
},

button:{
marginTop:"25px",
width:"100%",
padding:"15px",
border:"none",
borderRadius:"14px",
background:"linear-gradient(90deg,#5b4bff,#3b82f6)",
color:"white",
fontSize:"16px",
fontWeight:"bold",
cursor:"pointer",
boxShadow:"0 8px 20px rgba(91,75,255,.35)"
}

}

export default ResumeUpload