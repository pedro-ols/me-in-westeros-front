import styles from "./mapSection.module.css";

export default function MapSection({ castles }) {
    return (
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
    );
}