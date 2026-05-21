import { useEffect, useRef, useState } from 'react'

const neighborhoods = [
  {
    image: '/images/bella_casa.jpg',
    alt: 'Bella Casa neighborhood',
    name: 'Bella Casa',
    description: 'Beautiful residential community with custom homes and well-maintained properties.',
  },
  {
    image: '/images/abbington.jpg',
    alt: 'Abbington neighborhood',
    name: 'Abbington',
    description: 'Established neighborhood featuring traditional homes with mature landscaping.',
  },
  {
    image: '/images/haddon_hall.jpg',
    alt: 'Haddon Hall neighborhood',
    name: 'Haddon Hall',
    description: 'Prestigious neighborhood known for elegant homes and pristine exteriors.',
  },
  {
    image: '/images/scotts_mill.jpg',
    alt: "Scott's Mill neighborhood",
    name: "Scott's Mill",
    description: 'Family-friendly community with diverse architectural styles and active residents.',
  },
]

export default function ServiceArea() {
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
    <section
      id="service-area"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-semibold tracking-widest text-pp-teal uppercase mb-3 block">
            Where We Work
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Service{' '}
            <span className="bg-gradient-to-r from-pp-teal to-pp-teal-light bg-clip-text text-transparent">
              Area
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly serving Apex neighborhoods with personalized, local service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto mb-16">
          {/* Map */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4 md:p-6 hover:shadow-2xl transition-shadow duration-500">
              <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingBottom: '60%', height: 0 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25925.89794921474!2d-78.85265847832029!3d35.73284437089374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf1b0e6de8ef3%3A0x8b7b3c6c7e3a3d4e!2sApex%20Nature%20Park!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus&zoom=14"
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-2xl"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Service Area Map - Apex, NC"
                />
              </div>
              <div className="mt-6 text-center bg-gradient-to-r from-pp-teal/5 to-pp-purple/5 rounded-xl p-4">
                <p className="text-sm font-medium text-gray-700">
                  Local Neighborhood Service in and Around Apex, NC
                </p>
              </div>
            </div>

            {/* Service Promise */}
            <div className="bg-gradient-to-r from-pp-teal/10 to-pp-purple/10 rounded-2xl p-6 border border-pp-teal/20 mt-6">
              <h4 className="text-lg font-display font-bold text-gray-800 mb-3 flex items-center">
                <svg
                  className="w-5 h-5 text-pp-teal mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Local Service Promise
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Same-day response</strong> in all Apex neighborhoods. As local Apex high
                school students, we take pride in keeping our hometown driveways beautiful. Free
                estimates and flexible scheduling around school hours that works with your busy
                family life.
              </p>
            </div>
          </div>

          {/* Neighborhoods */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-2">
              Neighborhoods We Serve
            </h3>
            <p className="text-gray-600 mb-8">
              Local expertise in your neighborhood with personalized service
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {neighborhoods.map((nb, index) => (
                <div
                  key={nb.name}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={nb.image}
                      alt={nb.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-3">
                      <h4 className="text-white font-display font-bold text-lg">{nb.name}</h4>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{nb.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
