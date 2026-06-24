/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        petos: {
          cream: '#FAF3E0',
          'light-cream': '#FFF5E1',
          brown: '#4A2511',
          'dark-brown': '#2B1408',
          'darkest-brown': '#1A0B04',
          orange: '#E86A10',
          'dark-orange': '#D55A0A',
          'light-brown': '#6E4228',
          border: '#E8DCC8',
          yellow: '#F5A623',
          'light-yellow': '#FFE1A8',
        }
      }
    },
  },
  plugins: [],
}