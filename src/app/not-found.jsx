import styles from './not-found.module.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconSection}>
          <span className={styles.dragonIcon}>👑</span>
          <h1 className={styles.errorCode}>404</h1>
        </div>
        
        <div className={styles.textSection}>
          <h2 className={styles.title}>Página Perdida nos Sete Reinos</h2>
          <p className={styles.description}>
            Parece que você se perdeu nas terras selvagens além da Muralha. 
            A página que procura não existe ou foi consumida pelo fogo dos dragões.
          </p>
          
          <div className={styles.suggestions}>
            <h3 className={styles.suggestionsTitle}>Onde gostaria de ir?</h3>
            <div className={styles.linkGrid}>
              <Link href="/" className={styles.actionLink}>
                <span className={styles.linkIcon}>🏠</span>
                Voltar para Home
              </Link>
              <Link href="/pages/characters" className={styles.actionLink}>
                <span className={styles.linkIcon}>⚔️</span>
                Personagens
              </Link>
              <Link href="/pages/houses" className={styles.actionLink}>
                <span className={styles.linkIcon}>🏰</span>
                Casas Nobres
              </Link>
              <Link href="/paegs/castles" className={styles.actionLink}>
                <span className={styles.linkIcon}>🏯</span>
                Castelos
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.quote}>
        <blockquote className={styles.quoteText}>
          "O que está morto jamais morre, mas renasce mais forte e mais difícil."
        </blockquote>
        <cite className={styles.quoteAuthor}>— Lema dos Homens de Ferro</cite>
      </div>
    </div>
  );
}