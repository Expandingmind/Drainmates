import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'Contact | Drainmates Plumbing',
  description: 'Get in touch with Drainmates for plumbing services in Miami-Dade & Broward County. Request a free estimate or call us for 24/7 emergency service.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="bg-black text-white py-12 md:py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 uppercase tracking-[0.12em] text-[10px] md:text-xs font-medium mb-2">
            Get In Touch
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Have a plumbing emergency or need a quote? We&apos;re here to help 24/7.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* FAQ */}
      <section className="py-10 md:py-14 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-gray-500 uppercase tracking-[0.12em] text-[10px] md:text-xs font-medium mb-2">
              Got Questions?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Find answers to common questions about our services.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
    </main>
  )
}
