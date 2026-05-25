import { useEffect, useRef, useState } from 'react'
import { Droplets, Footprints, LayoutGrid, Check } from 'lucide-react'

const services = [
  {
    title: 'Driveway Cleaning',
    description:
      'Concrete, stone, and paver driveways. We remove dirt, algae, and everyday buildup to restore your driveway\'s appearance.',
    icon: Droplets,
    gradient: 'from-blue-50 to-white',
    features: ['Concrete Driveways', 'Seasonal Algae Removal', 'Stone & Paver Surfaces', 'Surface Restoration'],
  },
  {
    title: 'Sidewalk & Walkway Cleaning',
    description:
      'Front walks, side paths, and connecting walkways. Safe, thorough cleaning of all your concrete surfaces.',
    icon: Footprints,
    gradient: 'from-green-50 to-white',
    features: ['Front Walkways', 'Side Paths', 'Connecting Walkways', 'Entrance Areas'],
  },
  {
    title: 'Ground-Level Concrete',
    description:
      'Patios and other concrete surfaces. All work performed safely at ground level.',
    icon: LayoutGrid,
    gradient: 'from-purple-50 to-white',
    features: ['Concrete Patios', 'Ground-Level Surfaces', 'Safety-First Approach'],
  },
]

export default function Services() {
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-semibold tracking-widest text-pp-teal uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-pp-teal to-pp-teal-light bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide consistent and reliable concrete and stone restoration services to keep your property looking its best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group relative bg-gradient-to-br ${service.gradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pp-teal/30 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-pp-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pp-teal/20">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-4 group-hover:text-pp-teal transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <Check className="w-4 h-4 text-pp-teal mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
