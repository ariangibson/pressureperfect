import { Droplets, MapPin, Phone, Mail } from 'lucide-react'

const footerServices = [
  { label: 'Driveway Cleaning', href: '#services' },
  { label: 'Sidewalk Cleaning', href: '#services' },
  { label: 'Ground-Level Concrete', href: '#services' },
  { label: 'View Pricing', href: '#pricing' },
]

const footerLinks = [
  { label: 'Service Area', href: '#service-area' },
  { label: 'About Us', href: '#about' },
]

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Pressure Perfect" className="h-12 w-auto brightness-0 invert" />
              <span className="text-2xl font-display font-bold">Pressure Perfect</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Reliable driveway cleaning services by local Apex high school students. Honest work,
              fair prices, community focused.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-gray-800/80 px-3 py-1.5 rounded-full text-gray-400 border border-gray-700/50">
                Serving Apex, NC
              </span>
              <span className="bg-gray-800/80 px-3 py-1.5 rounded-full text-gray-400 border border-gray-700/50">
                Your Neighborhood Cleaning Team
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleClick(item.href)
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <Droplets className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">(984) 232-9051</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">hello@pressureperfectco.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">Apex, NC</span>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick('#contact')
                  }}
                  className="inline-block bg-pp-teal-light text-white px-6 py-3 rounded-full font-semibold hover:bg-pp-teal-dark transition-all duration-300 text-sm shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Pressure Perfect. All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(link.href)
                  }}
                  className="text-gray-500 hover:text-pp-teal transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="text-gray-600 text-xs">Built with care in Apex, NC</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
