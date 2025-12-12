'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_LINKS, COMPANY_INFO } from '@/lib/constants'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 md:py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm">
          <p className="hidden sm:block text-gray-300">
            24/7 Emergency Plumbing • Same-Day Service • Free Estimates
          </p>
          <p className="sm:hidden text-gray-300 text-center w-full text-xs">
            24/7 Emergency • Same-Day Service
          </p>
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 text-white hover:text-primary-400 transition-colors font-medium group"
          >
            Request Estimate
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <nav
        className={`bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'shadow-lg shadow-black/20' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform">
                <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-lg md:text-xl font-bold">
                <span className="text-primary-500">Drain</span>
                <span className="text-white">mates</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm tracking-wide relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-2 text-white border border-white/30 hover:border-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-full transition-all hover:bg-white/10 font-medium text-sm group"
              >
                <svg className="w-4 h-4 group-hover:animate-bounce-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-500 text-white px-5 xl:px-6 py-2 xl:py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-primary-600/30 hover:shadow-primary-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Free Estimate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 -mr-2 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-[11px] rotate-45' : 'top-1'}`}></span>
                <span className={`absolute left-0 top-[11px] block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-[11px] -rotate-45' : 'top-[21px]'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-[96px] md:top-[104px] bg-black/98 backdrop-blur-md transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className={`px-4 py-6 space-y-1 transition-all duration-300 delay-100 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}>
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block text-gray-300 hover:text-white transition-all font-medium py-3 text-lg border-b border-white/10 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className={`pt-6 space-y-3 transition-all duration-300 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: isMobileMenuOpen ? '250ms' : '0ms' }}>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-center gap-3 text-white border border-white/30 px-6 py-4 rounded-full font-medium text-lg active:scale-95 transition-transform"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="block text-center bg-primary-600 hover:bg-primary-500 text-white px-6 py-4 rounded-full font-semibold text-lg transition-all active:scale-95"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
