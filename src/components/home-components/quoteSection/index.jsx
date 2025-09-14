import styles from "./quoteSection.module.css";

export default function QuoteSection() {
  return (
    <div className={styles.quoteSection}>
      <blockquote className={styles.quote}>
        "Quando você joga o jogo dos tronos, você vence ou você morre. Não há meio termo."
      </blockquote>
      <cite className={styles.quoteAuthor}>— Cersei Lannister</cite>
    </div>
  )
}
