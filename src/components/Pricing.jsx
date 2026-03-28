import styles from './Pricing.module.css'

const features = [
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
    mini: '400$',
    flagship: '800$',
    includes: [true, true, false, false, false, false],
    highlight: false,
  },
  {
    name: 'Апгрейд',
    mini: '600$',
    flagship: '1200$',
    includes: [true, true, true, 'opt', 'opt', true],
    highlight: false,
    note: 'Реклама АБО Лендінг — на вибір',
  },
  {
    name: 'Pro',
    mini: '800$',
    flagship: '1400$',
    includes: [true, true, true, true, true, true],
    highlight: true,
    badge: 'best value',
    promo: 'Знижка 50% на міні-курс при оплаті пакету міні + флагман',
  },
]

const addons = [
  { name: 'Консультація', price: '100$' },
  { name: 'Тест ідеї', price: '150$' },
  { name: 'Консультація + таргет', price: '250$' },
  { name: 'Лендінг під ключ', price: '250$' },
  { name: 'Вебінар під ключ', price: '300$' },
  { name: 'Автоматизація оплат', price: 'від 20$' },
]

function CheckIcon({ val }) {
  if (val === true) {
    return <span className={`${styles.ico} ${styles.yes}`}>✓</span>
  }
  if (val === 'opt') {
    return <span className={`${styles.ico} ${styles.opt}`}>✓</span>
  }
  return <span className={`${styles.ico} ${styles.no}`}>✕</span>
}

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div
        className="blob"
        style={{
          width: 450, height: 450,
          background: 'rgba(99,102,241,0.13)',
          top: 0, left: -150,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">Прайс</h2>

        <div className={styles.grid}>
          {packages.map(p => (
            <div
              key={p.name}
              className={`card ${styles.pkgCard} ${p.highlight ? styles.highlight : ''}`}
            >
              <div className={styles.header}>
                <span className={`tag ${styles.tagEl}`}>{p.name}</span>
                {p.badge && <span className={styles.badge}>{p.badge}</span>}
              </div>

              <ul className="check-list" style={{ marginBottom: 20 }}>
                {features.map((f, i) => (
                  <li key={f}>
                    <span className={`ico ${p.includes[i] === true || p.includes[i] === 'opt' ? 'yes' : 'no'}`}>
                      {p.includes[i] === true || p.includes[i] === 'opt' ? '✓' : '✕'}
                    </span>
                    {f}
                    {p.includes[i] === 'opt' && (
                      <span className={styles.optNote}> (на вибір)</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className={styles.prices}>
                <div className={styles.priceItem}>
                  <span className={styles.priceVal}>{p.mini}</span>
                  <span className={styles.priceLabel}>міні-курс</span>
                </div>
                <div className={styles.priceDivider} />
                <div className={styles.priceItem}>
                  <span className={styles.priceVal}>{p.flagship}</span>
                  <span className={styles.priceLabel}>флагман</span>
                </div>
              </div>

              {p.promo && (
                <p className={styles.promo}>{p.promo}</p>
              )}
            </div>
          ))}
        </div>

        <p className={styles.formatNote}>
          Міні-курс — до 8 уроків &nbsp;·&nbsp; Флагман — від 9 до 20 уроків &nbsp;·&nbsp; Інші формати обговорюються індивідуально
        </p>

        {/* Addons */}
        <div className={styles.addons}>
          <h3 className={styles.addonsTitle}>Додаткові послуги</h3>
          <div className={styles.addonsGrid}>
            {addons.map(a => (
              <div key={a.name} className={`card ${styles.addonCard}`}>
                <span className={styles.addonName}>{a.name}</span>
                <span className={styles.addonPrice}>{a.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Urgent rates */}
        <div className={`card ${styles.urgentCard}`}>
          <h3 className={styles.urgentTitle}>Термінові тарифи</h3>
          <div className={styles.urgentList}>
            <div className={styles.urgentItem}>
              <span>Виконання за 7 днів</span>
              <span className={styles.urgentPrice}>+30%</span>
            </div>
            <div className={styles.urgentItem}>
              <span>Виконання за 3 дні</span>
              <span className={styles.urgentPrice}>+50%</span>
            </div>
            <div className={styles.urgentItem}>
              <span>На завтра</span>
              <span className={styles.urgentPrice}>+100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
