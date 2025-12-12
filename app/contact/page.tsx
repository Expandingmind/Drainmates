import type { Metadata } from 'next'
import { COMPANY_INFO } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Contact Us | Drainmates Plumbing',
  description: 'Get a free plumbing estimate from Drainmates. Contact us for drain cleaning, leak repair, water heater installation, and 24/7 emergency plumbing services in Orlando & Central Florida.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-400 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Have a plumbing emergency or need a quote? We&apos;re here to help 24/7. 
              Fill out the form below or give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Call Us</p>
                <p className="font-semibold text-black">{COMPANY_INFO.phone}</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email Us</p>
                <p className="font-semibold text-black">{COMPANY_INFO.email}</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Service Area</p>
                <p className="font-semibold text-black">{COMPANY_INFO.city}, {COMPANY_INFO.state} & Central Florida</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Hours</p>
                <p className="font-semibold text-black">24/7 Emergency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm fullWidth />

      {/* FAQ Section */}
      <FAQ />

      {/* Map Placeholder */}
      <section className="bg-gray-100">
        <div className="aspect-[21/9] w-full flex items-center justify-center bg-gray-200">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-500">Map placeholder — Serving {COMPANY_INFO.city} & Central Florida</p>
          </div>
        </div>
      </section>
    </>
  )
}

