import styles from './Services.module.css'
import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function Services() {
  const { lang } = useLang()
  const tx = t[lang].services

  return (
    <section id="services" className="section">
      <div
        className="blob"
        style={{
          width: 450, height: 450,
          background: 'var(--blob-1)',
          top: '50%', right: -180,
          transform: 'translateY(-50%)',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">{tx.title}</h2>
        <div className={styles.grid}>
          {tx.items.map(s => (
            <div key={s.tag} className={`card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <span className="tag arrow">{s.tag}</span>
              </div>
              <ul className={styles.list}>
                {s.items.map(item => (
                  <li key={item}>
                    <span className={styles.dot} />
                    {item}
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
