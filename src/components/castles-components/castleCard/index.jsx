import styles from "./castleCard.module.css";
import Link from "next/link";

export default function CastleCard({ castle, houses }) {
  const castleHouse = houses.find((house) => house.id === castle.houseId);

  return (
    <article className={styles.castleCard} key={castle.id}>
      <div
        className={styles.castleBanner}
        style={{
          backgroundImage: `url(${castle.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.bannerOverlay}>
          <Link
            href={`/pages/castles/${castle.id}`}
            className={styles.castleName}
          >
            {castle.name}
          </Link>
        </div>
      </div>
      <div className={styles.castleInfo}>
        <div className={styles.detailItem}>
          <p className={styles.detailLabel}>Casa:</p>
          <p className={styles.detailValue}>
            {castleHouse ? castleHouse.name : "Casa Desconhecida"}
          </p>
        </div>
        {castle.titles && castle.titles.length > 0 && (
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Título:</p>
            <p className={styles.detailValue}>{castle.titles[0].name}</p>
          </div>
        )}
      </div>
    </article>
  );
}