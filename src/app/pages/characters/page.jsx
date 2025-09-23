import styles from './characters.module.css'

const characters = [
  {
    id: 1,
    name: 'Jon Snow',
    title: 'Lorde Comandante da Patrulha da Noite / Rei no Norte',
    house: 'Stark (bastardo) / Targaryen (verdadeiro)',
    realName: 'Aegon Targaryen',
    imageUrl: '/characters/jon-snow.jpg',
    status: 'Vivo',
    location: 'Winterfell',
    description: 'Bastardo de Ned Stark que se revelou ser o filho legítimo de Lyanna Stark e Rhaegar Targaryen. Conhecido por sua honra, coragem e liderança.',
    characteristics: [
      'Honorável como um Stark',
      'Sangue de dragão Targaryen', 
      'Líder nato',
      'Espadachim habilidoso'
    ],
    weapons: ['Longclaw (Garra Longa)', 'Adaga de Aço Valiriano'],
    allies: ['Samwell Tarly', 'Tormund Giantsbane', 'Fantasma (Lobo Gigante)'],
    achievements: [
      'Defendeu a Muralha contra os Selvagens',
      'Venceu a Batalha dos Bastardos',
      'Liderou a defesa contra os Mortos-Vivos'
    ]
  },
  {
    id: 2,
    name: 'Daenerys Targaryen',
    title: 'Mãe dos Dragões / Rainha de Meereen',
    house: 'Targaryen',
    realName: 'Daenerys Stormborn',
    imageUrl: '/characters/daenerys.jpg',
    status: 'Morta',
    location: 'King\'s Landing (falecida)',
    description: 'A última Targaryen conhecida, renasceu os dragões e conquistou cidades como libertadora de escravos antes de sucumbir à loucura dos Targaryen.',
    characteristics: [
      'Imune ao fogo',
      'Mãe dos Dragões',
      'Libertadora de escravos',
      'Tendência à tirania'
    ],
    weapons: ['Dragões (Drogon, Rhaegal, Viserion)', 'Exército Imaculado'],
    allies: ['Tyrion Lannister', 'Jorah Mormont', 'Missandei'],
    achievements: [
      'Renasceu os dragões',
      'Libertou Slaver\'s Bay',
      'Conquistou Westeros',
      'Destruiu King\'s Landing'
    ]
  },
  {
    id: 3,
    name: 'Tyrion Lannister',
    title: 'Mão da Rainha / O Anão',
    house: 'Lannister',
    realName: 'Tyrion Lannister',
    imageUrl: '/characters/tyrion.jpg',
    status: 'Vivo',
    location: 'King\'s Landing',
    description: 'O filho anão de Tywin Lannister, compensou sua deficiência física com uma mente brilhante e wit afiado. Talvez o melhor jogador do jogo dos tronos.',
    characteristics: [
      'Inteligência excepcional',
      'Estrategista político',
      'Amante de livros e vinho',
      'Senso de justiça'
    ],
    weapons: ['Intelecto', 'Eloquência', 'Conhecimento'],
    allies: ['Jon Snow', 'Daenerys Targaryen', 'Varys'],
    achievements: [
      'Defendeu King\'s Landing na Batalha de Blackwater',
      'Serviu como Mão competente',
      'Sobreviveu a múltiplas traições',
      'Arquitetou a vitória contra Cersei'
    ]
  },
  {
    id: 4,
    name: 'Arya Stark',
    title: 'Sem Rosto / A Menina de Ninguém',
    house: 'Stark',
    realName: 'Arya Stark',
    imageUrl: '/characters/arya.jpg',
    status: 'Viva',
    location: 'Oeste de Westeros (explorando)',
    description: 'A filha mais nova de Ned Stark que se tornou uma assassina mortal. Vingou sua família e salvou Westeros ao matar o Rei da Noite.',
    characteristics: [
      'Assassina treinada',
      'Mudança de faces',
      'Determinação férrea',
      'Senso de justiça familiar'
    ],
    weapons: ['Needle (Agulha)', 'Adaga de Aço Valiriano', 'Técnicas dos Sem Rosto'],
    allies: ['The Hound', 'Gendry', 'Hot Pie'],
    achievements: [
      'Matou o Rei da Noite',
      'Vingou o Casamento Vermelho',
      'Dominou as artes dos Sem Rosto',
      'Sobreviveu sozinha em Westeros'
    ]
  },
  {
    id: 5,
    name: 'Sansa Stark',
    title: 'Rainha no Norte / Senhora de Winterfell',
    house: 'Stark',
    realName: 'Sansa Stark',
    imageUrl: '/characters/sansa.jpg',
    status: 'Viva',
    location: 'Winterfell',
    description: 'Transformou-se de uma jovem ingênua em uma líder astuta e política experiente. Governa o Norte independente com sabedoria e força.',
    characteristics: [
      'Política habilidosa',
      'Líder natural',
      'Sobrevivente resiliente',
      'Protetora do Norte'
    ],
    weapons: ['Diplomacia', 'Estratégia política', 'Alianças'],
    allies: ['Jon Snow', 'Arya Stark', 'Brienne of Tarth'],
    achievements: [
      'Sobreviveu aos Lannister e Bolton',
      'Conquistou a independência do Norte',
      'Tornou-se Rainha no Norte',
      'Reconstruiu Winterfell'
    ]
  },
  {
    id: 6,
    name: 'Jaime Lannister',
    title: 'Ser Jaime / O Regicida',
    house: 'Lannister',
    realName: 'Jaime Lannister',
    imageUrl: '/characters/jaime.jpg',
    status: 'Morto',
    location: 'King\'s Landing (falecido)',
    description: 'O cavaleiro dourado que matou o Rei Louco. Passou por uma jornada de redenção antes de retornar para morrer com sua irmã gêmea Cersei.',
    characteristics: [
      'Espadachim lendário',
      'Amante de Cersei',
      'Jornada de redenção',
      'Honra conflituosa'
    ],
    weapons: ['Espada (perdeu mão direita)', 'Mão de ouro', 'Experiência militar'],
    allies: ['Brienne of Tarth', 'Tyrion Lannister', 'Bronn'],
    achievements: [
      'Salvou King\'s Landing do fogo valiriano',
      'Protegeu Brienne',
      'Lutou contra os Mortos-Vivos',
      'Cavaleiro da Guarda Real por anos'
    ]
  }
]

export default function Characters() {
  return (
    <main className={styles.container}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Personagens de Westeros</h1>
        <p className={styles.subtitle}>
          Os heróis, vilões e sobreviventes que moldaram o destino dos Sete Reinos
        </p>
      </header>

      <section className={styles.charactersGrid}>
        {characters.map(character => (
          <article 
            className={styles.characterCard} 
            key={character.id}
          >
            <div className={styles.characterImage}>
              <img 
                src={character.imageUrl} 
                alt={character.name}
                className={styles.portraitImage}
              />
              <div className={styles.imageOverlay}>
                <span className={`${styles.status} ${styles[character.status.toLowerCase()]}`}>
                  {character.status}
                </span>
                <span className={styles.location}>{character.location}</span>
              </div>
            </div>
            
            <div className={styles.characterInfo}>
              <h2 className={styles.characterName}>{character.name}</h2>
              {character.realName !== character.name && (
                <p className={styles.realName}>({character.realName})</p>
              )}
              <p className={styles.characterTitle}>{character.title}</p>
              
              <div className={styles.characterDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Casa:</span>
                  <span className={styles.detailValue}>{character.house}</span>
                </div>
              </div>
              
              <p className={styles.characterDescription}>{character.description}</p>
              
              <div className={styles.characteristicsSection}>
                <h4 className={styles.sectionTitle}>Características:</h4>
                <div className={styles.characteristicsList}>
                  {character.characteristics.map((trait, index) => (
                    <span key={index} className={styles.characteristicTag}>
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={styles.weaponsSection}>
                <h4 className={styles.sectionTitle}>Armas/Ferramentas:</h4>
                <ul className={styles.weaponsList}>
                  {character.weapons.map((weapon, index) => (
                    <li key={index} className={styles.weaponItem}>{weapon}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.alliesSection}>
                <h4 className={styles.sectionTitle}>Aliados Principais:</h4>
                <div className={styles.alliesList}>
                  {character.allies.map((ally, index) => (
                    <span key={index} className={styles.allyTag}>
                      {ally}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={styles.achievementsSection}>
                <h4 className={styles.sectionTitle}>Grandes Feitos:</h4>
                <ul className={styles.achievementsList}>
                  {character.achievements.map((achievement, index) => (
                    <li key={index} className={styles.achievementItem}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={styles.learnMoreBtn}>
                Ver História Completa
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}