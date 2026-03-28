import styles from './Contact.module.css'
import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function Contact() {
  const { lang } = useLang()
  const tx = t[lang].contact

  return (
    <section id="contact" className="section">
      <div
        className="blob"
        style={{
          width: 500, height: 500,
          background: 'var(--blob-1)',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.inner}>
          <h2 className={styles.title}>{tx.title}</h2>
          <p className={styles.sub}>{tx.sub}</p>

          <div className={styles.contacts}>
            {tx.items.map(item => (
              <a
                key={item.label}
                href={item.href}
                className={styles.contactItem}
                {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className={styles.icon}>{item.icon}</span>
                <div>
                  <span className={styles.label}>{item.label}</span>
                  <span className={styles.value}>{item.value}</span>
                </div>
              </a>
            ))}
          </div>

          <a href={tx.ctaHref} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
            {tx.cta}
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className="container">
          <p>{tx.footer}</p>
        </div>
      </footer>
    </section>
  )
}
