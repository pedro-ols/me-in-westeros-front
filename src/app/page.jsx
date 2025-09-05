import styles from "./page.module.css";

import Header from "../components/header";

const castles = [
  { name: "Winterfell", x: 47, y: 22, emoji: "🐺" },
  { name: "Porto Real", x: 58, y: 60, emoji: "👑" },
  { name: "Ponta tempestade", x: 67, y: 68.6, emoji: "🦌" },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
        <section className={styles.mapSection}>
          <h2 className={styles.mapTitle}>Mapa de Westeros</h2>
          <div className={styles.mapContainer}>
            <img src="/images/mapa-westeros.png" alt="Mapa de Westeros"  className={styles.mapImage}/>
            {castles.map((castle) => (
            <a
              key={castle.name}
              href={`/castles/${castle.name}`}
              className={styles.castleHotspot}
              style={{
                left: `${castle.x}%`,
                top: `${castle.y}%`,
              }}
              title={castle.name}
            >
              {castle.emoji}
            </a>
          ))}
          </div>
        </section>
    </main>
  );
}
