import styles from "./heroSection.module.css"

export default function HeroSection() {
  return (
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
  )
}
