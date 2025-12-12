'use client'

import { useEffect, useRef, useState } from 'react'
import { HOW_IT_WORKS } from '@/lib/constants'

export default function HowItWorks() {
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
    <section ref={sectionRef} className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-8 md:mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-500 uppercase tracking-[0.12em] text-[10px] md:text-xs font-medium mb-2">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
            Simple, Stress-Free Service
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
            Getting your plumbing fixed shouldn&apos;t be complicated.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {HOW_IT_WORKS.map((item, index) => (
            <div 
              key={item.step} 
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Connector Line - Desktop Only */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className={`hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transition-all duration-1000 ${
                  isVisible ? 'scale-x-100' : 'scale-x-0'
                }`} style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : '0ms', transformOrigin: 'left' }}></div>
              )}
              
              <div className="text-center relative z-10 group">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-black text-white text-xl md:text-2xl font-bold mb-3 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:bg-primary-600 ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: isVisible ? `${index * 100 + 50}ms` : '0ms' }}>
                  {item.step}
                </div>
                
                {/* Content */}
                <h3 className="text-sm md:text-base font-bold text-black mb-1.5 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-[200px] mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
