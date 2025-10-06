"use client"

import { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './houses.module.css'
import HouseCard from '@/components/houses-components/houseCard/houseCard'

export default function Houses() {
  const url = 'http://localhost:4000/me-in-westeros/houses'

  const [houses, setHouses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setLoading(true)
        const response = await axios.get(url)
        setHouses(response.data.houses)
        setLoading(false)
      }
      catch (error) {
        console.log('Erro ao buscar as casas na API')
        console.error(error)
        setError('Não foi possível carregar as casas.')
        setLoading(false)
      }
    }
    fetchHouses()
  }, [])

  if (loading) {
    return <div className={styles.loading}>Carregando as Casas Nobres...</div>
  }
  if (error) {
    return <div className={styles.error}>{error}</div>
  }
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