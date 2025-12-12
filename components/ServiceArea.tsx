'use client'

import { useEffect, useRef, useState } from 'react'
import { SERVICE_AREAS } from '@/lib/constants'

export default function ServiceArea() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section Header */}
          <p className={`text-gray-500 uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm font-medium mb-3 md:mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Service Area
          </p>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Proudly Serving Miami-Dade & Broward County
          </h2>
          <p className={`text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 px-4 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            We provide fast, reliable plumbing services throughout South Florida. 
            If you don&apos;t see your area listed, give us a call — we may still be able to help!
          </p>

          {/* Areas Grid */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
            {SERVICE_AREAS.map((area, index) => (
              <span
                key={area}
                className={`inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-gray-100 hover:bg-primary-50 hover:border-primary-200 border border-transparent rounded-full text-gray-700 hover:text-primary-700 font-medium transition-all duration-300 text-sm md:text-base cursor-default hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 30}ms` : '0ms' }}
              >
                <svg className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
