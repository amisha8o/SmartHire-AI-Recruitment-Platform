import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import Dashboard from "./pages/Dashboard"

import "./index.css"
import "./styles/dashboard.css"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const path = window.location.pathname

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <>
      {
        path === "/dashboard"
          ? <Dashboard />
          : <App />
      }

      <ToastContainer
        position="top-right"
        autoClose={2500}
      />

    </>

  </React.StrictMode>

)
