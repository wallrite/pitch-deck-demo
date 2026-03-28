import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div
        className="blob"
        style={{
          width: 500, height: 500,
          background: 'rgba(99,102,241,0.13)',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Залишаємось на зв&apos;язку</h2>
          <p className={styles.sub}>Для подальших питань та обговорень</p>

          <div className={styles.contacts}>
            <a href="mailto:anastasiia.koval.eagles@gmail.com" className={styles.contactItem}>
              <span className={styles.icon}>✉</span>
              <div>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>anastasiia.koval.eagles@gmail.com</span>
              </div>
            </a>
            <a href="tel:+380509026101" className={styles.contactItem}>
              <span className={styles.icon}>📞</span>
              <div>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>+38-050-902-61-01</span>
              </div>
            </a>
            <a href="https://t.me/nastasiia_koval" target="_blank" rel="noreferrer" className={styles.contactItem}>
              <span className={styles.icon}>✈</span>
              <div>
                <span className={styles.label}>Telegram</span>
                <span className={styles.value}>@nastasiia_koval</span>
              </div>
            </a>
          </div>

          <a href="https://t.me/nastasiia_koval" target="_blank" rel="noreferrer" className={styles.ctaBtn}>
            Написати в Telegram
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className="container">
          <p>© 2026 Анастасія Коваль. Спеціаліст по запускам та масштабуванню.</p>
        </div>
      </footer>
    </section>
  )
}
