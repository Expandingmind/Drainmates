import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import HowItWorks from '@/components/HowItWorks'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import ServiceArea from '@/components/ServiceArea'
import CTAStrip from '@/components/CTAStrip'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <About />
      <ServiceArea />
      <CTAStrip />
      <ContactForm />
    </main>
  )
}
