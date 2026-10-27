export interface NavItem {
  label: string;
  href: string;
}

export const BRAND_CONFIG = {
  name: 'Ambrrosial Essence',
  tagline: 'A fragrance that feels unmistakably yours.',
  heroStatement: 'Discover fragrances that express your mood, complement your moments, and leave a beautiful impression.',
  announcementText: 'Curated Luxury Fragrances • Visit Our Boutique or Inquire Online for Scent Consultation',
  googleMapsUrl: 'https://maps.app.goo.gl/73XdMpMmq2bEa4np9',
  logos: {
    dark: '/assets/logo/ae-logo-dark.webp',
    light: '/assets/logo/ae-logo-light.webp',
    squareDark: '/assets/logo/logo (1).jpg',
    squareLight: '/assets/logo/logo (2).jpg',
  },
  heroImage: '/assets/hero/hero-desert-perfume.webp',
  navItems: [
    { label: 'Collection', href: '#collection' },
    { label: 'Notes Story', href: '#notes-story' },
    { label: 'Accords', href: '#ingredients' },
    { label: 'Scent Matcher', href: '#scent-matcher' },
    { label: 'Our Story', href: '#story' },
    { label: 'Find Us', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ],
  editorialQuotes: [
    {
      quote: "Perfume is the key to our memories, an invisible aura of pure individuality.",
      author: "Ambrrosial Essence Philosophy"
    }
  ],
  story: {
    badge: "Editorial Philosophy",
    headline: "More than a fragrance. A personal expression.",
    paragraphs: [
      "Fragrance is the most intimate form of memory and self-expression. At Ambrrosial Essence, every composition is curated to mirror your individuality—unfolding with confidence, sophistication, and quiet grace.",
      "From delicate floral symphonies and uplifting citrus notes to deeply sensual amber and smoky oud harmonies, our collection invites you to discover an essence that lingers as an authentic extension of who you are.",
      "Each flacon is designed to accompany you through everyday moments and unforgettable occasions alike—leaving an enduring impression without ever shouting."
    ]
  },
  storeLocation: {
    title: "Visit Ambrrosial Essence",
    invitation: "Step into our serene fragrance sanctuary to experience our curated compositions in person, test accords on your skin, and discover your signature scent with our attentive boutique guidance.",
    actionText: "Get Directions via Google Maps",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8!2d77.2!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
  }
};
