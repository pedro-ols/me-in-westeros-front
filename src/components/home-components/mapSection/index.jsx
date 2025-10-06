import styles from "./mapSection.module.css";

export default function MapSection({ castles }) {
  return (
    <section className={styles.mapSection}>
      <h2 className={styles.mapTitle}>Explore os Sete Reinos</h2>
      <div className={styles.mapContent}>
          <p className={styles.mapDescription}>
            Navegue pelo mapa interativo de Westeros e descubra os castelos mais importantes
            dos Sete Reinos. Clique em cada fortaleza para conhecer sua história,
            os senhores que a governam e os segredos que guardam.
          </p>
        <div className={styles.mapContainer}>
          <img src="/images/mapa-westeros.png" alt="Mapa de Westeros" className={styles.mapImage} />
          {castles.map((castle) => (
            <a
              key={castle.name}
              href={`/castles/${castle.id}`}
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
      </div>
    </section>
  );
}