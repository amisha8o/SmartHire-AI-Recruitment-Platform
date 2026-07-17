function Navbar({ username }) {

  const today = new Date()

  const date = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  const hour = today.getHours()

  let greeting = "Good Evening"

  if (hour < 12) {
    greeting = "Good Morning"
  }
  else if (hour < 17) {
    greeting = "Good Afternoon"
  }

  return (

    <div style={styles.navbar}>

      <div>

        <h1 style={styles.title}>
          {greeting}, {username} 👋
        </h1>

        <p style={styles.subtitle}>
          Welcome to your AI Powered Recruitment Dashboard
        </p>

      </div>

      <div style={styles.right}>

        <div style={styles.notification}>
          🔔
          <span style={styles.badge}>3</span>
        </div>

        <div style={styles.dateCard}>

          <p style={styles.label}>
            Today
          </p>

          <h3 style={{margin:"5px 0"}}>
            {date}
          </h3>

        </div>

        <div style={styles.avatar}>
          {username.charAt(0).toUpperCase()}
        </div>

      </div>

    </div>

  )

}

const styles = {

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px"
  },

  title: {
    margin: 0,
    fontSize: "34px",
    color: "white",
    fontWeight: "700"
  },

  subtitle: {
    marginTop: "8px",
    color: "#94a3b8",
    fontSize: "16px"
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "18px"
  },

  notification: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    background: "#13244d",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    position: "relative",
    cursor: "pointer"
  },

  badge: {
    position: "absolute",
    top: "-2px",
    right: "-2px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "#ef4444",
    color: "white",
    fontSize: "11px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },

  dateCard: {
    background: "#13244d",
    padding: "14px 20px",
    borderRadius: "14px",
    textAlign: "center",
    minWidth: "200px",
    boxShadow: "0 8px 25px rgba(0,0,0,.2)"
  },

  label: {
    margin: 0,
    color: "#94a3b8",
    fontSize: "12px"
  },

  avatar: {
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#5b4bff,#3b82f6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0 8px 20px rgba(91,75,255,.4)"
  }

}

export default Navbar