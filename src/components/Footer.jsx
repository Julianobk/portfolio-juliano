export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Juliano</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "30px 0",
    opacity: 0.6,
  },
};
