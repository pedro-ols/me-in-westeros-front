import Link from 'next/link'
import styles from './houses.module.css'
import HouseCard from '@/components/houses-components/houseCard/houseCard'

const houses = [
  {
    id: 1,
    name: 'Stark',
    bannerUrl: '/banners/stark.png',
    bannerAlt: 'A grey wolf on a white field',
    realm: 'The North',
    anthem: 'Winter is Coming',
    history: 'A Casa Stark é uma das mais antigas e nobres de Westeros, governando o Norte a partir de Winterfell.',
    castle:{
        name: 'Winterfell',
    }
  },
  {
    id: 2,
    name: 'Lannister',
    bannerUrl: '/banners/lannister.png',
    bannerAlt: 'A golden lion on a crimson field',
    realm: 'The Westerlands',
    anthem: 'Hear Me Roar',
    history: 'Os Lannister são conhecidos por sua riqueza e poder, controlando as minas de ouro de Casterly Rock.',
    castle:{
        name: 'Casterly Rock',
    }
  },
  {
    id: 3,
    name: 'Targaryen',
    bannerUrl: '/banners/targaryen.png',
    bannerAlt: 'A three-headed dragon on a black field',
    realm: 'Dragonstone',
    anthem: 'Fire and Blood',
    history: 'A antiga casa real de Westeros, conhecida por seus dragões e cabelos prateados.',
    castle:{
        name: 'Dragonstone',
    }
  }
]

export default function Houses() {
  return (
    <main className={styles.container}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Grandes Casas de Westeros</h1>
        <p className={styles.subtitle}>
          Conheça as casas nobres que moldaram a história dos Sete Reinos
        </p>
      </header>

      <section className={styles.housesGrid}>
        {houses.map(house => (
          <HouseCard house={house} key={house.id} />
        ))}
      </section>
    </main>
  )
}