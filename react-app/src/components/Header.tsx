import React from "react"
import { useAuth } from "react-oidc-context"

const Header: React.FC = () => {
  // const [username, setUsername] = useState<string | null>(null);
  const auth = useAuth()

  const signOutRedirect = () => {
    const clientId = "6rtm3untp0m1geb9cuva1m94t0"
    const logoutUri = "https://camislab.com/"
    const cognitoDomain = "https://us-east-1irrs98eac.auth.us-east-1.amazoncognito.com"
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`
  }

  if (auth.isLoading) {
    return <div>Loading...</div>
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>
  }

  const isLoggedIn = auth.isAuthenticated;
  const username = auth.user?.profile.email;

  const handleLogin = () => {
    auth.signinRedirect()
    // setUsername("john.doe@example.com")
  };

  const handleLogout = () => {
    // setUsername(null)
    signOutRedirect()
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Cami's Lab</div>
      <div style={styles.userSection}>
        <span style={styles.username}>{isLoggedIn ? username : "Guest"}</span>
        {!isLoggedIn ? (
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>
        ) : (
          <button onClick={handleLogout} style={styles.button}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "#1f2937",
    color: "white",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  userSection: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  username: {
    fontWeight: 500,
  },
  button: {
    padding: "0.5rem 1rem",
    border: "none",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
  },
};

export default Header
