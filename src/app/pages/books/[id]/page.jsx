"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

import styles from "./page.module.css";

export default function BookPage() {
  const url = "http://localhost:4000/me-in-westeros/books";
  const params = useParams();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setBooks(response.data.books);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar livros na API");
        console.error(error);
        setError("Não foi possível carregar os livros.");
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

   const id = parseInt(params.id);
  const book = books.find((b) => b.id === id);
  if (loading) {
    return <div className={styles.loading}>Carregando os livros...</div>;
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!book) {
    return <div className={styles.error}>Livro não encontrado.</div>;
  }

  return (
    <main className={styles.container}>
      {/* Seção de Informações do Livro */}
      <div className={styles.bookSection}>
        <div className={styles.bookContent}>
          {/* Capa do Livro */}
          <div className={styles.coverContainer}>
            <img 
              src={book.coverUrl} 
              alt={book.coverAlt || `Capa do livro ${book.title}`}
              className={styles.bookCover}
            />
          </div>

          {/* Informações do Livro */}
          <div className={styles.bookInfo}>
            <h1 className={styles.bookTitle}>{book.title}</h1>
            
            <div className={styles.bookDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Volume:</span>
                <span className={styles.detailValue}>{book.volume}</span>
              </div>
              
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Ano de Lançamento:</span>
                <span className={styles.detailValue}>{book.releaseYear}</span>
              </div>
              
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Páginas:</span>
                <span className={styles.detailValue}>{book.pages}</span>
              </div>
              
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Avaliação:</span>
                <span className={styles.detailValue}>
                  <span className={styles.rating}>★ {book.rating}/5</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção da Sinopse */}
      <div className={styles.synopsisSection}>
        <h2 className={styles.synopsisTitle}>Sinopse</h2>
        <p className={styles.synopsisText}>{book.synopsis}</p>
      </div>
    </main>
  );
}
