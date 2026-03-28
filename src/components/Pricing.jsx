import styles from './Pricing.module.css'
import { useLang } from '../LangContext'
import { t } from '../i18n'

const pkgIncludes = [
  [true, true, false, false, false, false],
  [true, true, true, 'opt', 'opt', true],
  [true, true, true, true, true, true],
]

export default function Pricing() {
  const { lang } = useLang()
  const tx = t[lang].pricing
  const pkgRows = t[lang].packages.rows

  return (
    <section id="pricing" className="section">
      <div
        className="blob"
        style={{
          width: 450, height: 450,
          background: 'var(--blob-1)',
          top: 0, left: -150,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">{tx.title}</h2>

        <div className={styles.grid}>
          {tx.packages.map((p, pi) => (
            <div
              key={p.name}
              className={`card ${styles.pkgCard} ${pi === 2 ? styles.highlight : ''}`}
            >
              <div className={styles.header}>
                <span className={`tag ${styles.tagEl}`}>{p.name}</span>
                {p.badge && <span className={styles.badge}>{p.badge}</span>}
              </div>

              <ul className="check-list" style={{ marginBottom: 20 }}>
                {pkgRows.map((f, i) => (
                  <li key={f}>
                    <span className={`ico ${pkgIncludes[pi][i] === true || pkgIncludes[pi][i] === 'opt' ? 'yes' : 'no'}`}>
                      {pkgIncludes[pi][i] === true || pkgIncludes[pi][i] === 'opt' ? '✓' : '✕'}
                    </span>
                    {f}
                    {pkgIncludes[pi][i] === 'opt' && (
                      <span className={styles.optNote}> {tx.optNote}</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className={styles.prices}>
                <div className={styles.priceItem}>
                  <span className={styles.priceVal}>{p.mini}</span>
                  <span className={styles.priceLabel}>{tx.labelMini}</span>
                </div>
                <div className={styles.priceDivider} />
                <div className={styles.priceItem}>
                  <span className={styles.priceVal}>{p.flagship}</span>
                  <span className={styles.priceLabel}>{tx.labelFlagship}</span>
                </div>
              </div>

              {p.promo && (
                <p className={styles.promo}>{tx.promo}</p>
              )}
            </div>
          ))}
        </div>

        <p className={styles.formatNote}>{tx.formatNote}</p>

        <div className={styles.addons}>
          <h3 className={styles.addonsTitle}>{tx.addonsTitle}</h3>
          <div className={styles.addonsGrid}>
            {tx.addons.map(a => (
              <div key={a.name} className={`card ${styles.addonCard}`}>
                <span className={styles.addonName}>{a.name}</span>
                <span className={styles.addonPrice}>{a.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`card ${styles.urgentCard}`}>
          <h3 className={styles.urgentTitle}>{tx.urgentTitle}</h3>
          <div className={styles.urgentList}>
            {tx.urgentItems.map(item => (
              <div key={item.label} className={styles.urgentItem}>
                <span>{item.label}</span>
                <span className={styles.urgentPrice}>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
