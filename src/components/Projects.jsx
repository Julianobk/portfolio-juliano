import { Database, Calculator } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects({ dark }) {
  return (
    <section style={styles.section}>
      <h2>Projetos</h2>

      <div style={styles.grid}>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{
            ...styles.card,
            background: dark ? styles.darkCard : styles.lightCard,
          }}
        >
          <Database size={28} style={{ marginBottom: "12px" }} />
          <h3>Feitos para Nutrir</h3>
          <p>
            Sistema de banco de dados para controle de estoque, vendas e
            atendimento.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{
            ...styles.card,
            background: dark ? styles.darkCard : styles.lightCard,
          }}
        >
          <Calculator size={28} style={{ marginBottom: "12px" }} />
          <h3>Calculadora Jurídica</h3>
          <p>
            Aplicação web para cálculos trabalhistas e jurídicos com foco em
            precisão.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    maxWidth: "1100px",
    margin: "0 auto 100px",
    padding: "0 20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginTop: "40px",
  },
  card: {
    padding: "28px",
    borderRadius: "16px",
    border: "1px solid rgba(0,0,0,0.08)",
  },
  darkCard:
    "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  lightCard: "#ffffff",
};
