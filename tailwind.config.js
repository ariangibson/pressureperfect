/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Instrument Serif"', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'pp-black': '#000000',
        'pp-gray': '#6F6F6F',
        'pp-white': '#FFFFFF',
        'pp-teal': '#2E9BC7',
        'pp-teal-dark': '#2593b8',
        'pp-teal-light': '#2ea4d3',
        'pp-purple': '#7c3aed',
      },
      animation: {
        'fade-rise': 'fadeRise 0.8s ease-out forwards',
        'fade-rise-delay': 'fadeRise 0.8s ease-out 0.2s forwards',
        'fade-rise-delay-2': 'fadeRise 0.8s ease-out 0.4s forwards',
        'fade-rise-delay-3': 'fadeRise 0.8s ease-out 0.6s forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeRise: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
