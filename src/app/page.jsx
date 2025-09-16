import styles from "./page.module.css";

import MapSection from "../components/home-components/mapSection";
import HeroSection from "../components/home-components/heroSection";
import TimelineSection from "../components/home-components/timelineSection";
import QuoteSection from "@/components/home-components/quoteSection";

const castles = [
  { name: "Winterfell", x: 47, y: 22, emoji: "🐺" },
  { name: "Porto Real", x: 58, y: 60, emoji: "👑" },
  { name: "Ponta tempestade", x: 67, y: 68.6, emoji: "🦌" },
];

const events = [
  { title: "A Longa Noite", description: "Os Caminhantes Brancos ameaçam toda a humanidade", emoji: "❄️" },
  { title: "A Conquista de Aegon", description: "Aegon, o Conquistador, unifica os Sete Reinos com fogo e sangue", emoji: "⚔️" },
  { title: "A Rebelião de Robert", description: "O fim da dinastia Targaryen e início de uma nova era", emoji: "🐺" },
  { title: "O Retorno dos Dragões", description: "Daenerys desperta as criaturas mágicas após séculos", emoji: "🐉" },
  { title: "Guerra dos Cinco Reis", description: "Após a morte de Robert Baratheon, os reinos entram em conflito com cinco candidatos ao trono de ferro", emoji: "👑" },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <HeroSection/>

      <MapSection castles={castles} />

      <TimelineSection events={events} />

      {/* Quote Section */}
      <QuoteSection/>
    </main>
  );
}
