/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      black: '1a202c',
      white: '#fff',
      tomato: '#e44a2e',
    },
  },
  plugins: [],
}