import styles from "./castles.module.css";
import CastleCard from "@/components/castles-components/castleCard";

const castles = [
  {
    id: 1,
    name: "Winterfell",
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/winterfell.png?raw=true",
    history:
      "Winterfell é a ancestral sede da Casa Stark, localizada no coração do Norte. É um castelo imponente, cercado por uma muralha de pedra e protegido por um fosso.",
    x: 47,
    y: 22,
    emoji: "🐺",
    houseId: 1,
    createdAt: "2025-09-30T16:13:37.580Z",
    updatedAt: "2025-09-30T16:13:37.580Z",
  },
  {
    id: 2,
    name: "Porto Real",
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/porto_real.png?raw=true",
    history:
      "Porto Real é a capital dos Sete Reinos e sede do Trono de Ferro. É a maior cidade de Westeros e centro do poder político.",
    x: 58,
    y: 60,
    emoji: "👑",
    houseId: 4,
    createdAt: "2025-09-30T16:13:37.606Z",
    updatedAt: "2025-09-30T16:13:37.606Z",
  },
  {
    id: 3,
    name: "Ponta tempestade",
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/ponta_tempestade.png?raw=true",
    history:
      "Ponta Tempestade é a sede ancestral da Casa Baratheon, conhecida por sua resistência às tempestades que açoitam a costa.",
    x: 67,
    y: 68.6,
    emoji: "🦌",
    houseId: 4,
    createdAt: "2025-09-30T16:13:37.608Z",
    updatedAt: "2025-09-30T16:13:37.608Z",
  },
  {
    id: 4,
    name: "Jardim de cima",
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/jardim_de_cima.png?raw=true",
    history:
      "Jardim de Cima é a sede da Casa Tyrell, conhecida por seus belos jardins e pela fertilidade das Terras do Reach.",
    x: 29,
    y: 80,
    emoji: "🌹",
    houseId: 5,
    createdAt: "2025-09-30T16:13:37.613Z",
    updatedAt: "2025-09-30T16:13:37.613Z",
  },
  {
    id: 5,
    name: "Ninho da Águia",
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/ninho_da_aguia.png?raw=true",
    history:
      "O Ninho da Águia é a sede da Casa Arryn, construído no topo das Montanhas da Lua, sendo considerado inexpugnável.",
    x: 57,
    y: 48,
    emoji: "🦅",
    houseId: 6,
    createdAt: "2025-09-30T16:13:37.615Z",
    updatedAt: "2025-09-30T16:13:37.615Z",
  },
  {
    id: 6,
    name: "Lançassolar",
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/lancassolar.png?raw=true",
    history:
      "Lançassolar é a sede da Casa Martell em Dorne, conhecida por sua arquitetura única e resistência ao calor do deserto.",
    x: 46,
    y: 83,
    emoji: "☀️",
    houseId: 7,
    createdAt: "2025-09-30T16:13:37.617Z",
    updatedAt: "2025-09-30T16:13:37.617Z",
  },
  {
    id: 7,
    name: "Correrrio",
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/correrrio.png?raw=true",
    history:
      "Correrrio é a sede da Casa Tully nas Terras Fluviais, estrategicamente localizada entre rios importantes.",
    x: 38,
    y: 51.5,
    emoji: "🐟",
    houseId: 8,
    createdAt: "2025-09-30T16:13:37.619Z",
    updatedAt: "2025-09-30T16:13:37.619Z",
  },
  {
    id: 8,
    name: "As Gêmeas",
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/as_gemeas.png?raw=true",
    history:
      "As Gêmeas é a sede da Casa Frey, consistindo em duas torres conectadas por uma ponte sobre o Rio Tridente.",
    x: 41,
    y: 41,
    emoji: "👯‍♀️",
    houseId: 9,
    createdAt: "2025-09-30T16:13:37.623Z",
    updatedAt: "2025-09-30T16:13:37.623Z",
  },
  {
    id: 9,
    name: "Pike",
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/pike.png?raw=true",
    history:
      "Pike é a sede da Casa Greyjoy nas Ilhas de Ferro, construída em penhascos rochosos sobre o mar.",
    x: 25,
    y: 45,
    emoji: "🐙",
    houseId: 10,
    createdAt: "2025-09-30T16:13:37.628Z",
    updatedAt: "2025-09-30T16:13:37.628Z",
  },
  {
    id: 10,
    name: "Rochedo Casterly",
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/rochedo_casterly.png?raw=true",
    history:
      "Rochedo Casterly é a ancestral sede da Casa Lannister, famosa por suas minas de ouro e sua imponente arquitetura.",
    x: 32,
    y: 59,
    emoji: "🦁",
    houseId: 2,
    createdAt: "2025-09-30T16:13:37.635Z",
    updatedAt: "2025-09-30T16:13:37.635Z",
  },
  {
    id: 11,
    name: "Pedra do Dragão",
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/pedra_do_dragao.png?raw=true",
    history:
      "Pedra do Dragão é a ancestral sede da Casa Targaryen, construída com pedra vulcânica e repleta de simbologia de dragões.",
    x: 70,
    y: 56,
    emoji: "🐉",
    houseId: 3,
    createdAt: "2025-09-30T16:13:37.638Z",
    updatedAt: "2025-09-30T16:13:37.638Z",
  },
];

const houses = [
  {
    id: 1,
    name: "Stark",
    bannerUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/banners/banner_stark.png?raw=true",
    bannerAlt: "A grey wolf on a white field",
    realm: "The North",
    anthem: "Winter is Coming",
    history:
      "A Casa Stark é uma das mais antigas e nobres de Westeros, governando o Norte a partir de Winterfell.",
    castle: {
      name: "Winterfell",
    },
  },
  {
    id: 2,
    name: "Lannister",
    bannerUrl: "/banners/lannister.png",
    bannerAlt: "A golden lion on a crimson field",
    realm: "The Westerlands",
    anthem: "Hear Me Roar",
    history:
      "Os Lannister são conhecidos por sua riqueza e poder, controlando as minas de ouro de Casterly Rock.",
    castle: {
      name: "Casterly Rock",
    },
  },
  {
    id: 3,
    name: "Targaryen",
    bannerUrl: "/banners/targaryen.png",
    bannerAlt: "A three-headed dragon on a black field",
    realm: "Dragonstone",
    anthem: "Fire and Blood",
    history:
      "A antiga casa real de Westeros, conhecida por seus dragões e cabelos prateados.",
    castle: {
      name: "Dragonstone",
    },
  },
];

export default function Castles() {
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
          <CastleCard key={castle.id} castle={castle} houses={houses}/>
        ))}
      </section>
    </main>
  );
}
