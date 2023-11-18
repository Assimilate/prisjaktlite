/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient-second': 'radial-gradient(82.96% 82.96% at 50% 59.12%, rgba(132, 205, 228, 0.30) 19.79%, #84CDE4 100%)',
        'radial-gradient-first': 'radial-gradient(118.23% 118.23% at 50% 23.84%, #84CDE4 0%, rgba(132, 205, 228, 0.27) 51.09%)',
        'linear-gradient': 'linear-gradient(180deg, rgba(134, 166, 177, 0.14) 10.78%, rgba(27, 123, 159, 0.14) 69.1%)',
        'box-shadow': {
          'second': 'box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

