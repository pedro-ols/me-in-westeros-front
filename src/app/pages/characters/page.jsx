"use client"
import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./characters.module.css";
import CharacterCard from "@/components/characters-components/characterCard";

export default function Characters() {
  const charactersUrl = "http://localhost:4000/me-in-westeros/characters";
  const housesUrl = "http://localhost:4000/me-in-westeros/houses";

  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const response = await axios.get(charactersUrl);
        setCharacters(response.data.characters);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar personagens na API");
        console.error(error);
        setError("Não foi possível carregar os personagens.");
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setLoading(true);
        const response = await axios.get(housesUrl);
        setHouses(response.data.houses);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar casas na API");
        console.error(error);
        setError("Não foi possível carregar as casas.");
        setLoading(false);
      }
    };
    fetchHouses();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Carregando os personagens...</div>;
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }
  
  return (
    <main className={styles.container}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Personagens de Westeros</h1>
        <p className={styles.subtitle}>
          Os heróis, vilões e sobreviventes que moldaram o destino dos Sete
          Reinos
        </p>
      </header>

      <section className={styles.charactersGrid}>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            houses={houses}
          />
        ))}
      </section>
    </main>
  );
}
