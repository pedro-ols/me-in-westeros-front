import styles from "./characterCard.module.css";
import Link from "next/link";

export default function CharacterCard({ character, houses }) {
  const characterHouse = houses.find((house) => house.id === character.houseId);

  return (
    <article className={styles.characterCard} key={character.id}>
      <div
        className={styles.characterBanner}
        style={{
          backgroundImage: `url(${character.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.bannerOverlay}>
          <Link
            href={`/pages/characters/${character.id}`}
            className={styles.characterName}
          >
            {character.name}
          </Link>
        </div>
      </div>
      <div className={styles.characterInfo}>
        <div className={styles.detailItem}>
          <p className={styles.detailLabel}>Casa:</p>
          <p className={styles.detailValue}>
            {characterHouse ? characterHouse.name : "Casa Desconhecida"}
          </p>
        </div>
        {character.titles && character.titles.length > 0 && (
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Título:</p>
            <p className={styles.detailValue}>{character.titles[0].name}</p>
          </div>
        )}
      </div>
    </article>
  );
}