'use client'

import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS_ROW_1 = [
  {
    name: 'Carlos R.',
    role: 'CONTRACTOR',
    roleColor: 'text-green-500',
    quote: 'I subcontract Drainmates for all my plumbing needs. Best emergency response in Miami-Dade.',
    date: 'OCT 2024',
    initial: 'C',
  },
  {
    name: 'Robert H.',
    role: 'HOMEOWNER',
    roleColor: 'text-green-500',
    quote: 'Fixed our clogged drain in under an hour. Professional, clean, and fairly priced.',
    date: 'NOV 2024',
    initial: 'R',
  },
  {
    name: 'Maria S.',
    role: 'PROPERTY MANAGER',
    roleColor: 'text-green-500',
    quote: 'Water damage repair done perfectly. You can\'t even tell where the damage was. Excellent...',
    date: 'OCT 2024',
    initial: 'M',
  },
  {
    name: 'James T.',
    role: 'HOMEOWNER',
    roleColor: 'text-green-500',
    quote: 'Called at 11pm with a burst pipe. They were here in 30 minutes. True professionals.',
    date: 'SEP 2024',
    initial: 'J',
  },
  {
    name: 'David K.',
    role: 'BUSINESS OWNER',
    roleColor: 'text-primary-500',
    quote: 'Office plumbing overhaul completed on schedule and price was exactly as quoted.',
    date: 'NOV 2024',
    initial: 'D',
  },
  {
    name: 'Sarah L.',
    role: 'HOMEOWNER',
    roleColor: 'text-green-500',
    quote: 'New water heater installed same day. Excellent service from start to finish.',
    date: 'AUG 2024',
    initial: 'S',
  },
]

const TESTIMONIALS_ROW_2 = [
  {
    name: 'Michael W.',
    role: 'INVESTOR',
    roleColor: 'text-primary-500',
    quote: 'Used Drainmates on multiple flips. Fast, affordable, and always top-notch quality.',
    date: 'NOV 2024',
    initial: 'M',
  },
  {
    name: 'Jennifer A.',
    role: 'HOMEOWNER',
    roleColor: 'text-green-500',
    quote: 'Kitchen and bathroom drain cleaning exceeded expectations. So detail-oriented!',
    date: 'OCT 2024',
    initial: 'J',
  },
  {
    name: 'Tony G.',
    role: 'BUSINESS OWNER',
    roleColor: 'text-primary-500',
    quote: 'Restaurant drain emergency done fast. Minimal disruption to our business. Highly recommend.',
    date: 'SEP 2024',
    initial: 'T',
  },
  {
    name: 'Amanda K.',
    role: 'REALTOR',
    roleColor: 'text-primary-500',
    quote: 'My go-to for all listing prep. They make homes sell faster with their quality work.',
    date: 'NOV 2024',
    initial: 'A',
  },
  {
    name: 'Steve B.',
    role: 'HOMEOWNER',
    roleColor: 'text-green-500',
    quote: 'Garage water heater replacement was perfect. Clean work and great communication throughout.',
    date: 'OCT 2024',
    initial: 'S',
  },
  {
    name: 'Linda P.',
    role: 'HOMEOWNER',
    roleColor: 'text-green-500',
    quote: 'Pool house plumbing installation was spotless. Would definitely use again.',
    date: 'SEP 2024',
    initial: 'L',
  },
]

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

function ReviewCard({ testimonial }: { testimonial: typeof TESTIMONIALS_ROW_1[0] }) {
  return (
    <div className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px] bg-[#1a1a1a] rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 border border-white/10 mx-1.5 md:mx-2">
      {/* Header */}
      <div className="flex items-start justify-between mb-2 md:mb-3">
        <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-gray-700 flex items-center justify-center text-white text-[10px] md:text-xs font-medium">
          {testimonial.initial}
        </div>
      </div>
      
      {/* Stars */}
      <div className="flex gap-0.5 mb-1.5 md:mb-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* Name & Role */}
      <h4 className="text-white font-semibold text-xs md:text-sm">{testimonial.name}</h4>
      <p className={`text-[10px] md:text-xs font-medium mb-2 md:mb-3 ${testimonial.roleColor}`}>{testimonial.role}</p>
      
      {/* Quote */}
      <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed mb-2 md:mb-4 line-clamp-2 md:line-clamp-3">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      
      {/* Date */}
      <p className="text-gray-600 text-[10px] md:text-xs">{testimonial.date}</p>
    </div>
  )
}

export default function Testimonials() {
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

  // Triple the cards for seamless loop
  const row1Cards = [...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1]
  const row2Cards = [...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2]

  return (
    <section ref={sectionRef} id="reviews" className="py-10 md:py-14 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Why Homeowners Love Drainmates
            </h2>
            <div className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
              <span className="font-semibold">50+ reviews</span>
              <span>with an overall</span>
              <span className="font-semibold">4.9 star ranking</span>
              <div className="flex gap-0.5 ml-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-white rounded-full text-white font-semibold text-sm hover:bg-white hover:text-black transition-colors self-start md:self-auto"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Leave a Review
          </a>
        </div>
      </div>

      {/* Scrolling Reviews Container */}
      <div className="relative py-8 md:py-10">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        {/* Row 1 - Scrolls Right to Left */}
        <div className="mb-4 overflow-hidden">
          <div className="flex animate-scroll-left">
            {row1Cards.map((testimonial, index) => (
              <ReviewCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
        
        {/* Row 2 - Scrolls Left to Right */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-right">
            {row2Cards.map((testimonial, index) => (
              <ReviewCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Google Verified Badge */}
      <div className="py-4 flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300">
          <GoogleIcon />
          <span className="font-medium">Google Verified Reviews</span>
        </div>
      </div>
    </section>
  )
}
