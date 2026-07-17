import SavedJobs from "./pages/SavedJobs"
import RecruiterLogin from "./pages/RecruiterLogin"
import { useState } from "react"
import axios from "axios"

import Dashboard from "./pages/Dashboard"
import RecruiterDashboard from "./pages/RecruiterDashboard"

function App() {

  const [isLogin, setIsLogin] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {

    try {

      const url = isLogin
        ? "http://localhost:5000/api/login"
        : "http://localhost:5000/api/register"

      const body = isLogin
        ? { email, password }
        : { name, email, password }

      const res = await axios.post(url, body)

      if (res.data.token) {

        localStorage.setItem("token", res.data.token)

        if (res.data.user) {
          localStorage.setItem("name", res.data.user.name)
          localStorage.setItem("email", res.data.user.email)
        } else {
          localStorage.setItem("name", name)
          localStorage.setItem("email", email)
        }

        // Temporary Role Setup
        if (
          email === "recruiter@gmail.com"
        ) {
          localStorage.setItem(
            "role",
            "recruiter"
          )
        } else {
          localStorage.setItem(
            "role",
            "candidate"
          )
        }

        window.location.reload()

      }

      alert(res.data.message)

    } catch (error) {

      alert(
        error?.response?.data?.message ||
        "API Error"
      )

    }

  }

if (localStorage.getItem("token")) {

  const role = localStorage.getItem("role")

  if (role === "recruiter") {
    return <RecruiterDashboard />
  }

 

  return <Dashboard />

}

return (

  <div style={styles.container}>

    <div style={styles.card}>

      <h1 style={styles.logo}>
        SmartHire 🚀
      </h1>

      <h2>
        {isLogin ? "Login" : "Create Account"}
      </h2>

      {!isLogin && (

        <input
          style={styles.input}
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

      )}

      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        style={styles.button}
        onClick={handleSubmit}
      >
        {isLogin ? "Login" : "Register"}
      </button>

      <p
        style={styles.link}
        onClick={() => setIsLogin(!isLogin)}
      >
        {
          isLogin
            ? "Create New Account"
            : "Already have an account? Login"
        }
      </p>

      <button
        style={styles.recruiterButton}
        onClick={() => {

          localStorage.setItem("role", "recruiter")
          localStorage.setItem("token", "demo")

          window.location.reload()

        }}
      >
        👨‍💼 Recruiter Demo
      </button>

    </div>

  </div>

)

}

const styles = {

  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#071028,#132b55)"
  },

  card: {
    width: "400px",
    background: "#122248",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,.4)",
    textAlign: "center",
    color: "white"
  },

  logo: {
    marginBottom: "15px"
  },

  input: {
    width: "100%",
    padding: "14px",
    marginTop: "15px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    fontSize: "15px"
  },

  button: {
    width: "100%",
    padding: "14px",
    marginTop: "20px",
    background: "#5b4bff",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  },

  recruiterButton: {
    width: "100%",
    padding: "14px",
    marginTop: "15px",
    
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  },

  link: {
    marginTop: "20px",
    cursor: "pointer",
    color: "#60a5fa"
  }

}

export default App