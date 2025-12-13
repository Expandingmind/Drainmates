import Link from 'next/link'
import { COMPANY_INFO, NAV_LINKS, SERVICE_AREAS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3 md:mb-4 group">
              <div className="w-7 h-7 bg-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xs">D</span>
              </div>
              <span className="text-white font-bold text-base tracking-tight">
                DRAINMATES
              </span>
            </Link>
            <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 max-w-xs">
              Professional plumbing services for homes and businesses in Miami-Dade, Broward & Palm Beach.
            </p>
            <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-400">
              <svg className="w-3.5 h-3.5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed & Insured
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs md:text-sm mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-primary-400 text-xs md:text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold text-xs md:text-sm mb-3 md:mb-4">Service Areas</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {SERVICE_AREAS.slice(0, 6).map((area) => (
                <li key={area} className="text-gray-400 text-xs md:text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs md:text-sm mb-3 md:mb-4">Contact</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} 
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 text-xs md:text-sm transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 text-xs md:text-sm transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24/7 Available
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-6 md:mt-8 pt-4 md:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-[10px] md:text-xs">
          <p>&copy; {new Date().getFullYear()} Drainmates. All rights reserved.</p>
          <p>Serving Miami-Dade, Broward & Palm Beach</p>
        </div>
      </div>
    </footer>
  )
}
