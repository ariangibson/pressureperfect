import { useEffect, useRef, useState } from 'react'

const galleryItems = [
  {
    image: '/images/driveway.jpg',
    alt: 'Concrete driveway transformation in Bella Casa, Apex NC',
    badge: 'Driveway',
    title: 'Concrete Driveway Transformation',
    description: 'Removed years of neglected dirt and grime buildup from this Bella Casa driveway',
  },
  {
    image: '/images/sidewalk.jpg',
    alt: 'Sidewalk restoration in Abbington neighborhood',
    badge: 'Sidewalk',
    title: 'Sidewalk Restoration',
    description: 'Restored original concrete appearance on this Abbington neighborhood sidewalk',
  },
  {
    image: '/images/stone_walkway.jpg',
    alt: 'Stone paver cleaning in Scotts Mill',
    badge: 'Stone Pavers',
    title: 'Stone Paver Cleaning',
    description: 'Beautiful restoration of paver walkway and stone patio surfaces in Scott\'s Mill',
  },
]

export default function Gallery() {
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
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-semibold tracking-widest text-pp-teal uppercase mb-3 block">
            Results
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Before &{' '}
            <span className="bg-gradient-to-r from-pp-teal to-pp-teal-light bg-clip-text text-transparent">
              After
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the incredible driveway and concrete transformations we've achieved for Apex homeowners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-pp-teal text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  {item.badge}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-gray-800 mb-2 text-lg group-hover:text-pp-teal transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
