'use client'

import { useEffect, useRef, useState } from 'react'

const features = [
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured for your peace of mind.',
  },
  {
    title: 'Upfront Pricing',
    description: 'Know the cost before we start. No surprises, no hidden fees.',
  },
  {
    title: 'Clean & Respectful',
    description: 'We treat your home like our own. Booties and drop cloths standard.',
  },
  {
    title: 'Fast Response',
    description: 'Same-day service available. Emergency calls answered 24/7.',
  },
  {
    title: 'Quality Parts',
    description: 'Professional-grade parts backed by manufacturer warranties.',
  },
  {
    title: '100% Guaranteed',
    description: 'Not satisfied? We\'ll come back and make it right.',
  },
]

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-10 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-6 md:mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Why <span className="text-primary-500">Drainmates</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
            Professional plumbing with integrity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group bg-black p-4 sm:p-6 md:p-8 hover:bg-white/[0.02] transition-all duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }}
            >
              {/* Number */}
              <div className="text-primary-500/50 text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-3 group-hover:text-primary-500 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Title */}
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed hidden sm:block">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
