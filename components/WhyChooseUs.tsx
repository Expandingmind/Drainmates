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
    <section ref={sectionRef} className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why <span className="text-primary-500">Drainmates</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto">
            Professional plumbing with integrity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group bg-black p-8 md:p-10 hover:bg-white/[0.02] transition-all duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }}
            >
              {/* Number */}
              <div className="text-primary-500/20 text-5xl md:text-6xl font-bold mb-4 group-hover:text-primary-500/40 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
