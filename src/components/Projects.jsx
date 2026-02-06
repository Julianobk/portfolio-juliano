import { Database, Calculator, Smartphone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from "react-icons/fa";
import android1 from "../assets/Android1.png";
import android2 from "../assets/Android2.png";
import android3 from "../assets/Android3.png";
import d31 from "../assets/d31.png";
import d32 from "../assets/d32.png";
import d33 from "../assets/d33.png";
import fiven1 from "../assets/fiven1.png";
import fiven2 from "../assets/fiven2.png";
import fiven3 from "../assets/fiven3.png";
import fiven4 from "../assets/fiven4.png";
import fiven5 from "../assets/fiven5.png"; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects({ dark }) {
  // Função para renderizar o carrossel estático (sem autoplay)
  const renderCarousel = (images) => (
    <Swiper
    className={dark ? "swiper-dark" : "swiper-light"}
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={false} 
      loop={false}
      style={styles.imagePlaceholder}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i} style={{ overflow: 'hidden' }}>
          <motion.img 
            src={img} 
            alt={`Slide ${i}`} 
            style={styles.cardImage}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section style={styles.section} className="reveal">
      <h2 className="projects-main-title">Projetos</h2>

      <div style={styles.grid}>
        {/* Card 1: Feitos para Nutrir */}
        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 200 }}
          style={{ ...styles.card, background: dark ? styles.darkCard : styles.lightCard }}>
          {renderCarousel([fiven1, fiven2, fiven3, fiven4, fiven5])}
          <div style={styles.headerTitle}>
            <Database size={24} color="#60a5fa" />
            <h3>FIVEN - Feitos Para Nutrir</h3>
          </div>
          <p>FIVEN – Feitos Para Nutrir é um sistema de gestão e banco de dados desenvolvido para centralizar e automatizar processos de controle de estoque, vendas e clientes. O projeto visa aumentar a eficiência operacional, reduzir erros manuais e apoiar a tomada de decisões estratégicas por meio de dados organizados, seguros e acessíveis.</p>
        <section className="technologies">
  <h2>Tecnologias Utilizadas</h2>
<br />
  <div className="tech-grid">
    <div className="tech-card">
      <FaJava size={42} style={{ color: "#f89820" }} />
      
    </div>

    <div className="tech-card">
      <FaHtml5 size={42} style={{ color: "#e34c26" }} />
      
    </div>

    <div className="tech-card">
      <FaCss3Alt size={42} style={{ color: "#264de4" }} />
      
    </div>

    <div className="tech-card">
      <FaJsSquare size={42} style={{ color: "#f0db4f" }} />
      
    </div>

    <div className="tech-card">
      <FaDatabase size={42} style={{ color: "#00758f" }} />
      
    </div>
  </div>
</section>


        </motion.div>

        {/* Card 2: Calculadora Jurídica */}
        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 200 }}
          style={{ ...styles.card, background: dark ? styles.darkCard : styles.lightCard }}>
          {renderCarousel(["/assets/calc-1.png", "/assets/calc-2.png", "/assets/calc-3.png"])}
          <div style={styles.headerTitle}>
            <Calculator size={24} color="#60a5fa" />
            <h3>Calculadora Jurídica</h3>
          </div>
          <p>Aplicação web para cálculos trabalhistas e jurídicos com foco em precisão absoluta.</p>
        </motion.div>

        {/* Card 3: Projeto Android (Agora com Carrossel) */}
        {/* Card 3: Projeto Android */}
<motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 200 }}
  style={{ ...styles.card, background: dark ? styles.darkCard : styles.lightCard }}>
  {renderCarousel([android1, android2, android3])}
  <div style={styles.headerTitle}>
    <Smartphone size={24} color="#60a5fa" />
    <h3>Projeto Android</h3>
  </div>
  <p>Meu primeiro site completo, focado na história e evolução do sistema Android.</p>
  <section className="technologies">
  <h2>Tecnologias Utilizadas</h2><br />

  <div className="tech-grid">
    
    <div className="tech-card">
      <FaHtml5 size={42} style={{ color: "#e34c26" }} />
      
    </div>

    <div className="tech-card">
      <FaCss3Alt size={42} style={{ color: "#264de4" }} />
      
    </div>  
    </div>

</section>
</motion.div>

        
        <motion.div 
  whileHover={{ y: -10 }} 
  transition={{ type: "spring", stiffness: 200 }}
  style={{ ...styles.card, background: dark ? styles.darkCard : styles.lightCard }}
>
  {renderCarousel([d33, d31, d32])}
  <div style={styles.headerTitle}>
    <Globe size={24} color="#60a5fa" />
    <h3>Página Institucional</h3>
  </div>
  <p>
    A vitrine digital oficial da minha empresa, focada em branding, 
    autoridade visual e conversão de leads.
  </p>
  <section className="technologies">
  <h2>Tecnologias Utilizadas</h2>
<br />
<div className="tech-grid">
    
    <div className="tech-card">
      <FaHtml5 size={42} style={{ color: "#e34c26" }} />
      
    </div>

    <div className="tech-card">
      <FaCss3Alt size={42} style={{ color: "#264de4" }} />
      
    </div>

    <div className="tech-card">
      <FaJsSquare size={42} style={{ color: "#f0db4f" }} />
      
    </div>    
    </div>
    </section>
</motion.div>
      </div>
      
    </section>
  );
}

const styles = {
  section: { maxWidth: "1200px", margin: "0 auto 100px", padding: "0 20px", textAlign: "center" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "35px", marginTop: "50px", textAlign: "left" },
  card: { padding: "30px", borderRadius: "28px", border: "1px solid rgba(255,255,255,0.1)", minHeight: "520px", display: "flex", flexDirection: "column", boxShadow: "0 15px 35px rgba(0,0,0,0.2)", overflow: 'hidden' },
  imagePlaceholder: { width: "100%", height: "280px", backgroundColor: "#0f172a", borderRadius: "18px", marginBottom: "20px", overflow: "hidden" },
  cardImage: { width: "100%", height: "100%", objectFit: "cover", cursor: 'pointer' },
  headerTitle: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" },
  darkCard: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  lightCard: "#ffffff",
};