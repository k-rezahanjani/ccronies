/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': {'min': '1535px'},
      'xl': {'min': '992px'},
      'lg': {'max': '991px'},
      'md': {'max': '768px'},
      'sm': {'max': '639px'},
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "hero-pattern": "url('/images/pattern.png')",
      },
      backgroundSize: {
        'large': '19rem',
        'small': '8rem',
      }
    },
  },
  plugins: [],
}
