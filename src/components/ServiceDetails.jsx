import styles from './ServiceDetails.module.css'
import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function ServiceDetails() {
  const { lang } = useLang()
  const tx = t[lang].serviceDetails

  return (
    <section className="section" style={{ background: 'var(--section-alt)' }}>
      <div
        className="blob"
        style={{
          width: 350, height: 350,
          background: 'var(--blob-2)',
          top: '30%', right: -100,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">{tx.title}</h2>
        <div className={styles.grid}>
          {tx.phases.map(d => (
            <div key={d.title} className={`card ${styles.card}`}>
              <h3 className={styles.cardTitle}>{d.title}</h3>
              <ul className={styles.list}>
                {d.items.map(item => (
                  <li key={item}>
                    <span className={styles.dot} />
                    <span>{item}</span>
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
