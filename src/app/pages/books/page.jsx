"use client";

import { useState, useEffect } from "react";
import styles from "./books.module.css";
import axios from "axios";

import BookCard from "@/components/books-components/bookCard";

export default function Books() {
  const url = "http://localhost:4000/me-in-westeros/books";
  
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
  
  if (loading) {
    return <div className={styles.loading}>Carregando os Livros...</div>;
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }
  
  let sortedBooks = books.sort((a, b) => a.volume - b.volume);
  
  return (
    <main className={styles.container}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>As Crônicas de Gelo e Fogo</h1>
        <p className={styles.subtitle}>
          A saga épica de George R.R. Martin que inspirou Game of Thrones
        </p>
      </header>

      <section className={styles.booksGrid}>
        {sortedBooks.map(book => (
          <BookCard book={book} key={book.id} />
        ))}
      </section>
    </main>
  )
}