import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Clock, DollarSign, MapPin, Sun } from 'lucide-react'

const values = [
  {
    title: 'Reliable & On Time',
    description: 'We show up when scheduled and complete every job properly.',
    icon: Clock,
  },
  {
    title: 'Fair, Honest Pricing',
    description: 'Transparent pricing with no hidden fees or surprises.',
    icon: DollarSign,
  },
  {
    title: 'Local Apex Knowledge',
    description: 'We know the neighborhoods and understand community needs.',
    icon: MapPin,
  },
  {
    title: 'Summer Availability',
    description: 'Flexible scheduling around school hours and summer break.',
    icon: Sun,
  },
]

export default function About() {
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-semibold tracking-widest text-pp-teal uppercase mb-3 block">
            Meet Us
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet the{' '}
            <span className="bg-gradient-to-r from-pp-teal to-pp-teal-light bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two hardworking teenagers bringing reliable driveway cleaning to Apex.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Bio Card */}
          <div
            className={`bg-gradient-to-br from-pp-teal/5 via-white to-pp-purple/5 rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-center space-x-6 mb-8">
              <div className="relative">
                <img
                  src="/images/boys.jpg"
                  alt="Alex and Mateo - Pressure Perfect team"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                  Alex & Mateo
                </h3>
                <p className="text-pp-teal font-semibold text-lg mt-1">Student Entrepreneurs</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              As local high school students, Mateo and Alex started Pressure Perfect to earn money
              during summer break while helping their community. They take pride in showing up on
              time, working hard, and leaving every driveway looking great. What started as a summer
              job has become a trusted service for Apex families.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mt-4">
              Their commitment to quality work and honest business practices has earned them loyal
              customers throughout the community. Every driveway cleaned is a step toward their
              college goals.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className={`flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 group ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-pp-teal rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-pp-teal/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-800 text-lg mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
