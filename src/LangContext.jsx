import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

function getInitialLang() {
  const stored = localStorage.getItem('lang')
  if (stored === 'uk' || stored === 'en') return stored
  return 'uk'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  const toggle = () => setLang(l => {
    const next = l === 'uk' ? 'en' : 'uk'
    localStorage.setItem('lang', next)
    return next
  })

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
