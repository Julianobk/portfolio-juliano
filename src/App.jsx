import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";

// Componente Interno para o Fundo Interativo
const InteractiveBackground = ({ dark }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-container">
      {/* Brilho que segue o mouse */}
      <motion.div 
        className="mouse-follower"
        animate={{ x: mousePos.x - 150, y: mousePos.y - 150 }}
        transition={{ type: "spring", damping: 30, stiffness: 200, restDelta: 0.001 }}
        style={{
          background: dark 
            ? "radial-gradient(circle, rgba(96,165,250,0.15) 0%, rgba(0,0,0,0) 70%)"
            : "radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(255,255,255,0) 70%)"
        }}
      />

      {/* Blobs flutuantes autônomos */}
      <motion.div
        animate={{ x: [0, 100, -50, 0], y: [0, 50, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="blob blob-1"
        style={{ background: dark ? "rgba(37,99,235,0.12)" : "rgba(37,99,235,0.05)" }}
      />
      <motion.div
        animate={{ x: [0, -80, 40, 0], y: [0, 120, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="blob blob-2"
        style={{ background: dark ? "rgba(96,165,250,0.08)" : "rgba(96,165,250,0.04)" }}
      />
    </div>
  );
};

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`app-container ${dark ? "dark-theme" : "light-theme"}`}
      style={{
        minHeight: "100vh",
        background: dark
          ? "#020617" 
          : "#f8fafc",
        color: dark ? "#ffffff" : "#0f172a",
        transition: "0.4s ease",
        position: "relative",
        overflowX: "hidden"
      }}
    >
      <InteractiveBackground dark={dark} />
      
      <Header dark={dark} toggleTheme={() => setDark(!dark)} />
      
      <main style={{ position: "relative", z_index: 10 }}>
        <div className="reveal"><Hero dark={dark} /></div>
        <div className="reveal"><About /></div> 
        <div className="reveal"><Projects dark={dark} /></div>
      </main>

      <Footer />
    </div>
  );
}