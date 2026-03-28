import styles from './Services.module.css'

const services = [
  {
    tag: 'Business development',
    items: ['Масштабування', 'Налаштування операційки', 'Просування'],
    icon: '📈',
  },
  {
    tag: 'Маркетинг',
    items: ['Запуск таргетованої реклами', 'Лендінг під ключ', 'Автоворонки'],
    icon: '🎯',
  },
  {
    tag: 'Запуск навчальних курсів',
    items: ['Розпаковка експертності', 'Створення продуктової лінійки', 'Запуск курсу під ключ'],
    icon: '🚀',
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div
        className="blob"
        style={{
          width: 500, height: 500,
          background: 'rgba(80,30,180,0.2)',
          top: '50%', right: -200,
          transform: 'translateY(-50%)',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">Формати співпраці зі мною</h2>
        <div className={styles.grid}>
          {services.map(s => (
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
