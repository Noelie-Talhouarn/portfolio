/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mauve: '#b196d0',
        backgroundGris: '#dbdfe1'
      },
      fontSize: {
        base: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '2.8125rem',
        '5xl': '3rem',
        '6xl': '4.5rem'
      },
      fontFamily: {
        'roboto-mono': 'Roboto Mono',
        'spicy-rice': 'Spicy Rice',
        ahsing: 'Ahsing'
      },
      borderRadius: {
        'rounded-0': '0rem',
        'rounded-1': '0.2rem',
        'rounded-2': '0.25rem',
        'rounded-3': '0.5rem',
        'rounded-4': '0.8774038314819336rem',
        'rounded-5': '1rem',
        'rounded-6': '1.75rem',
        'rounded-7': '1.9rem',
        'rounded-8': '2rem',
        'rounded-9': '2.8rem'
      },
      
  },
  plugins: []
}
}
