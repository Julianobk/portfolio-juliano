import { Database, Calculator, Smartphone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects({ dark }) {
  // Função para renderizar o carrossel estático
  const renderCarousel = (images) => (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      // Configurações para garantir que nada se mova sozinho
      autoplay={false} 
      loop={false}
      allowTouchMove={true} // Permite que o usuário arraste se quiser
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
        {/* Feitos para Nutrir */}
        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 200 }}
          style={{ ...styles.card, background: dark ? styles.darkCard : styles.lightCard }}>
          {renderCarousel(["/assets/nutrir-1.png", "/assets/nutrir-2.png", "/assets/nutrir-3.png"])}
          <div style={styles.headerTitle}>
            <Database size={24} color="#60a5fa" />
            <h3>Feitos para Nutrir</h3>
          </div>
          <p>Sistema de banco de dados para controle de estoque, vendas e atendimento.</p>
        </motion.div>

        {/* Calculadora Jurídica */}
        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 200 }}
          style={{ ...styles.card, background: dark ? styles.darkCard : styles.lightCard }}>
          {renderCarousel(["/assets/calc-1.png", "/assets/calc-2.png", "/assets/calc-3.png"])}
          <div style={styles.headerTitle}>
            <Calculator size={24} color="#60a5fa" />
            <h3>Calculadora Jurídica</h3>
          </div>
          <p>Aplicação web para cálculos trabalhistas e jurídicos com foco em precisão absoluta.</p>
        </motion.div>

        {/* Projeto Android */}
        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 200 }}
          style={{ ...styles.card, background: dark ? styles.darkCard : styles.lightCard }}>
          <div style={{ ...styles.imagePlaceholder, overflow: 'hidden' }}>
            <motion.img 
               whileHover={{ scale: 1.05 }} 
               transition={{ duration: 0.4 }}
               src="/assets/android.png" 
               style={styles.cardImage} 
               alt="Android" 
            />
          </div>
          <div style={styles.headerTitle}>
            <Smartphone size={24} color="#60a5fa" />
            <h3>Projeto Android</h3>
          </div>
          <p>Meu primeiro site completo, focado na história e evolução do sistema Android.</p>
        </motion.div>

        {/* Página Institucional */}
        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 200 }}
          style={{ ...styles.card, background: dark ? styles.darkCard : styles.lightCard }}>
          {renderCarousel(["/assets/empresa-1.png", "/assets/empresa-2.png", "/assets/empresa-3.png"])}
          <div style={styles.headerTitle}>
            <Globe size={24} color="#60a5fa" />
            <h3>Página Institucional</h3>
          </div>
          <p>A vitrine digital oficial da minha empresa, focada em branding e conversão.</p>
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