import { Sun, Moon } from "lucide-react";

export default function Header({ dark, toggleTheme }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backdropFilter: "blur(10px)",
        background: dark
          ? "rgba(2,6,23,0.6)"
          : "rgba(255,255,255,0.7)",
        borderBottom: dark
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(15,23,42,0.1)",
        zIndex: 10,
      }}
    >
      <div style={styles.header}>
        <h2 style={styles.logo}>Juliano.dev</h2>

        <button
          onClick={toggleTheme}
          style={{
            ...styles.button,
            color: dark ? "#facc15" : "#0f172a",
          }}
        >
          {dark ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};
