import { Github, Linkedin } from "lucide-react";

export default function About({ dark }) {
  return (
    <section style={styles.section}>
      <h2>Sobre mim</h2>

      <p style={{ color: dark ? "#cbd5f5" : "#334155" }}>
        Estudante de Sistemas de Informação com foco em desenvolvimento de
        aplicações eficientes, bem estruturadas e com impacto real.
      </p>

      <div style={styles.actions}>
        <a
          href="https://github.com/"
          target="_blank"
          style={{
            ...styles.button,
            background: dark ? "#38bdf8" : "#2563eb",
            color: "#020617",
          }}
        >
          <Github size={18} /> GitHub
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          style={{
            ...styles.button,
            background: "transparent",
            color: dark ? "#38bdf8" : "#2563eb",
            border: `1px solid ${dark ? "#38bdf8" : "#2563eb"}`,
          }}
        >
          <Linkedin size={18} /> LinkedIn
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    maxWidth: "800px",
    margin: "0 auto 120px",
    padding: "0 20px",
    textAlign: "center",
  },
  actions: {
    marginTop: "30px",
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    padding: "12px 22px",
    borderRadius: "10px",
    fontWeight: "bold",
    textDecoration: "none",
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },
};
