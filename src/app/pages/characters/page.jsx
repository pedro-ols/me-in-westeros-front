import styles from "./characters.module.css";
import CharacterCard from "@/components/characters-components/characterCard";

const characters = [
  {
    id: 1,
    name: "Eddard (Ned) Stark",
    atributes: [
      {
        name: "Força",
        value: 16,
      },
      {
        name: "Inteligência",
        value: 15,
      },
      {
        name: "Carisma",
        value: 8,
      },
      {
        name: "Lealdade",
        value: 20,
      },
      {
        name: "Coragem",
        value: 17,
      },
      {
        name: "Influência",
        value: 18,
      },
      {
        name: "Loucura",
        value: 2,
      },
    ],
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/eddard_stark.png?raw=true",
    titles: [
      {
        name: "Senhor de Winterfell",
      },
      {
        name: "Protetor do Norte",
      },
    ],
    houseId: 1,
    createdAt: "2025-09-30T16:13:36.803Z",
    updatedAt: "2025-09-30T16:13:36.803Z",
  },
  {
    id: 2,
    name: "Catelyn Stark",
    atributes: [
      {
        name: "Força",
        value: 6,
      },
      {
        name: "Inteligência",
        value: 8,
      },
      {
        name: "Carisma",
        value: 13,
      },
      {
        name: "Lealdade",
        value: 17,
      },
      {
        name: "Coragem",
        value: 17,
      },
      {
        name: "Influência",
        value: 11,
      },
      {
        name: "Loucura",
        value: 3,
      },
    ],
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/catelyn_stark.png?raw=true",
    titles: [
      {
        name: "Senhora de Winterfell",
      },
    ],
    houseId: 1,
    createdAt: "2025-09-30T16:13:36.819Z",
    updatedAt: "2025-09-30T16:13:36.819Z",
  },
  {
    id: 3,
    name: "Robb Stark",
    atributes: [
      {
        name: "Força",
        value: 16,
      },
      {
        name: "Inteligência",
        value: 15,
      },
      {
        name: "Carisma",
        value: 13,
      },
      {
        name: "Lealdade",
        value: 18,
      },
      {
        name: "Coragem",
        value: 17,
      },
      {
        name: "Influência",
        value: 14,
      },
      {
        name: "Loucura",
        value: 3,
      },
    ],
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/robb_stark.png?raw=true",
    titles: [
      {
        name: "Herdeiro de Winterfell",
      },
      {
        name: "Rei do Norte",
      },
      {
        name: "O Jovem Lobo",
      },
    ],
    houseId: 1,
    createdAt: "2025-09-30T16:13:36.822Z",
    updatedAt: "2025-09-30T16:13:36.822Z",
  },
  {
    id: 4,
    name: "Jon Snow",
    atributes: [
      {
        name: "Força",
        value: 14,
      },
      {
        name: "Inteligência",
        value: 9,
      },
      {
        name: "Carisma",
        value: 16,
      },
      {
        name: "Lealdade",
        value: 16,
      },
      {
        name: "Coragem",
        value: 18,
      },
      {
        name: "Influência",
        value: 14,
      },
      {
        name: "Loucura",
        value: 2,
      },
    ],
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/jon_snow.png?raw=true",
    titles: [
      {
        name: "Lorde Snow",
      },
      {
        name: "O bastardo de Ned Stark",
      },
      {
        name: "Senhor Comandante da Patrula da Noite",
      },
      {
        name: "Rei do Norte",
      },
    ],
    houseId: 1,
    createdAt: "2025-09-30T16:13:36.824Z",
    updatedAt: "2025-09-30T16:13:36.824Z",
  },
  {
    id: 5,
    name: "Arya Stark",
    atributes: [
      {
        name: "Força",
        value: 6,
      },
      {
        name: "Inteligência",
        value: 15,
      },
      {
        name: "Carisma",
        value: 10,
      },
      {
        name: "Lealdade",
        value: 10,
      },
      {
        name: "Coragem",
        value: 16,
      },
      {
        name: "Influência",
        value: 4,
      },
      {
        name: "Loucura",
        value: 5,
      },
    ],
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/arya_stark.png?raw=true",
    titles: [
      {
        name: "Princesa de Winterfell",
      },
      {
        name: "Garota sem-rosto",
      },
    ],
    houseId: 1,
    createdAt: "2025-09-30T16:13:36.826Z",
    updatedAt: "2025-09-30T16:13:36.826Z",
  },
  {
    id: 6,
    name: "Bran Stark",
    atributes: [
      {
        name: "Força",
        value: 2,
      },
      {
        name: "Inteligência",
        value: 13,
      },
      {
        name: "Carisma",
        value: 17,
      },
      {
        name: "Lealdade",
        value: 15,
      },
      {
        name: "Coragem",
        value: 13,
      },
      {
        name: "Influência",
        value: 5,
      },
      {
        name: "Loucura",
        value: 2,
      },
    ],
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/bran_stark.png?raw=true",
    titles: [
      {
        name: "Bran, o quebrado",
      },
      {
        name: "Príncipe de Winterfell",
      },
      {
        name: "O Corvo de Três Olhos",
      },
    ],
    houseId: 1,
    createdAt: "2025-09-30T16:13:36.831Z",
    updatedAt: "2025-09-30T16:13:36.831Z",
  },
  {
    id: 7,
    name: "Sansa Stark",
    atributes: [
      {
        name: "Força",
        value: 4,
      },
      {
        name: "Inteligência",
        value: 11,
      },
      {
        name: "Carisma",
        value: 19,
      },
      {
        name: "Lealdade",
        value: 15,
      },
      {
        name: "Coragem",
        value: 10,
      },
      {
        name: "Influência",
        value: 5,
      },
      {
        name: "Loucura",
        value: 3,
      },
    ],
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/sansa_stark.png?raw=true",
    titles: [
      {
        name: "Princesa de Winterfell",
      },
      {
        name: "Rainha do Norte",
      },
    ],
    houseId: 1,
    createdAt: "2025-09-30T16:13:36.834Z",
    updatedAt: "2025-09-30T16:13:36.834Z",
  },
  {
    id: 8,
    name: "Rickon Stark",
    atributes: [
      {
        name: "Força",
        value: 2,
      },
      {
        name: "Inteligência",
        value: 13,
      },
      {
        name: "Carisma",
        value: 17,
      },
      {
        name: "Lealdade",
        value: 15,
      },
      {
        name: "Coragem",
        value: 17,
      },
      {
        name: "Influência",
        value: 5,
      },
      {
        name: "Loucura",
        value: 0,
      },
    ],
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/rickon_stark.png?raw=true",
    titles: [
      {
        name: "O Último Stark",
      },
    ],
    houseId: 1,
    createdAt: "2025-09-30T16:13:36.835Z",
    updatedAt: "2025-09-30T16:13:36.835Z",
  },
  {
    id: 9,
    name: "Tywin Lannister",
    atributes: [
      {
        name: "Força",
        value: 12,
      },
      {
        name: "Inteligência",
        value: 18,
      },
      {
        name: "Carisma",
        value: 10,
      },
      {
        name: "Lealdade",
        value: 8,
      },
      {
        name: "Coragem",
        value: 13,
      },
      {
        name: "Influência",
        value: 20,
      },
      {
        name: "Loucura",
        value: 1,
      },
    ],
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/tywin_lannister.png?raw=true",
    titles: [
      {
        name: "Lorde de Rochedo Casterly",
      },
      {
        name: "Mão do Rei",
      },
    ],
    houseId: 2,
    createdAt: "2025-09-30T16:13:36.837Z",
    updatedAt: "2025-09-30T16:13:36.837Z",
  },
  {
    id: 10,
    name: "Tyrion Lannister",
    atributes: [
      {
        name: "Força",
        value: 6,
      },
      {
        name: "Inteligência",
        value: 20,
      },
      {
        name: "Carisma",
        value: 5,
      },
      {
        name: "Lealdade",
        value: 17,
      },
      {
        name: "Coragem",
        value: 14,
      },
      {
        name: "Influência",
        value: 16,
      },
      {
        name: "Loucura",
        value: 8,
      },
    ],
    imageUrl:
      "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/tyrion_lannister.png?raw=true",
    titles: [
      {
        name: "O duende",
      },
      {
        name: "Mão do Rei",
      },
    ],
    houseId: 2,
    createdAt: "2025-09-30T16:13:36.840Z",
    updatedAt: "2025-09-30T16:13:36.840Z",
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

export default function Characters() {
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
