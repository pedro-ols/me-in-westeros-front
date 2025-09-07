import styles from "./page.module.css";
import MapSection from "../components/home-components/mapSection";


const castles = [
  { name: "Winterfell", x: 47, y: 22, emoji: "🐺" },
  { name: "Porto Real", x: 58, y: 60, emoji: "👑" },
  { name: "Ponta tempestade", x: 67, y: 68.6, emoji: "🦌" },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <MapSection castles={castles}/>
    </main>
  );
}
