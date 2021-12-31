module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      accent: '#8dc7cf',
      text: '#1a1a1a',
      caption: '#878a8c',
      border: 'rgba(135, 138, 140, 30%)',
    },
    fontFamily: {
      sans: ['Favorit', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      display: ['4rem', '1.2'],
      h1: ['2rem', '1.2'],
      h2: ['2.25rem', '1.2'],
      h3: ['1.5rem', '1.2'],
      h4: ['1.25rem', '1.2'],
      h5: ['1rem', '1.2'],
      h6: ['0.875rem', '1.2'],
      lead: ['1.25rem', '1.5'],
      paragraph: ['1rem', '1.5'],
      small: ['0.75rem', '1.5'],
    },
    extend: {
      spacing: {
        30: '7.5rem',
      },
    },
  },
  plugins: [],
};
