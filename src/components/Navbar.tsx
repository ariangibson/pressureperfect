import { useState, useEffect } from 'react'
import { Home, Droplets, Images, Users, Banknote, Mail, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Services', href: '#services', icon: Droplets },
  { label: 'Gallery', href: '#gallery', icon: Images },
  { label: 'About', href: '#about', icon: Users },
  { label: 'Pricing', href: '#pricing', icon: Banknote },
  { label: 'Contact', href: '#contact', icon: Mail },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop
        if (window.scrollY >= top - 200) {
          current = section.getAttribute('id') || 'home'
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="flex items-center space-x-0 group"
          >
            <img
              src="/logo.png"
              alt="Pressure Perfect"
              className="h-12 sm:h-14 w-auto group-hover:opacity-90 transition-opacity duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`relative flex items-center space-x-1.5 py-2 px-3 rounded-full text-sm font-medium transition-all duration-300 group ${
                    isActive
                      ? 'text-pp-teal bg-pp-teal/10'
                      : 'text-gray-700 hover:text-pp-teal hover:bg-pp-teal/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-pp-teal rounded-full transition-all duration-300 ${
                      isActive ? 'w-6' : 'w-0 group-hover:w-6'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
            className="hidden lg:inline-flex items-center bg-pp-teal-light text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-pp-teal-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ willChange: 'transform' }}
          >
            Get Free Quote
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/98 backdrop-blur-md border-t border-gray-100 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-pp-teal/10 text-pp-teal font-semibold'
                    : 'text-gray-600 hover:bg-pp-teal/5 hover:text-pp-teal'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            )
          })}
          <div className="pt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              className="block text-center bg-pp-teal-light text-white px-6 py-3 rounded-full font-semibold hover:bg-pp-teal-dark transition-colors duration-300 text-sm shadow-lg"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
