/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sahar: {
          bg: '#ffffff',
          sand: '#eeebe6',
          'sand-light': '#f5f2ed',
          border: '#e3dfd8',
          dark: '#121110',
          muted: '#57534e',
          subtle: '#6c6760',
          accent: '#9e4318', // Terracotta bronze
          cream: '#faf8f5',
        },
        ivory: {
          DEFAULT: '#F7F3EC',
          light: '#FBF9F5',
          dark: '#EFE9DE',
        },
        champagne: {
          DEFAULT: '#E7D5B5',
          light: '#F4ECE0',
          dark: '#D6C097',
        },
        espresso: {
          DEFAULT: '#121110',
          dark: '#0f0e0d',
          deep: '#0a0908',
          muted: '#2a2624',
        },
        bronze: {
          DEFAULT: '#9e4318',
          light: '#ba5827',
          dark: '#7c3412',
          accent: '#c4693b',
        },
        charcoal: {
          DEFAULT: '#57534e',
          light: '#6c6760',
          dark: '#121110',
        },
        gold: {
          DEFAULT: '#D4AF37',
          soft: '#E5C97A',
          deep: '#A38421',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Host Grotesk"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'luxury': '0.22em',
        'ultra-luxury': '0.32em',
        'widest-luxury': '0.22em',
        'subtle-luxury': '0.12em',
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(36, 26, 23, 0.08)',
        'luxury-hover': '0 20px 40px -15px rgba(36, 26, 23, 0.14)',
        'luxury-drawer': '-10px 0 35px rgba(22, 17, 15, 0.25)',
      }
    },
  },
  plugins: [],
}
