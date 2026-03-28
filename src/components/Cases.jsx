import { useState } from 'react'
import styles from './Cases.module.css'
import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function Cases() {
  const { lang } = useLang()
  const tx = t[lang].cases

  const [activeIdx, setActiveIdx] = useState(0)
  const activeCategory = tx.categories[activeIdx]

  const filtered = activeIdx === 0
    ? tx.items
    : tx.items.filter(c => c.category === activeCategory)

  return (
    <section id="cases" className="section">
      <div
        className="blob"
        style={{
          width: 400, height: 400,
          background: 'var(--blob-1)',
          bottom: 0, right: -100,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">{tx.title}</h2>

        <p className={styles.intro}>{tx.intro}</p>

        <div className={styles.filters}>
          {tx.categories.map((cat, i) => (
            <button
              key={cat}
              className={`${styles.filter} ${activeIdx === i ? styles.filterActive : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map(c => (
            <div key={c.num} className={`card ${styles.card}`}>
              <div className={styles.cardTop}>
                <span className={styles.caseNum}>#{c.num}</span>
                <span className={styles.catBadge}>{c.category}</span>
              </div>
              <div className={styles.clientInfo}>
                <h3 className={styles.clientName}>{c.client}</h3>
                <p className={styles.niche}>{c.niche}</p>
              </div>
              <p className={styles.desc}>{c.description}</p>
              {c.pointA && (
                <div className={styles.pointBox}>
                  <span className={styles.pointLabel}>{tx.labelPointA}</span>
                  <p className={styles.pointText}>{c.pointA}</p>
                </div>
              )}
              <div className={styles.resultBox}>
                <span className={styles.resultLabel}>{tx.labelResult}</span>
                <p className={styles.resultText}>{c.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
