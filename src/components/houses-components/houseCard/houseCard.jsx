import styles from "./houseCard.module.css";

import Link from "next/link";

export default function HouseCard({ house }) {
  return (
    <article className={styles.houseCard}>
      <div
        className={styles.houseBanner}
        style={{
          backgroundImage: `url(${house.bannerUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.bannerOverlay}>
          <Link href={`/houses/${house.name}`} className={styles.houseName}>
            Casa {house.name}
          </Link>
          <p className={styles.houseAnthem}>"{house.slogan}"</p>
        </div>
      </div>

      <div className={styles.houseInfo}>
        <div className={styles.houseDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Reino:</span>
            <span className={styles.detailValue}>{house.realm}</span>
          </div>
        </div>

        <p className={styles.houseDescription}>{house.history}</p>
      </div>
    </article>
  );
}
