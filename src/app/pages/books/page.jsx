import styles from './books.module.css'

const books = [
  {
    id: 1,
    title: 'A Game of Thrones',
    originalTitle: 'A Song of Ice and Fire: Book One',
    author: 'George R.R. Martin',
    publishYear: 1996,
    pages: 694,
    coverUrl: '/covers/game-of-thrones.jpg',
    description: 'O primeiro livro da saga épica que introduz o mundo de Westeros. Seguimos as casas nobres em sua luta pelo Trono de Ferro, enquanto uma antiga ameaça desperta no Norte.',
    mainCharacters: ['Eddard Stark', 'Jon Snow', 'Daenerys Targaryen', 'Tyrion Lannister'],
    themes: ['Poder e Política', 'Honra vs Pragmatismo', 'Guerra e Consequências'],
    rating: 4.8,
    status: 'Publicado'
  },
  {
    id: 2,
    title: 'A Clash of Kings',
    originalTitle: 'A Song of Ice and Fire: Book Two',
    author: 'George R.R. Martin',
    publishYear: 1998,
    pages: 761,
    coverUrl: '/covers/clash-of-kings.jpg',
    description: 'Com a morte do Rei Robert, cinco reis reivindicam o trono. Enquanto o reino se despedaça em guerra civil, dragões renascem no Oriente e a Muralha enfrenta novas ameaças.',
    mainCharacters: ['Tyrion Lannister', 'Arya Stark', 'Jon Snow', 'Daenerys Targaryen'],
    themes: ['Guerra Civil', 'Magia Retornando', 'Lealdade e Traição'],
    rating: 4.7,
    status: 'Publicado'
  },
  {
    id: 3,
    title: 'A Storm of Swords',
    originalTitle: 'A Song of Ice and Fire: Book Three',
    author: 'George R.R. Martin',
    publishYear: 2000,
    pages: 973,
    coverUrl: '/covers/storm-of-swords.jpg',
    description: 'O mais brutal dos livros. Casamentos vermelhos, mortes chocantes e reviravoltas que mudam para sempre o destino de Westeros. Considerado o melhor livro da série.',
    mainCharacters: ['Jon Snow', 'Arya Stark', 'Jaime Lannister', 'Sansa Stark'],
    themes: ['Vingança', 'Redenção', 'Consequências da Guerra'],
    rating: 4.9,
    status: 'Publicado'
  },
  {
    id: 4,
    title: 'A Feast for Crows',
    originalTitle: 'A Song of Ice and Fire: Book Four',
    author: 'George R.R. Martin',
    publishYear: 2005,
    pages: 753,
    coverUrl: '/covers/feast-for-crows.jpg',
    description: 'Com os reis mortos, novos jogadores emergem. O foco se volta para a reconstrução e as consequências da guerra, explorando personagens secundários e novas ameaças.',
    mainCharacters: ['Cersei Lannister', 'Arya Stark', 'Sansa Stark', 'Samwell Tarly'],
    themes: ['Reconstrução', 'Poder Feminino', 'Consequências'],
    rating: 4.3,
    status: 'Publicado'
  },
  {
    id: 5,
    title: 'A Dance with Dragons',
    originalTitle: 'A Song of Ice and Fire: Book Five',
    author: 'George R.R. Martin',
    publishYear: 2011,
    pages: 1016,
    coverUrl: '/covers/dance-with-dragons.jpg',
    description: 'Acontece paralelamente ao livro anterior. Daenerys governa Meereen, Jon comanda a Patrulha da Noite, e Tyrion jornada pelo Oriente. O inverno finalmente chega.',
    mainCharacters: ['Jon Snow', 'Daenerys Targaryen', 'Tyrion Lannister', 'Stannis Baratheon'],
    themes: ['Liderança', 'Sacrifício', 'O Inverno que Vem'],
    rating: 4.4,
    status: 'Publicado'
  },
  {
    id: 6,
    title: 'The Winds of Winter',
    originalTitle: 'A Song of Ice and Fire: Book Six',
    author: 'George R.R. Martin',
    publishYear: 'TBA',
    pages: '~1500 (estimado)',
    coverUrl: '/covers/winds-of-winter.jpg',
    description: 'O aguardado sexto livro da saga. Promete resolver muitas tramas pendentes e levar a história ao seu clímax, com o inverno finalmente estabelecido em Westeros.',
    mainCharacters: ['Jon Snow', 'Daenerys Targaryen', 'Tyrion Lannister', 'Arya Stark'],
    themes: ['Inverno', 'Apocalipse', 'Destino'],
    rating: 'N/A',
    status: 'Em Desenvolvimento'
  }
]

export default function Books() {
  return (
    <main className={styles.container}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>As Crônicas de Gelo e Fogo</h1>
        <p className={styles.subtitle}>
          A saga épica de George R.R. Martin que inspirou Game of Thrones
        </p>
      </header>

      <section className={styles.booksGrid}>
        {books.map(book => (
          <article 
            className={styles.bookCard} 
            key={book.id}
          >
            <div className={styles.bookCover}>
              <img 
                src={book.coverUrl} 
                alt={`Capa de ${book.title}`}
                className={styles.coverImage}
              />
              <div className={styles.coverOverlay}>
                <span className={styles.bookStatus}>{book.status}</span>
                {book.rating !== 'N/A' && (
                  <div className={styles.rating}>
                    <span className={styles.stars}>★★★★★</span>
                    <span className={styles.ratingValue}>{book.rating}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className={styles.bookInfo}>
              <h2 className={styles.bookTitle}>{book.title}</h2>
              <p className={styles.originalTitle}>{book.originalTitle}</p>
              
              <div className={styles.bookDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Autor:</span>
                  <span className={styles.detailValue}>{book.author}</span>
                </div>
                
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Ano:</span>
                  <span className={styles.detailValue}>{book.publishYear}</span>
                </div>
                
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Páginas:</span>
                  <span className={styles.detailValue}>{book.pages}</span>
                </div>
              </div>
              
              <p className={styles.bookDescription}>{book.description}</p>
              
              <div className={styles.charactersSection}>
                <h4 className={styles.sectionTitle}>Personagens Principais:</h4>
                <div className={styles.charactersList}>
                  {book.mainCharacters.map((character, index) => (
                    <span key={index} className={styles.characterTag}>
                      {character}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={styles.themesSection}>
                <h4 className={styles.sectionTitle}>Temas:</h4>
                <div className={styles.themesList}>
                  {book.themes.map((theme, index) => (
                    <span key={index} className={styles.themeTag}>
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className={styles.readMoreBtn}>
                {book.status === 'Em Desenvolvimento' ? 'Acompanhar Lançamento' : 'Saber Mais'}
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}