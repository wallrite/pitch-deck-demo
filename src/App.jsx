import './App.css'
import { LangProvider } from './LangContext'
import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'
import ServiceDetails from './components/ServiceDetails'
import Pricing from './components/Pricing'
import AdditionalServices from './components/AdditionalServices'
import Cases from './components/Cases'
import Contact from './components/Contact'
import Nav from './components/Nav'

function App() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Packages />
        <ServiceDetails />
        <Pricing />
        <AdditionalServices />
        <Cases />
        <Contact />
      </main>
    </LangProvider>
  )
}

export default App
