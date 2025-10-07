"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./page.module.css";
import CharacterCard from "@/components/characters-components/characterCard/index";

import { useParams } from "next/navigation";

export default function HousePage() {
  const housesUrl = "http://localhost:4000/me-in-westeros/houses";
  const charactersUrl = "http://localhost:4000/me-in-westeros/characters";
  const params = useParams();

  const [houses, setHouses] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Buscar casas
        const housesResponse = await axios.get(housesUrl);
        setHouses(housesResponse.data.houses);
        
        // Buscar personagens
        const charactersResponse = await axios.get(charactersUrl);
        setCharacters(charactersResponse.data.characters);
        
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar dados na API");
        console.error(error);
        setError("Não foi possível carregar os dados.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const id = parseInt(params.id);
  const house = houses.find((h) => h.id === id);
  
  // Filtrar personagens da casa
  const houseCharacters = characters.filter((character) => character.houseId === id);

  if (loading) {
    return <div className={styles.loading}>Carregando a casa...</div>
  }
  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  if (!house) {
    return <div className={styles.error}>Casa não encontrada.</div>
  }

  return (
    <main className={styles.container}>
      {/* Banner da Casa */}
      <div className={styles.bannerSection}>
        <div 
          className={styles.houseBanner}
          style={{
            backgroundImage: `url(${house.bannerUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className={styles.bannerOverlay}>
            <h1 className={styles.houseName}>Casa {house.name}</h1>
          </div>
        </div>
      </div>

      {/* Slogan */}
      <div className={styles.sloganSection}>
        <p className={styles.houseSlogan}>"{house.slogan}"</p>
      </div>

      {/* História */}
      <div className={styles.historySection}>
        <h2 className={styles.historyTitle}>História</h2>
        <p className={styles.houseHistory}>{house.history}</p>
      </div>

      {/* Personagens da Casa */}
      {houseCharacters.length > 0 && (
        <div className={styles.charactersSection}>
          <h2 className={styles.charactersTitle}>Membros da Casa</h2>
          <div className={styles.charactersGrid}>
            {houseCharacters.map((character) => (
              <CharacterCard 
                key={character.id} 
                character={character} 
                houses={houses} 
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
