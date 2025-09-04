import styles from "./page.module.css";

import Header from "../components/header";

const castles = [
  { name: "Winterfell", href: "/castles/winterfell", x: 47, y: 22 },
  { name: "Porto Real", href: "/castles/porto-real", x: 58, y: 60 },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
        <section className={styles.mapSection}>
          <h2 className={styles.mapTitle}>Mapa de Westeros</h2>
          <div className={styles.mapContainer}>
            <img src="/images/mapa-westeros.png" alt=""  className={styles.mapImage}/>
            {castles.map((castle) => (
            <a
              key={castle.name}
              href={castle.href}
              className={styles.castleHotspot}
              style={{
                left: `${castle.x}%`,
                top: `${castle.y}%`,
              }}
              title={castle.name}
            >
              🏰
            </a>
          ))}
          </div>
        </section>
    </main>
  );
}
