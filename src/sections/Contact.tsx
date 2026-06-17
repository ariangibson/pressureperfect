import { useState, useEffect, useRef } from 'react'
import { Phone, Mail, MapPin, CheckCircle2, MessageSquare } from 'lucide-react'

const contactInfo = [
  { label: 'Phone', value: '(984) 232-9051', icon: Phone, href: 'tel:984-232-9051' },
  { label: 'Email', value: 'hello@pressureperfectco.com', icon: Mail, href: 'mailto:hello@pressureperfectco.com' },
  { label: 'Location', value: 'Apex, NC', icon: MapPin, href: null },
]

const reasons = [
  'Local teenagers you can trust and depend on',
  'Reliable service with attention to detail',
  'Fair pricing with no hidden surprises',
  'Flexible scheduling around busy schedules',
  'Eco-friendly cleaning methods and equipment',
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-semibold tracking-widest text-pp-teal uppercase mb-3 block">
            Reach Out
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In{' '}
            <span className="bg-gradient-to-r from-pp-teal to-pp-teal-light bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your driveway? Contact us for a free quote today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Info */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Why Choose */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-6">
                Why Choose Alex & Mateo?
              </h3>
              <ul className="space-y-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-center text-gray-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-pp-teal mr-3 flex-shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  const content = (
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-pp-teal rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-pp-teal/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-gray-800 text-sm">
                          {info.label}
                        </h4>
                        <p className="text-gray-600 text-sm">{info.value}</p>
                      </div>
                    </div>
                  )
                  return info.href ? (
                    <a
                      key={info.label}
                      href={info.href}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right side - CTA */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-gradient-to-br from-pp-teal to-pp-teal-light rounded-3xl p-8 shadow-xl text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Get Your Free Quote
              </h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                We would love to hear from you! Reach out by phone or email and we will get back to you with a personalized estimate.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:984-232-9051"
                  className="flex items-center justify-center gap-3 w-full bg-white text-pp-teal px-6 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-sm shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call (984) 232-9051
                </a>
                <a
                  href="mailto:hello@pressureperfectco.com"
                  className="flex items-center justify-center gap-3 w-full bg-white/20 text-white px-6 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 text-sm border border-white/30"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
              <p className="text-white/70 text-sm mt-6">
                Available Monday - Saturday, 8am - 6pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
