import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div
        className="blob"
        style={{
          width: 400, height: 400,
          background: 'rgba(120,50,200,0.35)',
          top: -100, left: -80,
        }}
      />
      <div
        className="blob"
        style={{
          width: 300, height: 300,
          background: 'rgba(180,50,100,0.25)',
          top: 200, right: -60,
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
