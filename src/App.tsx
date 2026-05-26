import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import About from './sections/About'
import ServiceArea from './sections/ServiceArea'
import Pricing from './sections/Pricing'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <ServiceArea />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
