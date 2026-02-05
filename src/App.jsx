import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";

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
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []); 
  
  return (
  <div
    style={{
      minHeight: "100vh",
      background: dark
        ? "linear-gradient(135deg, #020617, #0f172a)"
        : "linear-gradient(135deg, #f8fafc, #e2e8f0)",
      color: dark ? "#ffffff" : "#0f172a",
      transition: "0.4s",
    }}
  >
    <Header dark={dark} toggleTheme={() => setDark(!dark)} />
    <Hero dark={dark} />
    <About dark={dark} />
    <Projects dark={dark} />
    <Footer />
  </div>
);
};