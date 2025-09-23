import styles from './castles.module.css'

const castles = [
  {
    id: 1,
    name: 'Winterfell',
    region: 'O Norte',
    rulingHouse: 'Stark',
    imageUrl: '/castles/winterfell.jpg',
    founded: '~8000 anos atrás',
    founder: 'Brandon, o Construtor',
    status: 'Ativo',
    type: 'Fortaleza Ancestral',
    description: 'A sede ancestral da Casa Stark no Norte. Construída sobre fontes termais, Winterfell mantém-se aquecida mesmo nos invernos mais rigorosos. Suas muralhas duplas e criptas antigas guardam milhares de anos de história.',
    defenses: [
      'Muralhas duplas de granito',
      'Fosso profundo',
      'Torres de vigia',
      'Portões de ferro'
    ],
    notableLocations: [
      'Criptas dos Stark',
      'Bosque Sagrado e Árvore-coração',
      'Torre Quebrada',
      'Grande Salão'
    ],
    strategicValue: 'Controla as estradas do Norte e defende contra invasões vindas do Sul',
    currentLord: 'Sansa Stark',
    garrison: '~500 homens em tempos de paz',
    historicalEvents: [
      'Construção por Brandon, o Construtor',
      'Resistiu ao Rei da Noite',
      'Batalha dos Bastardos',
      'Coroação de Sansa como Rainha no Norte'
    ]
  },
  {
    id: 2,
    name: 'Casterly Rock',
    region: 'Terras do Oeste',
    rulingHouse: 'Lannister',
    imageUrl: '/castles/casterly-rock.jpg',
    founded: 'Era dos Heróis',
    founder: 'Lann, o Esperto',
    status: 'Ativo',
    type: 'Fortaleza sobre Penhasco',
    description: 'Esculpida na própria rocha dourada, Casterly Rock é uma das fortalezas mais imponentes de Westeros. Suas minas de ouro fizeram dos Lannister a família mais rica dos Sete Reinos.',
    defenses: [
      'Penhasco íngreme inescalável',
      'Entradas secretas minadas',
      'Muralhas de pedra dourada',
      'Porto natural protegido'
    ],
    notableLocations: [
      'Minas de Ouro',
      'Salão Dourado',
      'Arsenal',
      'Porto de Lannisport'
    ],
    strategicValue: 'Controla o comércio marítimo do Oeste e fornece riqueza através das minas',
    currentLord: 'Tyrion Lannister',
    garrison: '~1000 homens + frota naval',
    historicalEvents: [
      'Conquista por Lann, o Esperto',
      'Fonte da riqueza Lannister',
      'Resistiu a múltiplos cercos',
      'Tomada pelos Imaculados'
    ]
  },
  {
    id: 3,
    name: 'Dragonstone',
    region: 'Terras da Coroa',
    rulingHouse: 'Targaryen',
    imageUrl: '/castles/dragonstone.jpg',
    founded: '~200 anos antes da Conquista',
    founder: 'Aegon, o Conquistador',
    status: 'Ativo',
    type: 'Fortaleza Vulcânica',
    description: 'Construída com técnicas valirianas em uma ilha vulcânica, Dragonstone serviu como primeira sede dos Targaryen em Westeros. Suas torres em forma de dragão e arquitetura única a tornam inconfundível.',
    defenses: [
      'Localização insular',
      'Rocha vulcânica natural',
      'Torres-dragão intimidantes',
      'Porto bem defendido'
    ],
    notableLocations: [
      'Câmara do Mapa Pintado',
      'Praia da Pedra do Dragão',
      'Minas de Obsidiana',
      'Câmaras de Dragão'
    ],
    strategicValue: 'Controla a entrada da Baía de Blackwater e acesso marítimo a King\'s Landing',
    currentLord: 'Coroa (sem herdeiro Targaryen)',
    garrison: '~300 homens + guarnição naval',
    historicalEvents: [
      'Primeira fortaleza Targaryen em Westeros',
      'Nascimento de Daenerys durante uma tempestade',
      'Base de operações de Stannis Baratheon',
      'Retorno de Daenerys a Westeros'
    ]
  },
  {
    id: 4,
    name: 'The Red Keep',
    region: 'Terras da Coroa',
    rulingHouse: 'Coroa (Baratheon/Lannister)',
    imageUrl: '/castles/red-keep.jpg',
    founded: '~300 anos atrás',
    founder: 'Aegon I Targaryen',
    status: 'Parcialmente Destruído',
    type: 'Palácio Real',
    description: 'O palácio real de King\'s Landing, sede do Trono de Ferro. Suas muralhas vermelhas dominam a capital. Foi parcialmente destruído por Drogon durante a conquista de Daenerys.',
    defenses: [
      'Muralhas altas de pedra vermelha',
      'Múltiplos pátios defendidos',
      'Torres de vigia',
      'Guarda Real'
    ],
    notableLocations: [
      'Salão do Trono de Ferro',
      'Torre da Mão',
      'Septo Real',
      'Prisões (Celas Negras)'
    ],
    strategicValue: 'Centro do poder político de Westeros e símbolo da autoridade real',
    currentLord: 'Brandon Stark (Bran, o Quebrado)',
    garrison: '~2000 guardas + Guarda Real',
    historicalEvents: [
      'Construção por Aegon, o Conquistador',
      'Sede de todos os reis de Westeros',
      'Explosão do Grande Septo',
      'Destruição parcial por Drogon'
    ]
  },
  {
    id: 5,
    name: 'Harrenhal',
    region: 'Terras Fluviais',
    rulingHouse: 'Maldito/Abandonado',
    imageUrl: '/castles/harrenhal.jpg',
    founded: '~300 anos atrás',
    founder: 'Harren, o Negro',
    status: 'Ruínas Habitadas',
    type: 'Fortaleza Amaldiçoada',
    description: 'A maior fortaleza de Westeros, mas também a mais amaldiçoada. Suas torres derretidas pelo fogo dos dragões servem como lembrete do poder Targaryen. Nenhuma casa conseguiu prosperar por muito tempo.',
    defenses: [
      'Muralhas colossais (parcialmente destruídas)',
      'Torres massivas (derretidas)',
      'Tamanho intimidante',
      'Reputação assombrada'
    ],
    notableLocations: [
      'Torre da Desolação',
      'Salão dos Cem Fogões',
      'Torre de Harren',
      'Pátio dos Deuses'
    ],
    strategicValue: 'Controla estradas importantes, mas é considerada amaldiçoada',
    currentLord: 'Vário (propriedade disputada)',
    garrison: '~100-200 homens (varia)',
    historicalEvents: [
      'Construção por Harren, o Negro',
      'Destruição por Balerion',
      'Múltiplas famílias extintas',
      'Torneio de Harrenhal (Robert\'s Rebellion)'
    ]
  },
  {
    id: 6,
    name: 'Storm\'s End',
    region: 'Terras da Tempestade',
    rulingHouse: 'Baratheon',
    imageUrl: '/castles/storms-end.jpg',
    founded: 'Era dos Heróis',
    founder: 'Durran Godsgrief',
    status: 'Ativo',
    type: 'Fortaleza Costeira',
    description: 'Construída para resistir às tempestades furiosas da costa leste, Storm\'s End nunca foi tomada por cerco. Suas muralhas curvas desviam tanto tempestades quanto ataques inimigos.',
    defenses: [
      'Muralhas curvas anti-tempestade',
      'Pedra extremamente resistente',
      'Localização estratégica no mar',
      'Design defensivo único'
    ],
    notableLocations: [
      'Salão Redondo',
      'Torre do Sino',
      'Porto Protegido',
      'Muralhas Curvas'
    ],
    strategicValue: 'Controla o Estreito e rotas comerciais marítimas do leste',
    currentLord: 'Gendry Baratheon',
    garrison: '~800 homens',
    historicalEvents: [
      'Nunca foi tomada por cerco',
      'Berço da Casa Baratheon',
      'Resistiu ao cerco de Stannis',
      'Legitimação de Gendry'
    ]
  }
]

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
        {castles.map(castle => (
          <article 
            className={styles.castleCard} 
            key={castle.id}
          >
            <div className={styles.castleImage}>
              <img 
                src={castle.imageUrl} 
                alt={castle.name}
                className={styles.fortressImage}
              />
              <div className={styles.imageOverlay}>
                <span className={`${styles.status} ${styles[castle.status.toLowerCase().replace(' ', '-')]}`}>
                  {castle.status}
                </span>
                <span className={styles.castleType}>{castle.type}</span>
              </div>
            </div>
            
            <div className={styles.castleInfo}>
              <h2 className={styles.castleName}>{castle.name}</h2>
              
              <div className={styles.castleDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Região:</span>
                  <span className={styles.detailValue}>{castle.region}</span>
                </div>
                
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Casa Governante:</span>
                  <span className={styles.detailValue}>{castle.rulingHouse}</span>
                </div>
                
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Fundado:</span>
                  <span className={styles.detailValue}>{castle.founded}</span>
                </div>
                
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Fundador:</span>
                  <span className={styles.detailValue}>{castle.founder}</span>
                </div>
                
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Lorde Atual:</span>
                  <span className={styles.detailValue}>{castle.currentLord}</span>
                </div>
                
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Guarnição:</span>
                  <span className={styles.detailValue}>{castle.garrison}</span>
                </div>
              </div>
              
              <p className={styles.castleDescription}>{castle.description}</p>
              
              <div className={styles.defensesSection}>
                <h4 className={styles.sectionTitle}>Defesas:</h4>
                <ul className={styles.defensesList}>
                  {castle.defenses.map((defense, index) => (
                    <li key={index} className={styles.defenseItem}>{defense}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.locationsSection}>
                <h4 className={styles.sectionTitle}>Locais Notáveis:</h4>
                <div className={styles.locationsList}>
                  {castle.notableLocations.map((location, index) => (
                    <span key={index} className={styles.locationTag}>
                      {location}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={styles.strategySection}>
                <h4 className={styles.sectionTitle}>Valor Estratégico:</h4>
                <p className={styles.strategyText}>{castle.strategicValue}</p>
              </div>
              
              <div className={styles.historySection}>
                <h4 className={styles.sectionTitle}>Eventos Históricos:</h4>
                <ul className={styles.historyList}>
                  {castle.historicalEvents.map((event, index) => (
                    <li key={index} className={styles.historyItem}>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={styles.exploreBtn}>
                Explorar Castelo
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}