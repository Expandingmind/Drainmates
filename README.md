# Drainmates - Professional Plumbing Website

A modern, high-converting website for Drainmates plumbing company built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Mobile-first** responsive design
- 🔍 **SEO optimized** with metadata and JSON-LD
- 🎯 **High-converting** layout with strategic CTAs
- ♿ **Accessible** with proper ARIA labels and focus states

## Pages

- **Home** (`/`) - Hero, services overview, testimonials, about, and contact form
- **Services** (`/services`) - Detailed service listings with anchor links
- **Contact** (`/contact`) - Contact form, FAQ, and business information

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
/app
  layout.tsx          # Root layout with header/footer
  page.tsx            # Home page
  globals.css         # Global styles
  /services
    page.tsx          # Services page
  /contact
    page.tsx          # Contact page
/components
  Header.tsx          # Navigation header
  Footer.tsx          # Site footer
  Hero.tsx            # Home hero section
  ServicesGrid.tsx    # Services cards grid
  HowItWorks.tsx      # 3-step process section
  WhyChooseUs.tsx     # Value propositions
  Testimonials.tsx    # Customer reviews
  ServiceArea.tsx     # Service area listing
  CTAStrip.tsx        # Call-to-action banner
  About.tsx           # About section
  ContactForm.tsx     # Contact form component
  FAQ.tsx             # FAQ accordion
  JsonLd.tsx          # Structured data
/lib
  constants.ts        # Site data and content
```

## Customization

### Update Business Info

Edit `/lib/constants.ts` to update:
- Company name, phone, email, address
- Business hours
- Services offered
- Testimonials
- Service areas
- FAQ content

### Styling

- Colors are defined in `tailwind.config.ts`
- Primary accent color uses Tailwind's red palette
- Global styles in `app/globals.css`

## Deployment

### GitHub Pages

This site can be deployed to GitHub Pages with static export:

```bash
npm run build
```

### Vercel (Recommended)

Deploy instantly with [Vercel](https://vercel.com):

1. Push to GitHub
2. Import to Vercel
3. Deploy

## License

MIT License - Feel free to use this template for your business.



