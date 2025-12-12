import { SERVICE_AREAS, COMPANY_INFO } from '@/lib/constants'

export default function ServiceArea() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section Header */}
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Service Area
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Proudly Serving Miami-Dade & Broward County
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            We provide fast, reliable plumbing services throughout South Florida. 
            If you don&apos;t see your area listed, give us a call — we may still be able to help!
          </p>

          {/* Areas Grid */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-medium transition-colors"
              >
                <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

