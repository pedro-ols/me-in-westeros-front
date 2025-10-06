"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./castles.module.css";
import CastleCard from "@/components/castles-components/castleCard";

export default function Castles() {
  const castlesUrl = "http://localhost:4000/me-in-westeros/castles";
  const housesUrl = "http://localhost:4000/me-in-westeros/houses";

  const [castles, setCastles] = useState([]);
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCastles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(castlesUrl);
        setCastles(response.data.castles);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar castelos na API");
        console.error(error);
        setError("Não foi possível carregar os castelos.");
        setLoading(false);
      }
    };
    fetchCastles();
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
    return <div className={styles.loading}>Carregando os Castelos...</div>;
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <main className={styles.container}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Castelos de Westeros</h1>
        <p className={styles.subtitle}>
          As fortalezas e palácios que definiram o poder nos Sete Reinos
        </p>
      </header>

      <section className={styles.castlesGrid}>
        {castles.map((castle) => (
          <CastleCard key={castle.id} castle={castle} houses={houses} />
        ))}
      </section>
    </main>
  );
}
