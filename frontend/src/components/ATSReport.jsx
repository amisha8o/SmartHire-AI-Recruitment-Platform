import { jsPDF } from "jspdf"

function ATSReport({ username, score, skills }) {

const downloadPDF = () => {

const doc = new jsPDF()

doc.setFontSize(22)
doc.text("SmartHire ATS Report", 20, 20)

doc.setFontSize(14)
doc.text(`Candidate : ${username}`, 20, 40)
doc.text(`ATS Score : ${score}%`, 20, 50)
doc.text(`Date : ${new Date().toLocaleDateString()}`, 20, 60)

doc.setFontSize(16)
doc.text("Detected Skills", 20, 80)

let y = 90

skills.forEach((skill) => {
doc.text(`• ${skill}`, 25, y)
y += 10
})

doc.setFontSize(16)
doc.text("Resume Status", 20, y + 10)

doc.setFontSize(13)

if(score >= 90){
doc.text("Excellent Resume ✅",20,y+20)
}
else if(score >= 75){
doc.text("Good Resume 👍",20,y+20)
}
else{
doc.text("Needs Improvement ⚠️",20,y+20)
}

doc.save("SmartHire_ATS_Report.pdf")

}

return(

<div
style={{
marginTop:"25px"
}}
>

<button
onClick={downloadPDF}
style={{
padding:"14px 25px",
background:"#16a34a",
color:"white",
border:"none",
borderRadius:"12px",
cursor:"pointer",
fontSize:"16px",
fontWeight:"bold"
}}
>

📄 Download ATS Report

</button>

</div>

)

}

export default ATSReport