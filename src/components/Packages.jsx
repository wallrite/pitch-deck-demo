import styles from './Packages.module.css'

const rows = [
  'Тест ідеї',
  'Розробка курсу',
  'Підготовка до запуску',
  'Реклама',
  'Лендінг',
  'Підтримка після запуску',
]

const packages = [
  {
    name: 'База',
    desc: 'Для експертів, які хочуть зробити зі мною сам продукт, а за його упаковку та просування буде відповідати команда.',
    includes: [true, true, false, false, false, false],
    highlight: false,
  },
  {
    name: 'Апгрейд',
    desc: 'Для експертів, які хочуть зробити зі мною сам продукт та лендінг АБО таргетовану рекламу.',
    includes: [true, true, true, 'choose', 'choose', true],
    highlight: false,
    note: 'Реклама АБО Лендінг — на вибір',
  },
  {
    name: 'Pro',
    desc: 'Для експертів, які хочуть зробити зі мною сам продукт, лендінг ТА таргетовану рекламу.',
    includes: [true, true, true, true, true, true],
    highlight: true,
    badge: 'best value',
  },
]

function CheckIcon({ val }) {
  if (val === true) {
    return (
      <span className={`${styles.ico} ${styles.yes}`}>✓</span>
    )
  }
  if (val === 'choose') {
    return (
      <span className={`${styles.ico} ${styles.choose}`}>✓</span>
    )
  }
  return (
    <span className={`${styles.ico} ${styles.no}`}>✕</span>
  )
}

export default function Packages() {
  return (
    <section id="packages" className="section">
      <div
        className="blob"
        style={{
          width: 400, height: 400,
          background: 'var(--blob-1)',
          bottom: -100, left: -100,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">Пакети послуг</h2>

        {/* Desktop table */}
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                {packages.map(p => (
                  <th key={p.name}>
                    <div className={`${styles.pkgHead} ${p.highlight ? styles.highlight : ''}`}>
                      {p.badge && <span className={styles.badge}>{p.badge}</span>}
                      <span className={styles.pkgName}>{p.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row}>
                  <td className={styles.rowLabel}>{row}</td>
                  {packages.map(p => (
                    <td key={p.name} className={`${styles.cell} ${p.highlight ? styles.highlightCell : ''}`}>
                      <CheckIcon val={p.includes[i]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {/* Choose note */}
          <p className={styles.chooseNote}>* В пакеті Апгрейд: Реклама АБО Лендінг — на вибір</p>
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          {packages.map(p => (
            <div key={p.name} className={`card ${styles.pkgCard} ${p.highlight ? styles.pkgHighlight : ''}`}>
              <div className={styles.pkgCardHead}>
                {p.badge && <span className={styles.badge}>{p.badge}</span>}
                <span className={styles.tag2}>{p.name}</span>
              </div>
              <p className={styles.pkgDesc}>{p.desc}</p>
              <ul className="check-list">
                {rows.map((row, i) => (
                  <li key={row}>
                    <span className={`ico ${p.includes[i] ? 'yes' : 'no'}`}>
                      {p.includes[i] ? '✓' : '✕'}
                    </span>
                    {row}
                    {p.includes[i] === 'choose' && <span className={styles.optTag}> (на вибір)</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
