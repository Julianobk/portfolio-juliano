export default function Hero({ dark }) {
  return (
    <section style={styles.hero}>
      <h1>
        Soluções digitais{" "}
        <span style={{ color: dark ? "#38bdf8" : "#2563eb" }}>
          claras
        </span>{" "}
        e{" "}
        <span style={{ color: dark ? "#22d3ee" : "#1e40af" }}>
          eficientes
        </span>
      </h1>

      <p style={{ color: dark ? "#cbd5f5" : "#334155" }}>
        Portfólio focado em aplicações práticas, sistemas inteligentes e
        projetos com impacto real.
      </p>
    </section>
  );
}

const styles = {
  hero: {
    maxWidth: "800px",
    margin: "120px auto 100px",
    textAlign: "center",
    padding: "0 20px",
  },
};
