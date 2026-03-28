import styles from './Hero.module.css'
import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function Hero() {
  const { lang } = useLang()
  const tx = t[lang].hero

  return (
    <section id="top" className={styles.hero}>
      <div
        className="blob"
        style={{
          width: 500, height: 500,
          background: 'var(--blob-1)',
          top: -120, left: -120,
        }}
      />
      <div
        className="blob"
        style={{
          width: 300, height: 300,
          background: 'var(--blob-2)',
          top: 250, right: -60,
        }}
      />
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h1 className={styles.title}>{tx.title}</h1>
          <p className={styles.name}>{tx.name}</p>
          <ul className={styles.creds}>
            {tx.creds.map(c => <li key={c}>{c}</li>)}
          </ul>
          <div className={styles.actions}>
            <a href="#packages" className={styles.btnPrimary}>{tx.btnPrimary}</a>
            <a href="#contact" className={styles.btnSecondary}>{tx.btnSecondary}</a>
          </div>
        </div>
        <div className={styles.imgWrap}>
          <div className={styles.imgGlow} />
          <div className={styles.imgCircle}>
            <div className={styles.initials}>АК</div>
          </div>
        </div>
      </div>
    </section>
  )
}
