import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [dark, setDark] = useState(true);

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
    <Projects dark={dark} />
    <About dark={dark} />
    <Footer />
  </div>
);
};