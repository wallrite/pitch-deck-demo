import styles from './AdditionalServices.module.css'
import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function AdditionalServices() {
  const { lang } = useLang()
  const tx = t[lang].additionalServices

  return (
    <section className="section" style={{ background: 'var(--section-alt)' }}>
      <div className="container">
        <h2 className="section-title">{tx.title}</h2>

        <div className={styles.grid}>
          {tx.cards.map(card => (
            <div key={card.tag} className={`card ${styles.card}`}>
              <div className={styles.header}>
                <span className="tag">{card.tag}</span>
                <span className={styles.price}>{card.price}</span>
              </div>
              {card.note && <p className={styles.note}>{card.note}</p>}
              <ul className={styles.list}>
                {card.items.map(item => <li key={item}>{item}</li>)}
              </ul>
              {card.urgent && (
                <div className={styles.urgentBox}>
                  <p className={styles.urgentTitle}>{card.urgent.title}</p>
                  <p>{card.urgent.text}</p>
                </div>
              )}
            </div>
          ))}

          {/* Payment automation — wide card */}
          <div className={`card ${styles.card} ${styles.wideCard}`}>
            <div className={styles.header}>
              <span className="tag">{tx.payTag}</span>
              <span className={styles.price}>{tx.payPrice}</span>
            </div>
            <ul className={styles.list}>
              {tx.payItems.map(item => <li key={item}>{item}</li>)}
            </ul>
            <div className={styles.payTable}>
              <div className={styles.payHeader}>
                {tx.payTableHeader.map(h => <span key={h}>{h}</span>)}
              </div>
              {tx.payTableRows.map(([name, p1, p2]) => (
                <div key={name} className={styles.payRow}>
                  <span>{name}</span>
                  <span className={styles.payPrice}>{p1}</span>
                  <span className={styles.payPrice}>{p2}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
