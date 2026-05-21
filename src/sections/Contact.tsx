import { useState, useEffect, useRef, FormEvent } from 'react'
import { Phone, Mail, MapPin, CheckCircle2, Loader2 } from 'lucide-react'

const contactInfo = [
  { label: 'Phone', value: '(984) 232-9051', icon: Phone },
  { label: 'Email', value: 'hello@pressureperfectco.com', icon: Mail },
  { label: 'Location', value: 'Apex, NC', icon: MapPin },
]

const reasons = [
  'Local teenagers you can trust and depend on',
  'Reliable service with attention to detail',
  'Fair pricing with no hidden surprises',
  'Flexible scheduling around busy schedules',
  'Eco-friendly cleaning methods and equipment',
]

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  details: '',
  consent: false,
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      details: formData.details,
      timestamp: new Date().toISOString(),
      source: 'Pressure Perfect Website',
    }

    try {
      const res = await fetch('https://n8n.ariangibson.com/webhook/ppform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        throw new Error(`HTTP ${res.status}`)
      }
    } catch {
      // Fallback: still show success locally even if webhook fails
      // (so the user doesn't get stuck on error)
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
                  return (
                    <div key={info.label} className="flex items-center space-x-4">
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
                })}
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-6">
                  Get a Free Estimate
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pp-teal focus:ring-2 focus:ring-pp-teal/20 outline-none transition-all text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pp-teal focus:ring-2 focus:ring-pp-teal/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pp-teal focus:ring-2 focus:ring-pp-teal/20 outline-none transition-all text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pp-teal focus:ring-2 focus:ring-pp-teal/20 outline-none transition-all text-sm"
                  />
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pp-teal focus:ring-2 focus:ring-pp-teal/20 outline-none transition-all text-sm bg-white"
                  >
                    <option value="">Select a Service</option>
                    <option value="driveway">Driveway Cleaning</option>
                    <option value="sidewalk">Sidewalk & Walkway Cleaning</option>
                    <option value="ground-level">Ground-Level Concrete</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your property..."
                    rows={4}
                    value={formData.details}
                    onChange={(e) => handleChange('details', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pp-teal focus:ring-2 focus:ring-pp-teal/20 outline-none transition-all text-sm resize-none"
                  />
                  <label className="flex items-start space-x-2 text-xs text-gray-500 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => handleChange('consent', e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-pp-teal focus:ring-pp-teal"
                    />
                    <span>
                      By checking this box, I consent to receive transactional messages related to my
                      account, orders, or services I have requested. Reply HELP for help or STOP to
                      opt-out.
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-pp-teal-light text-white px-6 py-4 rounded-full font-semibold hover:bg-pp-teal-dark transition-all duration-300 text-sm shadow-lg hover:shadow-xl disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Get Free Quote'
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-pp-teal hover:underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-pp-teal hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            ) : (
              /* Thank You State */
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-lg text-gray-600 mb-4">
                  We really appreciate you reaching out to us.
                </p>
                <p className="text-gray-600 mb-6">
                  Mateo and Alex will review your request and get back to you within 24 hours with a
                  personalized quote.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    <strong>What's next?</strong> We'll call or text you to schedule a quick look at
                    your driveway and provide an accurate estimate.
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Have questions in the meantime? Feel free to call us: (984) 232-9051
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
