/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0d1117',
        'bg-card':    '#1a1d23',
        'border-card':'#2a2d35',
        'cta':        '#00c896',
        'cta-hover':  '#00a87e',
        'star':       '#f5a623',
        'badge':      '#f5a623',
        'text-muted': '#b0b8c1',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
