import { useState, useEffect } from 'react'
import styles from './Nav.module.css'
import ThemeToggle from './ThemeToggle'
import LangToggle from './LangToggle'
import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang } = useLang()
  const tx = t[lang].nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>{tx.logo}</a>
        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {tx.links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className={styles.ctaBtn} onClick={() => setOpen(false)}>
              {tx.cta}
            </a>
          </li>
        </ul>
        <div className={styles.navRight}>
          <LangToggle />
          <ThemeToggle />
          <button
            className={styles.burger}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
