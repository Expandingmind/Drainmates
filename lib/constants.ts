export const COMPANY_INFO = {
  name: 'Drainmates',
  tagline: 'Fast, Reliable Plumbing — Done Right the First Time.',
  phone: '(786) 803-6594',
  email: 'info@drainmates.com',
  address: '123 Main Street',
  city: 'Miami',
  state: 'FL',
  zip: '33101',
  hours: {
    weekdays: '24/7',
    saturday: '24/7',
    sunday: '24/7',
    emergency: '24/7',
  },
}

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/#about' },
  { name: 'Reviews', href: '/#reviews' },
  { name: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    shortDesc: 'Professional drain cleaning to restore flow and eliminate clogs fast.',
    icon: 'drain',
    details: [
      'Kitchen, bathroom, and floor drain cleaning',
      'Safe for all pipe types',
      'Preventive maintenance available',
    ],
  },
  {
    id: 'hydro-jetting',
    title: 'Hydro Jetting',
    shortDesc: 'High-pressure water jetting to clear stubborn blockages and buildup.',
    icon: 'water',
    details: [
      'Removes grease, scale, and root intrusion',
      'Cleans entire pipe interior',
      'Eco-friendly solution',
    ],
  },
  {
    id: 'clog-removal',
    title: 'Clog Removal',
    shortDesc: 'Fast clog removal for toilets, sinks, showers, and tubs.',
    icon: 'wrench',
    details: [
      'Toilets, sinks, showers, and tubs',
      'Same-day service available',
      'Upfront pricing before work begins',
    ],
  },
  {
    id: 'leak-detection',
    title: 'Leak Detection & Repair',
    shortDesc: 'Find and fix hidden leaks before they cause major damage.',
    icon: 'search',
    details: [
      'Non-invasive detection technology',
      'Slab leak specialists',
      'Prevents water damage and mold',
    ],
  },
  {
    id: 'pipe-repair',
    title: 'Pipe Repair & Replacement',
    shortDesc: 'Expert pipe repair and replacement for all plumbing systems.',
    icon: 'pipe',
    details: [
      'Copper, PVC, PEX, and galvanized',
      'Trenchless options available',
      'Code-compliant installations',
    ],
  },
  {
    id: 'water-heater',
    title: 'Water Heater Services',
    shortDesc: 'Installation, repair, and maintenance for tank and tankless units.',
    icon: 'flame',
    details: [
      'Tank and tankless water heaters',
      'Same-day installations',
      'Energy-efficient upgrades',
    ],
  },
  {
    id: 'sewer-camera',
    title: 'Sewer Camera Inspection',
    shortDesc: 'HD video inspection to diagnose sewer and drain issues accurately.',
    icon: 'camera',
    details: [
      'Real-time video inspection',
      'Locate blockages and damage',
      'Digital recording provided',
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency Plumbing',
    shortDesc: 'Available 24/7 for urgent plumbing emergencies.',
    icon: 'emergency',
    details: [
      'Available 24 hours, 7 days a week',
      'Fast response times',
      'No extra charge for after-hours calls',
    ],
  },
  {
    id: 'garbage-disposal',
    title: 'Garbage Disposal',
    shortDesc: 'Repair and installation of garbage disposal units.',
    icon: 'disposal',
    details: [
      'All major brands serviced',
      'New unit installations',
      'Quick, mess-free repairs',
    ],
  },
  {
    id: 'faucet-fixture',
    title: 'Faucet & Fixture Replacement',
    shortDesc: 'Upgrade your faucets and fixtures with professional installation.',
    icon: 'faucet',
    details: [
      'Kitchen and bathroom faucets',
      'Showerheads and valves',
      'Water-saving fixtures available',
    ],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Michael R.',
    role: 'HOMEOWNER',
    rating: 5,
    quote: 'Called at 11pm with a burst pipe. Drainmates was there in 30 minutes and had everything fixed by midnight. Incredible service!',
    date: 'NOV 2024',
    initial: 'M',
  },
  {
    name: 'Sarah K.',
    role: 'PROPERTY MANAGER',
    rating: 5,
    quote: 'I manage 15 rental properties and Drainmates is my go-to. Always professional, always on time, always fair pricing.',
    date: 'OCT 2024',
    initial: 'S',
  },
  {
    name: 'David L.',
    role: 'HOMEOWNER',
    rating: 5,
    quote: 'They found a hidden leak that two other plumbers missed. Saved us thousands in potential water damage. Highly recommend!',
    date: 'OCT 2024',
    initial: 'D',
  },
  {
    name: 'Jennifer M.',
    role: 'BUSINESS OWNER',
    rating: 5,
    quote: 'Our restaurant needed emergency drain cleaning before a health inspection. Drainmates came same-day and saved our business.',
    date: 'SEP 2024',
    initial: 'J',
  },
  {
    name: 'Robert T.',
    role: 'HOMEOWNER',
    rating: 5,
    quote: 'New water heater installed in one day. Clean work, no mess, and they even hauled away the old unit. Great experience!',
    date: 'SEP 2024',
    initial: 'R',
  },
  {
    name: 'Amanda C.',
    role: 'REALTOR',
    rating: 5,
    quote: 'I recommend Drainmates to all my buyers and sellers. They do thorough inspections and their reports are detailed and honest.',
    date: 'AUG 2024',
    initial: 'A',
  },
]

export const SERVICE_AREAS = [
  // Miami-Dade
  'Miami',
  'Miami Beach',
  'Hialeah',
  'Coral Gables',
  'Doral',
  'Kendall',
  'Homestead',
  // Broward
  'Fort Lauderdale',
  'Hollywood',
  'Pembroke Pines',
  'Miramar',
  'Pompano Beach',
  'Davie',
  'Plantation',
  'Weston',
  'Sunrise',
  // Palm Beach
  'West Palm Beach',
  'Boca Raton',
  'Boynton Beach',
  'Delray Beach',
  'Palm Beach Gardens',
  'Jupiter',
]

export const FAQ_ITEMS = [
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes! We provide free, no-obligation estimates for all plumbing services. We\'ll assess your situation and give you upfront pricing before any work begins.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve Miami-Dade, Broward, and Palm Beach County, including Miami, Fort Lauderdale, West Palm Beach, Boca Raton, and surrounding communities.',
  },
  {
    question: 'Do you handle emergency calls?',
    answer: 'Absolutely. We offer 24/7 emergency plumbing services. Whether it\'s a burst pipe at midnight or a backed-up sewer on a holiday, we\'re here to help.',
  },
  {
    question: 'How quickly can you respond?',
    answer: 'For emergencies, we typically arrive within 30-60 minutes. For scheduled appointments, we offer same-day and next-day availability in most cases.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer: 'We accept cash, checks, and all major credit cards. We also offer financing options for larger projects.',
  },
  {
    question: 'Do you guarantee your work?',
    answer: 'Yes, all our work is backed by a satisfaction guarantee. We also provide warranties on parts and labor. If you\'re not happy, we\'ll make it right.',
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured for your peace of mind.',
    icon: 'shield',
  },
  {
    title: 'Upfront Pricing',
    description: 'Know the cost before we start. No surprises, no hidden fees.',
    icon: 'dollar',
  },
  {
    title: 'Clean, Respectful Techs',
    description: 'Our technicians treat your home like their own. Booties and drop cloths standard.',
    icon: 'sparkle',
  },
  {
    title: 'Fast Response Times',
    description: 'Same-day service available. Emergency calls answered 24/7.',
    icon: 'clock',
  },
  {
    title: 'Quality Parts',
    description: 'We use professional-grade parts that last, backed by manufacturer warranties.',
    icon: 'check',
  },
  {
    title: 'Satisfaction Guarantee',
    description: 'Not happy with our work? We\'ll come back and make it right, guaranteed.',
    icon: 'thumbsup',
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Call or Request Estimate',
    description: 'Give us a call or fill out our online form. We\'ll gather details about your plumbing issue.',
  },
  {
    step: 2,
    title: 'Diagnose + Upfront Quote',
    description: 'Our tech will assess the problem and provide a clear, written quote before starting any work.',
  },
  {
    step: 3,
    title: 'Fast Repair + Clean Finish',
    description: 'We complete the job efficiently, clean up after ourselves, and ensure you\'re 100% satisfied.',
  },
]

export const ABOUT = {
  paragraph1: 'At Drainmates, we believe every home and business deserves fast, honest, and professional plumbing service. We\'ve been serving Miami-Dade, Broward, and Palm Beach County with a simple mission: fix the problem right the first time, at a fair price, with zero hassle.',
  paragraph2: 'Our team of licensed plumbers brings decades of combined experience to every job — from simple drain cleaning to complex pipe repairs. We show up on time, communicate clearly, protect your property, and leave your space cleaner than we found it.',
}

