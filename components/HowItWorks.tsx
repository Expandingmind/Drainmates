import { HOW_IT_WORKS } from '@/lib/constants'

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-4">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Simple, Stress-Free Service
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Getting your plumbing fixed shouldn&apos;t be complicated. Here&apos;s how we make it easy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {HOW_IT_WORKS.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Line */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              )}
              
              <div className="text-center relative z-10">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-black text-white text-3xl font-bold mb-6 shadow-lg">
                  {item.step}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

