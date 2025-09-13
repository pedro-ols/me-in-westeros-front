import styles from "./page.module.css";
import MapSection from "../components/home-components/mapSection";


const castles = [
  { name: "Winterfell", x: 47, y: 22, emoji: "🐺" },
  { name: "Porto Real", x: 58, y: 60, emoji: "👑" },
  { name: "Ponta tempestade", x: 67, y: 68.6, emoji: "🦌" },
];

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Bem-vindo a Westeros</h1>
          <p className={styles.heroDescription}>
            Explore os Sete Reinos através dos olhos de quem viveu as batalhas, 
            intrigas e histórias que moldaram este mundo épico.
          </p>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/throne-room-wallpaper.png" alt="Sala do trono de Westeros" className={styles.heroImg} />
        </div>
      </section>

      {/* Map Section */}
      <MapSection castles={castles} />

    <section className={styles.timelineSection}>
        <h2 className={styles.timelineTitle}>Momentos Épicos</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>❄️</div>
            <div className={styles.timelineContent}>
              <h3>A Longa Noite</h3>
              <p>Os Caminhantes Brancos ameaçam toda a humanidade</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>⚔️</div>
            <div className={styles.timelineContent}>
              <h3>A Conquista de Aegon</h3>
              <p>Aegon, o Conquistador, unifica os Sete Reinos com fogo e sangue</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>🐺</div>
            <div className={styles.timelineContent}>
              <h3>A Rebelião de Robert</h3>
              <p>O fim da dinastia Targaryen e início de uma nova era</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>🐉</div>
            <div className={styles.timelineContent}>
              <h3>O Retorno dos Dragões</h3>
              <p>Daenerys desperta as criaturas mágicas após séculos</p>
            </div>
          </div>
        </div>
      </section>
      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <blockquote className={styles.quote}>
          "Quando você joga o jogo dos tronos, você vence ou você morre. Não há meio termo."
        </blockquote>
        <cite className={styles.quoteAuthor}>— Cersei Lannister</cite>
      </section>
    </main>
  );
}
