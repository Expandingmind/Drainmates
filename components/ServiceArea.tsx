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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-8 md:py-10 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-4 md:mb-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-500 uppercase tracking-[0.12em] text-[10px] md:text-xs font-medium mb-1">
            Service Area
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
            Serving Miami-Dade, Broward & Palm Beach
          </h2>
          <p className="text-gray-400 text-xs md:text-sm">
            Fast, reliable plumbing services throughout South Florida.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
          {SERVICE_AREAS.map((area, index) => (
            <div 
              key={area} 
              className={`px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-full text-[10px] md:text-xs font-medium text-gray-300 border border-white/10 hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 20}ms` : '0ms' }}
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
