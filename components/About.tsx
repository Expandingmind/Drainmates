'use client'

import { useEffect, useRef, useState } from 'react'
import { ABOUT } from '@/lib/constants'

export default function About() {
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
    <section ref={sectionRef} id="about" className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Image/Stats Side */}
          <div className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Placeholder Image with Stats Overlay */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg md:rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                Professional Plumbing Image
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-3 md:p-4">
                <div className="flex justify-around text-center text-white">
                  <div>
                    <p className="text-xl md:text-2xl font-bold">500+</p>
                    <p className="text-[10px] md:text-xs text-gray-300">Projects</p>
                  </div>
                  <div className="w-px bg-white/20"></div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold">8+</p>
                    <p className="text-[10px] md:text-xs text-gray-300">Years</p>
                  </div>
                  <div className="w-px bg-white/20"></div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold">100%</p>
                    <p className="text-[10px] md:text-xs text-gray-300">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <p className="text-gray-500 uppercase tracking-[0.12em] text-[10px] md:text-xs font-medium mb-2">
              About Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 md:mb-4">
              Your Local Plumbing Experts
            </h2>
            <div className="space-y-3 md:space-y-4 text-gray-600 text-sm md:text-base mb-4 md:mb-6">
              <p className="leading-relaxed">{ABOUT.paragraph1}</p>
              <p className="leading-relaxed">{ABOUT.paragraph2}</p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Satisfaction Rate
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                A+ BBB Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
