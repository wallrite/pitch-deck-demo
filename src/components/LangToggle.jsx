import { useLang } from '../LangContext'
import styles from './LangToggle.module.css'

export default function LangToggle() {
  const { lang, toggle } = useLang()
  return (
    <button className={styles.toggle} onClick={toggle} aria-label="Switch language">
      <span className={lang === 'uk' ? styles.active : ''}>УК</span>
      <span className={styles.sep}>|</span>
      <span className={lang === 'en' ? styles.active : ''}>EN</span>
    </button>
  )
}
