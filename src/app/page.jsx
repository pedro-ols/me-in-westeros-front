"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./page.module.css";

import MapSection from "../components/home-components/mapSection";
import HeroSection from "../components/home-components/heroSection";
import TimelineSection from "../components/home-components/timelineSection";
import QuoteSection from "@/components/home-components/quoteSection";

const events = [
  { title: "A Longa Noite", description: "Os Caminhantes Brancos ameaçam toda a humanidade", emoji: "❄️" },
  { title: "A Conquista de Aegon", description: "Aegon, o Conquistador, unifica os Sete Reinos com fogo e sangue", emoji: "⚔️" },
  { title: "A Rebelião de Robert", description: "O fim da dinastia Targaryen e início de uma nova era", emoji: "🐺" },
  { title: "O Retorno dos Dragões", description: "Daenerys desperta as criaturas mágicas após séculos", emoji: "🐉" },
  { title: "Guerra dos Cinco Reis", description: "Após a morte de Robert Baratheon, os reinos entram em conflito com cinco candidatos ao trono de ferro", emoji: "🫅" },
];

export default function Home() {
  const url = "http://localhost:4000/me-in-westeros/castles";

  const [castles, setCastles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCastles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setCastles(response.data.castles);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar os icones dos castelos na API");
        console.error(error);
        setError("Não foi possível carregar os os icones dos castelos.");
        setLoading(false);
      }
    };
    fetchCastles();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Carregando os os ícones dos castelos...</div>;
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <main className={styles.container}>
      <HeroSection/>

      <MapSection castles={castles} />

      <TimelineSection events={events} />

      <QuoteSection/>
    </main>
  );
}
