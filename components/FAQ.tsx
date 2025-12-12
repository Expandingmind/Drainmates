'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-2 md:space-y-3">
      {FAQ_ITEMS.map((item, index) => (
        <div 
          key={index} 
          className="bg-white/5 rounded-lg md:rounded-xl border border-white/10 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-3 md:py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
          >
            <span className="text-sm md:text-base font-semibold text-white pr-4">{item.question}</span>
            <svg 
              className={`w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${
            openIndex === index ? 'max-h-48' : 'max-h-0'
          }`}>
            <p className="px-4 pb-3 md:pb-4 text-gray-400 text-xs md:text-sm leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
