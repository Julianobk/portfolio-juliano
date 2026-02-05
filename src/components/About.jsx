import { useState } from "react";
import profile from "../assets/profile.jpg"; // coloque sua foto aqui depois

export default function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="about">
      <div
        className={`about-card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Frente */}
        <div className="card-face card-front">
          <h2>Sobre mim</h2>

          <p>
            Sou estudante de Sistemas de Informação, com formação técnica em
            Informática e forte base em lógica e matemática. Gosto de transformar
            problemas complexos em soluções simples e eficientes.
          </p>

          <p>
            Tenho experiência com desenvolvimento web, banco de dados e
            modelagem de sistemas, sempre buscando código limpo, clareza e boa
            performance.
          </p>

          <span className="flip-hint">Clique para saber mais →</span>
        </div>

        {/* Verso */}
        <div className="card-face card-back">
          <img src={profile} alt="Foto de Juliano" />

          <h3>Juliano BK</h3>

          <ul>
            <li>🧠 Pensamento lógico e analítico</li>
            <li>🤝 Boa comunicação e trabalho em equipe</li>
            <li>🚀 Proatividade e aprendizado rápido</li>
            <li>🎯 Foco em solução de problemas</li>
          </ul>

          <p className="about-extra">
            Busco oportunidades para crescer profissionalmente e contribuir
            com projetos que gerem impacto real.
          </p>

          <span className="flip-hint">← Voltar</span>
        </div>
      </div>
    </section>
  );
}
