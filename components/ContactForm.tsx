'use client'

import { useState, useEffect, useRef } from 'react'
import { COMPANY_INFO } from '@/lib/constants'

interface ContactFormProps {
  fullWidth?: boolean
}

export default function ContactForm({ fullWidth = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('Thank you for your request! We will contact you within 24 hours.')
    setIsSubmitting(false)
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const serviceOptions = [
    'Drain Cleaning',
    'Leak Repair',
    'Water Heater',
    'Sewer/Camera Inspection',
    'Emergency',
    'Other',
  ]

  return (
    <section ref={sectionRef} id="contact-form" className={`py-16 md:py-24 bg-black ${fullWidth ? '' : 'scroll-mt-32'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            We respond within 24 hours
          </p>
        </div>

        <div className={`max-w-3xl mx-auto ${fullWidth ? 'lg:max-w-4xl' : ''}`}>
          <form 
            onSubmit={handleSubmit} 
            className={`bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-2xl transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              {/* Name */}
              <div className="group">
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 md:py-4 border-b-2 border-gray-200 focus:border-primary-500 outline-none transition-all text-gray-800 placeholder-gray-400 text-base bg-transparent group-hover:border-gray-300"
                />
              </div>

              {/* Phone */}
              <div className="group">
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 md:py-4 border-b-2 border-gray-200 focus:border-primary-500 outline-none transition-all text-gray-800 placeholder-gray-400 text-base bg-transparent group-hover:border-gray-300"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 md:py-4 border-b-2 border-gray-200 focus:border-primary-500 outline-none transition-all text-gray-800 placeholder-gray-400 text-base bg-transparent group-hover:border-gray-300"
                />
              </div>

              {/* Service Type */}
              <div className="group">
                <label htmlFor="service" className="sr-only">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 md:py-4 border-b-2 border-gray-200 focus:border-primary-500 outline-none transition-all text-gray-800 bg-white appearance-none cursor-pointer text-base group-hover:border-gray-300"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.5rem center',
                    backgroundSize: '1.5rem',
                  }}
                >
                  <option value="" disabled>Project type *</option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6 md:mb-8 group">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Brief project description (optional)"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3.5 md:py-4 border-b-2 border-gray-200 focus:border-primary-500 outline-none transition-all text-gray-800 placeholder-gray-400 resize-none text-base bg-transparent group-hover:border-gray-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white py-3.5 md:py-4 px-8 rounded-full font-semibold text-base md:text-lg transition-all flex items-center justify-center gap-2 group hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Request Estimate
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className={`mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 text-center transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex flex-col items-center gap-2 md:gap-3 text-gray-400 hover:text-white transition-colors group p-4"
            >
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600/30 group-hover:scale-110 transition-all">
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-sm md:text-base">{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex flex-col items-center gap-2 md:gap-3 text-gray-400 hover:text-white transition-colors group p-4"
            >
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600/30 group-hover:scale-110 transition-all">
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm md:text-base">{COMPANY_INFO.email}</span>
            </a>
            <div className="flex flex-col items-center gap-2 md:gap-3 text-gray-400 p-4">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm md:text-base">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
