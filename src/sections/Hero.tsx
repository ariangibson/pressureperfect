import { useRef, useEffect, useState } from 'react'
import { Star, Phone } from 'lucide-react'

const VIDEO_SRC = '/hero_video.mp4'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const onPlay = () => setReady(true)
    v.addEventListener('play', onPlay)

    return () => {
      v.removeEventListener('play', onPlay)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Video Background - with smooth looping */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Lighter overlays - video shows through more */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-black/10 to-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto pb-20 pt-28">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 transition-all duration-700 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Serving Apex & surrounding areas</span>
        </div>

        {/* Headline */}
        <h1
          className={`font-display text-5xl sm:text-6xl md:text-7xl font-bold max-w-5xl mx-auto leading-[1.05] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)] transition-all duration-700 delay-150 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ letterSpacing: '-1.5px' }}
        >
          Professional{' '}
          <span className="text-pp-teal-light">Pressure Washing</span>{' '}
          in Apex, NC
        </h1>

        {/* Description */}
        <p
          className={`text-lg sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed text-white/90 font-body drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] transition-all duration-700 delay-300 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Driveway, sidewalk, and concrete cleaning by local students Alex & Mateo.
          Honest work, fair prices, and a spotless finish every time.
        </p>

        {/* CTA Row */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-450 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center bg-white text-pp-black rounded-full px-10 py-4 text-base font-bold hover:scale-[1.04] hover:bg-pp-teal-light hover:text-white transition-all duration-200 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:9842329051"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-6 py-4 text-base font-semibold hover:bg-white/20 transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            <span>(984) 232-9051</span>
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className={`mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 transition-all duration-700 delay-600 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-white text-sm ml-2 font-semibold">Trusted in Apex</span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/20" />

          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 max-w-sm">
            <p className="text-sm text-white/90 italic">
              &ldquo;Alex and Mateo did an amazing job removing algae and dirt buildup.&rdquo;
            </p>
            <p className="text-xs text-white/70 mt-1 font-bold">— Anna G, Bella Casa</p>
          </div>
        </div>
      </div>
    </section>
  )
}
