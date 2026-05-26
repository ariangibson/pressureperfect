import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import About from './sections/About'
import ServiceArea from './sections/ServiceArea'
import Pricing from './sections/Pricing'
import Contact from './sections/Contact'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'

const pageFromHash = () => {
  const h = window.location.hash.replace('#', '')
  if (h === 'terms') return 'terms'
  if (h === 'privacy') return 'privacy'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(pageFromHash)

  useEffect(() => {
    const handler = () => setPage(pageFromHash())
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  const isLegal = page === 'terms' || page === 'privacy'

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main className={isLegal ? 'min-h-[70vh]' : ''}>
        {page === 'home' && (
          <>
            <Hero />
            <Services />
            <Gallery />
            <About />
            <ServiceArea />
            <Pricing />
            <Contact />
          </>
        )}
        {page === 'terms' && <TermsOfService />}
        {page === 'privacy' && <PrivacyPolicy />}
      </main>
      <Footer />
    </div>
  )
}
