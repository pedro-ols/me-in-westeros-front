"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "./[volume].module.css";
import axios from "axios";

export default function BookVolume() {
  const params = useParams();
  const volume = params.volume;
  
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:4000/me-in-westeros/books`);
        
        // Encontra o livro pelo volume
        const foundBook = response.data.books.find(b => b.volume === parseInt(volume));
        
        if (foundBook) {
          setBook(foundBook);
        } else {
          setError("Livro não encontrado.");
        }
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar livro:", error);
        setError("Não foi possível carregar o livro.");
        setLoading(false);
      }
    };
    
    if (volume) {
      fetchBook();
    }
  }, [volume]);
  
  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <h2>Carregando livro...</h2>
          <p>Buscando informações do volume {volume}...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>Erro</h2>
          <p>{error}</p>
          <a href="/pages/books" className={styles.backLink}>
            ← Voltar para todos os livros
          </a>
        </div>
      </div>
    );
  }
  
  if (!book) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>Livro não encontrado</h2>
          <p>O volume {volume} não foi encontrado em nossa biblioteca.</p>
          <a href="/pages/books" className={styles.backLink}>
            Voltar para todos os livros
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <main className={styles.container}>
      {/* Seção de informações gerais */}
      <div className={styles.bookInfo}>
        <div className={styles.bookCover}>
          <img 
            src={book.coverUrl} 
            alt={book.coverAlt}
            className={styles.coverImage}
          />
        </div>
        
        <div className={styles.bookDetails}>
          <div className={styles.bookHeader}>
            <h1 className={styles.bookTitle}>{book.title}</h1>
            <p className={styles.bookSubtitle}>
              Volume {book.volume} das Crônicas de Gelo e Fogo
            </p>
          </div>
          
          <div className={styles.bookMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Ano de Lançamento:</span>
              <span className={styles.metaValue}>{book.releaseYear}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Páginas:</span>
              <span className={styles.metaValue}>{book.pages}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Avaliação:</span>
              <span className={styles.metaValue}>
                {book.rating} ⭐
              </span>
            </div>
          </div>
          
          <div className={styles.bookActions}>
            <a href="/pages/books" className={styles.backButton}>
              ← Voltar para todos os livros
            </a>
          </div>
        </div>
      </div>
      
      {/* Seção da sinopse */}
      <div className={styles.synopsisSection}>
        <h2 className={styles.synopsisTitle}>Sinopse</h2>
        <div className={styles.synopsisContent}>
          <p className={styles.synopsisText}>{book.synopsis}</p>
        </div>
      </div>
    </main>
  );
}
