import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div
        className="blob"
        style={{
          width: 500, height: 500,
          background: 'rgba(99,102,241,0.2)',
          top: -120, left: -120,
        }}
      />
      <div
        className="blob"
        style={{
          width: 300, height: 300,
          background: 'rgba(59,130,246,0.12)',
          top: 250, right: -60,
        }}
      />
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Спеціаліст по&nbsp;запускам та&nbsp;масштабуванню
          </h1>
          <p className={styles.name}>Анастасія Коваль</p>
          <ul className={styles.creds}>
            <li>Авторка 15+ курсів</li>
            <li>Консультант малого бізнесу</li>
            <li>Засновниця та CEO школи іноземних мов Eagles</li>
          </ul>
          <div className={styles.actions}>
            <a href="#packages" className={styles.btnPrimary}>Переглянути пакети</a>
            <a href="#contact" className={styles.btnSecondary}>Зв&apos;язатись</a>
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
