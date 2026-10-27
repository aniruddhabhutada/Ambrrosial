export interface Product {
  id: string;
  slug: string;
  name: string;
  spellingNote?: string;
  shortDescription: string;
  fullDescription: string;
  price: number | null; // null indicates "Price on request"
  priceDisplay: string;
  primaryImage: string | null;
  gallery: string[];
  assetStatus: 'verified' | 'pending_boutique_imagery';
  assetNote: string;
  categories: Array<'Floral' | 'Sweet and playful' | 'Warm and sensual' | 'Fresh and uplifting' | 'Bold and vibrant'>;
  featured: boolean;
  notesSummary?: {
    opening?: string[];
    heart?: string[];
    base?: string[];
  };
  disclaimer?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'mystical-lavendar',
    slug: 'mystical-lavendar',
    name: 'Mystical Lavendar',
    spellingNote: "Store catalog spelling is preserved as 'Mystical Lavendar'. Physical bottle is imprinted as 'Mystical Lavender'.",
    shortDescription: 'A sensual blend of aged oud, velvety rose, warm saffron, and soft amber.',
    fullDescription: 'Mystical Lavendar is an opulent, sensual fragrance that blends rich aged oud wood with velvety Taif rose, warm saffron, and soft golden amber. It opens with an intoxicating burst of saffron and sparkling citrus, unfolds into a heart of smoky florals, and settles into a deep, musky base made for personal distinction.',
    price: null,
    priceDisplay: 'Price on request',
    primaryImage: '/assets/products/mystical-lavender-ai.jpg',
    gallery: [
      '/assets/products/mystical-lavender-ai.jpg',
      '/assets/hero/hero-desert-perfume.jpg',
    ],
    assetStatus: 'verified',
    assetNote: 'Studio commercial flacon on travertine limestone.',
    categories: ['Warm and sensual', 'Floral'],
    featured: true,
    notesSummary: {
      opening: ['Saffron Threads', 'Sparkling Citrus'],
      heart: ['Velvety Rose', 'Smoky Spices'],
      base: ['Aged Oud Wood', 'Golden Amber', 'Soft Musk'],
    },
  },
  {
    id: 'pink-chiffon',
    slug: 'pink-chiffon',
    name: 'Pink Chiffon',
    shortDescription: 'An enchanting blend of juicy red pear, delicate peony, chiffon musk, and creamy vanilla.',
    fullDescription: 'Pink Chiffon is a soft, sweet, and ultra-feminine fragrance that captures the essence of pure lightness and romance. It opens with juicy red pear and wild berries, blossoms into delicate peony and night jasmine, and finishes with a creamy blend of vanilla, coconut milk, and chiffon musk.',
    price: null,
    priceDisplay: 'Price on request',
    primaryImage: '/assets/products/pink-chiffon-ai.jpg',
    gallery: [
      '/assets/products/pink-chiffon-ai.jpg',
    ],
    assetStatus: 'verified',
    assetNote: 'Faceted crystal flacon on silk plinth.',
    categories: ['Sweet and playful', 'Floral'],
    featured: true,
    notesSummary: {
      opening: ['Juicy Red Pear', 'Wild Berries'],
      heart: ['Night Jasmine', 'Pink Peony'],
      base: ['Creamy Vanilla', 'Chiffon Musk'],
    },
  },
  {
    id: '1000-wishes',
    slug: '1000-wishes',
    name: '1000 Wishes',
    shortDescription: 'A sparkling, celebratory extrait with champagne effervescence, star fruit, and warm sugared amber.',
    fullDescription: '1000 Wishes is a warm, sparkling, and celebratory fragrance that feels like an evening of golden festivities. It opens with the effervescence of vintage champagne and sweet star fruit, melts into soft peony and dewy freesia, and settles into almond cream, golden amber, and sugared musk.',
    price: null,
    priceDisplay: 'Price on request',
    primaryImage: '/assets/products/1000-wishes-ai.jpg',
    gallery: [
      '/assets/products/1000-wishes-ai.jpg',
    ],
    assetStatus: 'verified',
    assetNote: 'Prismatic crystal flacon in golden hour light.',
    categories: ['Warm and sensual', 'Sweet and playful', 'Fresh and uplifting'],
    featured: true,
    notesSummary: {
      opening: ['Champagne Effervescence', 'Sweet Star Fruit'],
      heart: ['Soft Peony', 'Dewy Freesia'],
      base: ['Almond Cream', 'Golden Amber', 'Sugared Musk'],
    },
  },
  {
    id: 'bloom-mist',
    slug: 'bloom-mist',
    name: 'Bloom Mist',
    shortDescription: 'Crisp morning floral elegance featuring dewy white jasmine petals, fresh mandarin, and blonde woods.',
    fullDescription: 'Bloom Mist is a sophisticated and airy fragrance that celebrates the fresh blossoms of early dawn. It features crisp mandarin zest and morning dew drops combined with white jasmine, soft magnolia, and blonde cedarwood.',
    price: null,
    priceDisplay: 'Price on request',
    primaryImage: '/assets/products/bloom-mist-ai.jpg',
    gallery: [
      '/assets/products/bloom-mist-ai.jpg',
    ],
    assetStatus: 'verified',
    assetNote: 'Frosted cylindrical flacon on dewy stone.',
    categories: ['Floral', 'Fresh and uplifting'],
    featured: true,
    notesSummary: {
      opening: ['Fresh Mandarin', 'Morning Dew Petals'],
      heart: ['White Jasmine', 'Soft Magnolia'],
      base: ['Blonde Cedar', 'Clean Skin Musk'],
    },
  },
  {
    id: 'bombshell',
    slug: 'bombshell',
    name: 'Bombshell',
    shortDescription: 'A bold, vibrant fruity-floral extrait with juicy purple passionfruit, ruby berries, and golden vanilla.',
    fullDescription: 'Bombshell is an intoxicating, glamorous fragrance that radiates confidence. Bursting with sun-drenched passionfruit, pink grapefruit, and crushed ruby berries, it unfolds into a vibrant heart of vanilla orchid and purple peony, resting on clean musk and warm blonde woods.',
    price: null,
    priceDisplay: 'Price on request',
    primaryImage: '/assets/products/bombshell-ai.jpg',
    gallery: [
      '/assets/products/bombshell-ai.jpg',
    ],
    assetStatus: 'verified',
    assetNote: 'Jeweled emerald-faceted flacon on Italian marble.',
    categories: ['Bold and vibrant', 'Fresh and uplifting', 'Floral'],
    featured: false,
    notesSummary: {
      opening: ['Purple Passionfruit', 'Pink Grapefruit', 'Ruby Berries'],
      heart: ['Vanilla Orchid', 'Purple Peony'],
      base: ['Warm Blonde Woods', 'Sensual Musk'],
    },
  },
  {
    id: 'gucci-flora',
    slug: 'gucci-flora',
    name: 'Flora Blossom',
    shortDescription: 'An opulent gardenia blossom composition with luminous citrus nectar and warm sandalwood.',
    fullDescription: 'Flora Blossom is an ode to blooming Mediterranean gardens at daybreak. Featuring white gardenia, orange blossoms, and pear blossom with an exquisite touch of brown sugar and warm patchouli wood.',
    price: null,
    priceDisplay: 'Price on request',
    primaryImage: '/assets/products/flora-blossom-ai.jpg',
    gallery: [
      '/assets/products/flora-blossom-ai.jpg',
    ],
    assetStatus: 'verified',
    assetNote: 'Hexagonal flacon with gold filigree stopper on Carrara marble.',
    categories: ['Floral'],
    featured: false,
    notesSummary: {
      opening: ['Pear Blossom', 'Italian Mandarin'],
      heart: ['White Gardenia', 'Orange Flower Nectar'],
      base: ['Brown Sugar', 'Warm Sandalwood'],
    },
  },
];

export const FRAGRANCE_CATEGORIES = [
  'All',
  'Floral',
  'Sweet and playful',
  'Warm and sensual',
  'Fresh and uplifting',
  'Bold and vibrant',
] as const;
