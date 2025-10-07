"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./page.module.css";

import { useParams } from "next/navigation";

export default function CharacterPage() {
  const charactersUrl = "http://localhost:4000/me-in-westeros/characters";
  const actorsUrl = "http://localhost:4000/me-in-westeros/actors";
  const params = useParams();

  const [characters, setCharacters] = useState([]);
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Buscar personagens e atores em paralelo
        const [charactersResponse, actorsResponse] = await Promise.all([
          axios.get(charactersUrl),
          axios.get(actorsUrl)
        ]);
        
        setCharacters(charactersResponse.data.characters);
        setActors(actorsResponse.data.actors);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar dados da API");
        console.error(error);
        setError("Não foi possível carregar os dados.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const id = parseInt(params.id);
  const character = characters.find((c) => c.id === id);
   const actor = actors.find((a) => a.characterId === id);

  if (loading) {
    return <div className={styles.loading}>Carregando personagem e ator...</div>;
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!character) {
    return <div className={styles.error}>Personagem não encontrado.</div>;
  }

  return (
    <main className={styles.container}>
      <div className={styles.characterLayout}>
        {/* Lado Esquerdo - Perfil */}
        <div className={styles.leftSection}>
          {/* Seção do Personagem */}
          <div className={styles.profileSection}>
            <div className={styles.characterImageContainer}>
              <img src={character.imageUrl} alt={character.name} className={styles.characterImage}/>
            </div>
            <h1 className={styles.characterName}>{character.name}</h1>
            {character.titles && character.titles.length > 0 && (
              <div className={styles.titlesSection}>
                <h3 className={styles.titlesLabel}>Títulos:</h3>
                <ul className={styles.titlesList}>
                  {character.titles.map((title, index) => (
                    <li key={index} className={styles.titleItem}>
                      {title.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Seção do Ator */}
          <div className={styles.actorSection}>
            <h3 className={styles.actorLabel}>Interpretado por:</h3>
            <div className={styles.actorInfo}>
              <div className={styles.actorImage}>
                {actor ? (
                  <img src={actor.imageUrl} alt={actor.name} />
                ) : (
                  <img src="/images/actors/placeholder-actor.jpg" alt="Ator não encontrado" />
                )}
              </div>
              <p className={styles.actorName}>
                {actor ? actor.name : "Ator não encontrado"}
              </p>
            </div>
          </div>
        </div>

        {/* Lado Direito - Atributos */}
        <div className={styles.rightSection}>
          <h2 className={styles.attributesTitle}>Atributos</h2>
          <div className={styles.attributesGrid}>
            {character.atributes && character.atributes.map((attribute, index) => (
              <div key={index} className={styles.attributeItem}>
                <div className={styles.attributeHeader}>
                  <span className={styles.attributeName}>{attribute.name}</span>
                  <span className={styles.attributeValue}>{attribute.value}</span>
                </div>
                <div className={styles.attributeBar}>
                  <div 
                    className={styles.attributeFill} 
                    style={{ width: `${(attribute.value / 20) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
