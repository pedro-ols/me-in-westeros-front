import styles from './houseCard.module.css'

import Link from 'next/link'

export default function HouseCard({ house }) {
    return (
        <article 
            className={styles.houseCard} 
            key={house.id}
          >
            <div className={styles.houseBanner}>
              <div className={styles.bannerOverlay}>
                <Link href={`/houses/${house.id}`} className={styles.houseName}>House {house.name}</Link>
                <p className={styles.houseAnthem}>"{house.anthem}"</p>
              </div>
            </div>
            
            <div className={styles.houseInfo}>
              <div className={styles.houseDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Reino:</span>
                  <span className={styles.detailValue}>{house.realm}</span>
                </div>
                
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Sede:</span>
                  <span className={styles.detailValue}>{house.castle.name}</span>
                </div>
              </div>
              
              <p className={styles.houseDescription}>{house.history}</p>
              
              <button className={styles.learnMoreBtn}>
                Saber Mais
              </button>
            </div>
          </article>
    )
}