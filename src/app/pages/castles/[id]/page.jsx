"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./page.module.css";

import { useParams } from "next/navigation";

export default function CastlePage() {
    const castlesUrl = "http://localhost:4000/me-in-westeros/castles";
    const housesUrl = "http://localhost:4000/me-in-westeros/houses";
  const params = useParams();

  const [houses, setHouses] = useState([]);
  const [castles, setCastles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Buscar castelos
        const castlesResponse = await axios.get(castlesUrl);
        setCastles(castlesResponse.data.castles);
        
        // Buscar casas
        const housesResponse = await axios.get(housesUrl);
        setHouses(housesResponse.data.houses);
        
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
  const castle = castles.find((c) => c.id === id);
  
  // Encontrar a casa dona do castelo
  const ownerHouse = houses.find((house) => house.id === castle?.houseId);

  if (loading) {
    return <div className={styles.loading}>Carregando o castelo...</div>
  }
  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  if (!castle) {
    return <div className={styles.error}>Castelo não encontrado.</div>
  }

  return (
    <main className={styles.container}>
      {/* Imagem do Castelo */}
      <div className={styles.imageSection}>
        <div 
          className={styles.castleImage}
          style={{
            backgroundImage: `url(${castle.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className={styles.imageOverlay}>
            <h1 className={styles.castleName}>{castle.name}</h1>
          </div>
        </div>
      </div>

      {/* Informações do Castelo */}
      <div className={styles.infoSection}>
        <h2 className={styles.infoTitle}>Informações</h2>
        <div className={styles.castleDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Casa Proprietária:</span>
            <span className={styles.detailValue}>
              {ownerHouse ? `Casa ${ownerHouse.name}` : "Não informado"}
            </span>
          </div>
        </div>
      </div>

      {/* História do Castelo */}
      <div className={styles.historySection}>
        <h2 className={styles.historyTitle}>História</h2>
        <p className={styles.castleHistory}>{castle.history}</p>
      </div>
    </main>
  );
}
