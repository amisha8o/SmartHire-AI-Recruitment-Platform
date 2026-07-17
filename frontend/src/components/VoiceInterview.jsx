import { useState, useEffect, useRef } from "react"

function VoiceInterview() {
  
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [started, setStarted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [feedback,setFeedback]=useState("")
  const [timeLeft, setTimeLeft] = useState(120);
  const videoRef = useRef(null)

 const mediaRecorder = useRef(null)

 const chunks = useRef([])

 const [recording,setRecording] = useState(false)

 const [videoURL,setVideoURL] = useState("")

  useEffect(() => {

    if (started && questions.length > 0) {

      window.speechSynthesis.cancel()

      const msg = new SpeechSynthesisUtterance(
        questions[current]
      )

      msg.rate = 1
      msg.pitch = 1

      window.speechSynthesis.speak(msg)

    }

  }, [started, current, questions])

  useEffect(() => {

  if (!started) return;

  if (timeLeft <= 0) {
    nextQuestion();
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);

}, [started, timeLeft]);



async function startInterview() {

  const list = [

    "Introduce yourself.",

    "Explain Virtual DOM.",

    "Difference between State and Props?",

    "What is Node.js?",

    "Explain MongoDB Aggregation.",

    "What is Closure in JavaScript?",

    "Difference between SQL and NoSQL?",

    "Explain useEffect Hook.",

    "What are Promises?",

    "Tell me about your SmartHire project."

  ];

  setQuestions(list);

  setCurrent(0);

  setStarted(true);
}
async function getFeedback(){

  try{

    const res = await fetch(

      "http://localhost:5000/api/ai/voice-feedback",

      {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({

          question:questions[current],

          answer: answer

        })

      }

    )
    console.log("Question :", questions[current])
    console.log("Answer :", answer)
    const data = await res.json()

    setFeedback(data.feedback)

  }

  catch{

    alert("AI Feedback Error")

  }

}


 

function nextQuestion() {

  setTimeLeft(120);

  setAnswer("");
  setFeedback("");

  if (current < questions.length - 1) {

    setCurrent(current + 1);

  } else {

    alert("Interview Completed ✅");

    setStarted(false);

  }

}

 useEffect(() => {
  console.log("Answer Changed:", answer)
}, [answer])

  async function startCamera(){

try{

const stream = await navigator.mediaDevices.getUserMedia({

video:true,

audio:true

})

videoRef.current.srcObject = stream

mediaRecorder.current = new MediaRecorder(stream)

chunks.current=[]

mediaRecorder.current.ondataavailable=(e)=>{

chunks.current.push(e.data)

}

mediaRecorder.current.onstop=()=>{

const blob = new Blob(chunks.current,{

type:"video/webm"

})

const url = URL.createObjectURL(blob)

setVideoURL(url)

}

}catch{

alert("Camera Permission Denied")

}

}
function startRecording(){

if(!mediaRecorder.current) return

mediaRecorder.current.start()

setRecording(true)

}
function stopRecording(){

if(!mediaRecorder.current) return

mediaRecorder.current.stop()

setRecording(false)

}
function stopCamera(){

  if(videoRef.current && videoRef.current.srcObject){

    const tracks = videoRef.current.srcObject.getTracks()

    tracks.forEach(track => track.stop())

    videoRef.current.srcObject = null

  }

}
  return (

    <div
      style={{
        marginTop: "30px",
        background: "#122248",
        padding: "25px",
        borderRadius: "20px"
      }}
    >

      <h2>🎤 AI Voice Interview</h2>

      {!started ? (

        <button
          onClick={startInterview}
          style={{
            padding: "12px 22px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >

          {loading ? "Generating..." : "🎤 Start Interview"}

        </button>

      ) : (

        <div>
        <div
style={{
marginTop:"20px",
marginBottom:"20px",
textAlign:"center"
}}
>

<video
ref={videoRef}
autoPlay
playsInline
muted
style={{
width:"100%",
maxWidth:"500px",
borderRadius:"15px",
border:"2px solid #2563eb"
}}
/>

<br/><br/>

<button
onClick={startCamera}
style={{
padding:"10px 18px",
marginRight:"10px",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer"
}}
>

📹 Start Camera

</button>

<button
onClick={startRecording}
disabled={recording}
style={{
padding:"10px 18px",
marginRight:"10px",
background:"#22c55e",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer"
}}
>

🔴 Start Recording

</button>

<button
onClick={stopRecording}
disabled={!recording}
style={{
padding:"10px 18px",
background:"#ef4444",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer"
}}
>

⏹ Stop Recording

</button>
<button
onClick={stopCamera}
style={{
padding:"10px 18px",
marginLeft:"10px",
background:"#64748b",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer"
}}
>

📷 Stop Camera

</button>

</div>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  }}
>
  <h3>
    Question {current + 1} / {questions.length}
  </h3>

  <span
    style={{
      background: "#2563eb",
      padding: "8px 15px",
      borderRadius: "20px"
    }}
  >
    {Math.round(((current + 1) / questions.length) * 100)}%
  </span>
</div>
<div
  style={{
    width: "100%",
    height: "10px",
    background: "#1e293b",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "20px"
  }}
>
  <div
    style={{
      width: `${((current + 1) / questions.length) * 100}%`,
      height: "100%",
      background: "#22c55e",
      transition: "0.4s"
    }}
  />
</div>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px"
  }}
>
  <h3>
    ⏱ Time Left : {Math.floor(timeLeft / 60)}:
    {(timeLeft % 60).toString().padStart(2, "0")}
  </h3>

  <span
    style={{
      background: timeLeft <= 30 ? "#ef4444" : "#22c55e",
      color: "white",
      padding: "8px 15px",
      borderRadius: "20px",
      fontWeight: "bold"
    }}
  >
    {timeLeft <= 30 ? "⚠ Hurry Up" : "Recording"}
  </span>
</div>

          <h3>{questions[current]}</h3>
          <textarea
  value={answer}
  onChange={(e) => setAnswer(e.target.value)}
  placeholder="Type your answer here..."
  style={{
    width: "100%",
    height: "150px",
    marginTop: "20px",
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    resize: "vertical"
  }}
/>

          <div
            style={{
              marginTop: "20px",
              background: "#071028",
              padding: "20px",
              borderRadius: "12px"
            }}
          >

            <h3>Your Answer</h3>

            <p>{answer}</p>

             <p>✍ Ready to answer</p>
          </div>
          {

           feedback && (

           <div
             style={{
                marginTop:"20px",
                background:"#0b1736",
                padding:"20px",
                borderRadius:"12px",
                whiteSpace:"pre-wrap",
                lineHeight:"28px"
               }}
             >

               <h3>🤖 AI Feedback</h3>

               <p>{feedback}</p>

              </div>

              )

            }

          <button
             onClick={getFeedback}
             style={{
               marginTop:"20px",
               marginRight:"10px",
               padding:"12px 20px",
               background:"#2563eb",
               color:"white",
               border:"none",
               borderRadius:"10px",
               cursor:"pointer"
             }}
           >

             🤖 Analyze Answer

            </button>



         <button
  onClick={nextQuestion}
  style={{
    marginTop: "20px",
    padding: "12px 22px",
    background: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
  }}
>
  Next →
</button>
{videoURL && (

<div
style={{
marginTop:"30px"
}}
>

<h3>🎥 Recorded Interview</h3>

<video
src={videoURL}
controls
style={{
width:"100%",
maxWidth:"500px",
borderRadius:"15px"
}}
/>

</div>

)}

        </div>

      )}

    </div>


  )

}

export default VoiceInterview