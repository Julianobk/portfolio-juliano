import { motion } from "framer-motion";

export default function InteractiveBackground({ dark }) {
  return (
    <div style={styles.container}>
      {/* Círculo de Luz 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          ...styles.blob,
          background: dark ? "rgba(37, 99, 235, 0.15)" : "rgba(37, 99, 235, 0.05)",
          top: "10%",
          left: "20%",
        }}
      />
      {/* Círculo de Luz 2 */}
      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 150, -80, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          ...styles.blob,
          background: dark ? "rgba(96, 165, 250, 0.1)" : "rgba(96, 165, 250, 0.04)",
          bottom: "20%",
          right: "15%",
          width: "500px",
          height: "500px",
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // Fica atrás de tudo
    overflow: "hidden",
    pointerEvents: "none", // Não atrapalha cliques nos botões
  },
  blob: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    filter: "blur(80px)", // Cria o efeito de "brilho suave"
  },
};