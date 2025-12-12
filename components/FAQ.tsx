'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Got Questions?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, 
            feel free to reach out directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="divide-y divide-gray-200">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-black pr-8">
                  {item.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
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

