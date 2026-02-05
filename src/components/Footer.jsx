import React, { useState } from 'react';

const SocialLink = ({ href, label, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    textDecoration: "none",
    color: isHovered ? hoverColor : "inherit",
    fontSize: "0.9rem",
    opacity: isHovered ? 1 : 0.6,
    // Mudança: curva de transição suave e inclusão do transform
    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    fontWeight: "400",
    display: "inline-block", // Necessário para o transform funcionar
    transform: isHovered ? "translateY(-3px)" : "translateY(0)",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={linkStyle}
    >
      {label}
    </a>
  );
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.socialContainer}>
        <SocialLink href="https://github.com/SEU_USUARIO" label="GitHub" hoverColor="#a331fb" />
        <SocialLink href="https://linkedin.com/in/SEU_USUARIO" label="LinkedIn" hoverColor="#0077b5" />
        <SocialLink href="mailto:seu-email@gmail.com" label="Gmail" hoverColor="#ffcc00" />
        <SocialLink href="https://instagram.com/SEU_USUARIO" label="Instagram" hoverColor="#e1306c" />
      </div>
      <p style={styles.copy}>© {new Date().getFullYear()} Juliano</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
  socialContainer: {
    display: "flex",
    gap: "30px", // Aumentei o espaço para o hover não embolar
  },
  copy: {
    fontSize: "0.8rem",
    opacity: 0.4,
    marginTop: "10px",
  },
};