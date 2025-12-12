export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-gray-400 text-sm">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">8+</p>
                  <p className="text-gray-400 text-sm">Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              About Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Your Local Plumbing Experts
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                At Drainmates, we believe every home and business deserves fast, honest, and professional plumbing service. 
                We&apos;ve been serving Miami-Dade and Broward County with a simple mission: fix the problem right the first time, 
                at a fair price, with zero hassle.
              </p>
              <p>
                Our team of licensed plumbers brings decades of combined experience to every job — from simple drain cleaning 
                to complex pipe repairs. We show up on time, communicate clearly, protect your property, and leave your space 
                cleaner than we found it. That&apos;s the Drainmates guarantee.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <span className="text-primary-600 font-bold text-lg">100%</span>
                <span className="text-gray-600 text-sm">Satisfaction Rate</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <span className="text-primary-600 font-bold text-lg">A+</span>
                <span className="text-gray-600 text-sm">BBB Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

