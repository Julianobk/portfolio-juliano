import { useState } from "react";
import profile from "../assets/profile.jpg";

export default function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="about">
      <div
        className={`about-card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Frente do Card */}
        <div className="card-face card-front">
          <div className="card-header">
            <h2>Sobre mim</h2>
          </div>
          
          <div className="card-body">
            <p>
              Minha jornada na tecnologia começou com uma curiosidade simples: como as coisas funcionam por baixo dos panos? Hoje, como estudante de Sistemas de Informação, transformei essa curiosidade em foco. Não vejo apenas linhas de código, vejo ferramentas para resolver problemas reais e facilitar a vida das pessoas.
            </p>
            <p>
              Acredito que a tecnologia deve ser poderosa, mas também simples. Por isso, busco o equilíbrio entre uma lógica matemática sólida e uma interface que faça sentido para quem a usa. Quando não estou programando, estou provavelmente explorando novas automações ou estudando como tornar meus projetos mais eficientes e escaláveis.
            </p>
          </div>

          <div className="card-footer">
            <span className="flip-hint">Clique para saber mais →</span>
          </div>
        </div>

        {/* Verso do Card */}
        {/* Verso do Card */}
<div className="card-face card-back">
  <div className="card-header-back">
    <img src={profile} alt="Juliano BK" className="profile-img-small" />
    <div className="header-text">
      <h3>Juliano Kaumo</h3>
      <p className="location">📍 São Paulo, Brasil</p>
    </div>
  </div>

  <div className="card-body">
    <ul className="skills-list">
      <li><span>🚀</span> <strong>Full-Stack:</strong> Arquiteturas com HTML, CSS, JavaScript, Java.</li>
      <li><span>📊</span> <strong>Dados:</strong> Modelagem SQL, banco de dados relacional, Excel e Power BI.</li>
      <li><span>⚙️</span> <strong>IA: </strong> Trabalhei com machine learning e qualidade de dados para IA.</li>
      <li><span>🧠</span> <strong>Engenharia:</strong> Projetos realizados com o intuito de resolver necessidades reais.</li>
    </ul>
    
    <p1 className="about-extra">
  "Atualmente focado no aprimoramento de arquiteturas full-stack e no estudo de novas tecnologias de dados."
</p1>
  </div>

  <div className="card-footer">
    <span className="flip-hint">← Voltar</span>
  </div>
</div>
      </div>
    </section>
  );
}