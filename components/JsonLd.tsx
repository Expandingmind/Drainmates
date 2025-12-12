import { COMPANY_INFO, SERVICES } from '@/lib/constants'

export default function JsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: COMPANY_INFO.name,
    description: 'Professional plumbing services including drain cleaning, leak repair, water heater installation, and 24/7 emergency plumbing in Orlando and Central Florida.',
    url: 'https://drainmates.com',
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: COMPANY_INFO.city,
      addressRegion: COMPANY_INFO.state,
      postalCode: COMPANY_INFO.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.5383',
      longitude: '-81.3792',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '18:00',
      },
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '28.5383',
        longitude: '-81.3792',
      },
      geoRadius: '50000',
    },
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Check',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plumbing Services',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDesc,
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}

