import styles from './Packages.module.css'
import { useLang } from '../LangContext'
import { t } from '../i18n'

const includes = [
  [true, true, false, false, false, false],
  [true, true, true, 'choose', 'choose', true],
  [true, true, true, true, true, true],
]

function CheckIcon({ val, styles }) {
  if (val === true) return <span className={`${styles.ico} ${styles.yes}`}>✓</span>
  if (val === 'choose') return <span className={`${styles.ico} ${styles.choose}`}>✓</span>
  return <span className={`${styles.ico} ${styles.no}`}>✕</span>
}

export default function Packages() {
  const { lang } = useLang()
  const tx = t[lang].packages

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
        <h2 className="section-title">{tx.title}</h2>

        {/* Desktop table */}
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                {tx.items.map((p, i) => (
                  <th key={p.name}>
                    <div className={`${styles.pkgHead} ${i === 2 ? styles.highlight : ''}`}>
                      {p.badge && <span className={styles.badge}>{p.badge}</span>}
                      <span className={styles.pkgName}>{p.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tx.rows.map((row, i) => (
                <tr key={row}>
                  <td className={styles.rowLabel}>{row}</td>
                  {tx.items.map((p, pi) => (
                    <td key={p.name} className={`${styles.cell} ${pi === 2 ? styles.highlightCell : ''}`}>
                      <CheckIcon val={includes[pi][i]} styles={styles} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.chooseNote}>{tx.chooseNote}</p>
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          {tx.items.map((p, pi) => (
            <div key={p.name} className={`card ${styles.pkgCard} ${pi === 2 ? styles.pkgHighlight : ''}`}>
              <div className={styles.pkgCardHead}>
                {p.badge && <span className={styles.badge}>{p.badge}</span>}
                <span className={styles.tag2}>{p.name}</span>
              </div>
              <p className={styles.pkgDesc}>{p.desc}</p>
              <ul className="check-list">
                {tx.rows.map((row, i) => (
                  <li key={row}>
                    <span className={`ico ${includes[pi][i] ? 'yes' : 'no'}`}>
                      {includes[pi][i] ? '✓' : '✕'}
                    </span>
                    {row}
                    {includes[pi][i] === 'choose' && <span className={styles.optTag}> {tx.chooseLabel}</span>}
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
