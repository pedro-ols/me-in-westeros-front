import styles from './bookCard.module.css'

import Link from 'next/link'

export default function BookCard({ book }) {

    return (
        <article 
            className={styles.bookCard} 
            key={book.id}
          >
            <div className={styles.bookBanner} style={{ backgroundImage: `url(${book.coverUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className={styles.bannerOverlay}>
                <Link href={`/pages/books/${book.volume}`} className={styles.bookName}>{book.title}</Link>
                <p className={styles.bookAnthem}>Vol. {book.volume}</p>
              </div>
            </div>
            
            <div className={styles.bookInfo}>
              <div className={styles.bookDetails}>
                <div className={styles.detailItem}>
                  <h3 className={styles.detailLabel}>Ano:</h3>
                  <p className={styles.detailValue}>{book.releaseYear}</p>
                </div>
                
                <div className={styles.detailItem}>
                  <h3 className={styles.detailLabel}>Nota:</h3>
                  <p className={styles.detailValue}>{book.rating}</p>
                </div>
              </div>
              
              {book.synopsis && book.synopsis.split(' ').length > 50 ? (
                  <p className={styles.bookDescription}>{book.synopsis.split(' ').slice(0, 50).join(' ')}...</p>
              ) : (
                  <p className={styles.bookDescription}>sinopse falsa</p>
              )}
            </div>
          </article>
    )
}