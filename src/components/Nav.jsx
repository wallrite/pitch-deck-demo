import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#services', label: 'Послуги' },
  { href: '#packages', label: 'Пакети' },
  { href: '#pricing', label: 'Ціни' },
  { href: '#cases', label: 'Кейси' },
  { href: '#contact', label: 'Контакти' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>Анастасія Коваль</a>
        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className={styles.ctaBtn} onClick={() => setOpen(false)}>
              Зв&apos;язатись
            </a>
          </li>
        </ul>
        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
