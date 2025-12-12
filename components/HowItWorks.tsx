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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-500 uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm font-medium mb-3 md:mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6">
            Simple, Stress-Free Service
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Getting your plumbing fixed shouldn&apos;t be complicated. Here&apos;s how we make it easy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {HOW_IT_WORKS.map((item, index) => (
            <div 
              key={item.step} 
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Connector Line - Desktop Only */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className={`hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 transition-all duration-1000 ${
                  isVisible ? 'scale-x-100' : 'scale-x-0'
                }`} style={{ transitionDelay: isVisible ? `${(index + 1) * 200}ms` : '0ms', transformOrigin: 'left' }}>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              )}
              
              <div className="text-center relative z-10 group">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-black text-white text-2xl md:text-3xl font-bold mb-4 md:mb-6 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-primary-600 ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: isVisible ? `${index * 150 + 100}ms` : '0ms' }}>
                  {item.step}
                </div>
                
                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto text-sm md:text-base">
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
