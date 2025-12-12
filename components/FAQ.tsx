'use client'

import { useState, useEffect, useRef } from 'react'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-500 uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm font-medium mb-3 md:mb-4">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base md:text-lg px-4">
            Have questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, 
            feel free to reach out directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className={`divide-y divide-gray-200 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`py-4 md:py-6 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100 + 300}ms` : '0ms' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between text-left group py-2"
              >
                <span className="text-base md:text-lg font-medium text-black pr-6 md:pr-8 group-hover:text-primary-600 transition-colors">
                  {item.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  <div className={`w-9 md:w-10 h-9 md:h-10 rounded-full bg-gray-100 group-hover:bg-primary-50 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 bg-primary-50' : ''
                  }`}>
                    <svg className={`w-4 md:w-5 h-4 md:h-5 transition-colors ${
                      openIndex === index ? 'text-primary-600' : 'text-gray-500'
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed pt-2 md:pt-4 pr-12 md:pr-16 text-sm md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
