import Link from 'next/link'
import { SERVICES } from '@/lib/constants'

const serviceImages: { [key: string]: string } = {
  'drain-cleaning': 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop',
  'hydro-jetting': '/images/hydro-jetting.jpeg',
  'clog-removal': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
  'leak-detection': '/images/leak-detection.jpeg',
  'pipe-repair': '/images/pipe-repair.jpeg',
  'water-heater': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop',
  'sewer-camera': '/images/sewer-camera.jpeg',
  'emergency': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
  'garbage-disposal': '/images/garbage-disposal.jpeg',
  'faucet-fixture': 'https://images.unsplash.com/photo-1585351650024-2a347b0d7ad5?w=800&h=600&fit=crop',
}

const iconMap: { [key: string]: JSX.Element } = {
  drain: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  water: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
    </svg>
  ),
  wrench: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  pipe: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  flame: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    </svg>
  ),
  camera: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  emergency: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  disposal: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  faucet: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
}

export const metadata = {
  title: 'Services | Drainmates Plumbing',
  description: 'Professional plumbing services in Miami-Dade, Broward & Palm Beach County. Drain cleaning, leak repair, water heater installation, and 24/7 emergency service.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="bg-black text-white py-12 md:py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 uppercase tracking-[0.12em] text-[10px] md:text-xs font-medium mb-2">
            What We Do
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Plumbing Services
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            From emergency repairs to routine maintenance, we handle it all. Licensed, insured, and committed to getting the job done right.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 md:py-14 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                id={service.id}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${serviceImages[service.id] || ''})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-black/50 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 group-hover:bg-primary-600/80 transition-colors">
                    {iconMap[service.icon] || iconMap.drain}
                  </div>
                  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h2>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-5 md:p-6">
                  <p className="text-gray-400 text-sm md:text-base mb-4">
                    {service.shortDesc}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-primary-600/20 btn-hover-lift"
                  >
                    Get Free Estimate
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-sm md:text-base mb-4 md:mb-6 max-w-lg mx-auto">
            Contact us today for a free estimate. We&apos;ll assess your needs and provide upfront pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary-600 px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm transition-all shadow-lg btn-hover-lift"
          >
            Get Your Free Estimate
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
