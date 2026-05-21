import { useEffect, useRef, useState } from 'react'
import { Check, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Small Project',
    price: '$180',
    description: 'Typical townhome or compact driveway (under 800 sq ft)',
    features: [
      'Basic Surface Restorations',
      'Concrete Driveway Cleaning',
      'Weed Removal From Cracks',
    ],
    popular: false,
  },
  {
    name: 'Medium Project',
    price: '$250',
    description: 'Standard suburban driveway (800-1200 sq ft)',
    features: [
      'Multiple Surface Restorations',
      'Concrete Driveway Cleaning',
      'Front Walkway Cleaning',
      'Weed Removal From Cracks',
    ],
    popular: true,
  },
  {
    name: 'Large Project',
    price: '$320',
    description: 'Larger properties and multi-car driveways (1200+ sq ft)',
    features: [
      'Multiple Surfaces & Extreme Buildup',
      'Concrete Driveway Cleaning',
      'Walkway + Sidewalk Cleaning',
      'Patio or Stone Walkway',
      'Weed Removal From Cracks',
    ],
    popular: false,
  },
]

const included = [
  { left: 'Free estimates for all Apex properties', right: '100% satisfaction guarantee' },
  { left: 'Flexible scheduling around busy schedules', right: 'No hidden fees or surprise charges' },
]

export default function Pricing() {
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
    <section id="pricing" ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-semibold tracking-widest text-pp-teal uppercase mb-3 block">
            Investment
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Example{' '}
            <span className="bg-gradient-to-r from-pp-teal to-pp-teal-light bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sample pricing for common driveway sizes. Every job is different - contact us for your specific quote.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 flex flex-col h-full transition-all duration-500 border ${
                plan.popular
                  ? 'border-pp-teal/30 shadow-2xl ring-2 ring-pp-teal/10 scale-[1.02] z-10'
                  : 'border-gray-100 shadow-lg hover:shadow-xl hover:border-pp-teal/20'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-pp-teal-light text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center flex-1">
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">{plan.name}</h3>
                <div className="text-5xl font-bold text-pp-teal mb-2">{plan.price}</div>
                <div className="text-gray-500 text-sm mb-8">{plan.description}</div>
                <ul className="space-y-3 text-left mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-gray-700">
                      <Check className="w-4 h-4 text-pp-teal mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`block text-center px-4 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-pp-teal-light text-white hover:bg-pp-teal-dark shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-800 hover:bg-pp-teal/10 hover:text-pp-teal'
                  }`}
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-8">What's Included</h3>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {included.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-pp-teal mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item.left}</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-pp-teal mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item.right}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6 italic">
              *Final pricing based on actual measurements and surface condition
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
