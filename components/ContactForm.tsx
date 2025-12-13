'use client'

import { useState } from 'react'
import { SERVICES, COMPANY_INFO } from '@/lib/constants'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-10 h-10 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-2">
          <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-base font-bold text-white mb-1">Request Received!</h3>
        <p className="text-gray-400 text-sm mb-2">We&apos;ll get back to you within 24 hours.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-primary-500 font-semibold hover:underline text-xs"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <div id="contact-form" className="py-6 md:py-8 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Form Side */}
          <div className="lg:col-span-3">
            <p className="text-gray-500 uppercase tracking-[0.12em] text-[10px] font-medium mb-1">
              Get In Touch
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Request a Free Estimate
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-gray-400 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-medium text-gray-400 mb-1">
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  >
                    <option value="" className="bg-gray-900">Select service</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.id} className="bg-gray-900">
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                  placeholder="Brief description..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-4 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-primary-600/30 hover:shadow-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Get Free Estimate
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info Side */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 md:p-5 text-white border border-white/10">
            <h3 className="text-base font-bold mb-3">Contact Info</h3>
            
            <div className="space-y-3">
              <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px]">Phone</p>
                  <p className="font-semibold text-sm group-hover:text-primary-400 transition-colors">{COMPANY_INFO.phone}</p>
                </div>
              </a>
              
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px]">Email</p>
                  <p className="font-semibold text-sm group-hover:text-primary-400 transition-colors">{COMPANY_INFO.email}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px]">Hours</p>
                  <p className="font-semibold text-sm">24/7 Available</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px]">Service Area</p>
                  <p className="font-semibold text-sm">Miami-Dade & Broward</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
