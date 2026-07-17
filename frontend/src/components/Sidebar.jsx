function Sidebar({
  tab,
  setTab,
  saved,
  applied,
  logout
}) {

  const menus = [
    { name: "Dashboard", icon: "🏠" },
    { name: "Profile", icon: "👤" },
    { name: "Resume", icon: "📄" },
    { name: "Jobs", icon: "💼" },
    { name: "Analytics", icon: "📊" }
  ]

  return (

    <div style={styles.sidebar}>

      <div>

        <h1 style={styles.logo}>
          SmartHire 🚀
        </h1>

        <p style={styles.subtitle}>
          AI Powered Hiring Platform
        </p>

        <div style={styles.menu}>

          {
            menus.map((item) => (

              <div
                key={item.name}
                style={
                  tab === item.name
                    ? styles.active
                    : styles.item
                }
                onClick={() => setTab(item.name)}
              >

                <span style={styles.icon}>
                  {item.icon}
                </span>

                {item.name}

              </div>

            ))
          }

        </div>

      </div>

      <div>

        <div style={styles.infoCard}>
         <p
         onClick={()=>{
         localStorage.setItem("page","saved")
        window.location.reload()
        }}
        style={{
        cursor:"pointer"
        }}
        >
       ❤️ Saved Jobs
       </p>



          <h2>
            {saved}
          </h2>

        </div>

        <div style={styles.infoCard}>

          <p>
            💼 Applied Jobs
          </p>

          <h2>
            {applied}
          </h2>

        </div>

        <button
          style={styles.logout}
          onClick={logout}
        >

          Logout

        </button>

      </div>

    </div>

  )

}

const styles = {

  sidebar: {
    width: "270px",
    minHeight: "100vh",
    background: "#081327",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRight: "1px solid #1d3557",
    boxShadow: "5px 0 20px rgba(0,0,0,.2)"
  },

  logo: {
    margin: 0,
    color: "white",
    fontSize: "30px",
    fontWeight: "bold"
  },

  subtitle: {
    color: "#94a3b8",
    marginTop: "8px",
    marginBottom: "35px"
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px",
    borderRadius: "14px",
    cursor: "pointer",
    background: "#13244d",
    transition: ".3s"
  },

  active: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px",
    borderRadius: "14px",
    cursor: "pointer",
    background: "linear-gradient(90deg,#5b4bff,#3b82f6)",
    fontWeight: "bold",
    boxShadow: "0 8px 20px rgba(91,75,255,.4)"
  },

  icon: {
    fontSize: "20px"
  },

  infoCard: {
    background: "#13244d",
    borderRadius: "15px",
    padding: "18px",
    marginBottom: "15px",
    textAlign: "center"
  },

  logout: {
    width: "100%",
    padding: "15px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px"
  }

}

export default Sidebar