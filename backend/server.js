require("dotenv").config()
const candidateRoutes = require("./routes/candidateRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")
const resumeRoutes = require("./routes/resumeRoutes")
const reportRoutes = require("./routes/reportRoutes")
const recruiterRoutes = require("./routes/recruiterRoutes")
const mockInterviewRoutes = require("./routes/mockInterviewRoutes")
const savedJobRoutes = require("./routes/savedJobRoutes")
const jobRoutes = require("./routes/jobRoutes")
const aiRoutes = require("./routes/aiRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/uploads", express.static("uploads"))

app.get("/", (req, res) => {
  res.send("SmartHire Backend Running 🚀")
})

app.use("/api", authRoutes)
app.use("/api", resumeRoutes)
app.use("/api", reportRoutes)
app.use("/api", recruiterRoutes)
app.use("/api", mockInterviewRoutes)
app.use("/api", savedJobRoutes)
app.use("/api", jobRoutes)
app.use("/api/ai", aiRoutes)
app.use("/api/applications", applicationRoutes);
app.use("/api/candidates", candidateRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅")

    app.listen(5000, () => {
      console.log("Server Started 🚀")
    })
  })
  .catch((err) => {
    console.log("MongoDB Error ❌")
    console.log(err.message)
  })

const Candidate = require("./models/Candidate");

Candidate.find()
.then(data => {
    console.log("Candidates in DB:", data);
});