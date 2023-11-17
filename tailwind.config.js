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
        'linear-gradient': 'linear-gradient(180deg, rgba(132, 205, 228, 0.00) 0%, rgba(132, 205, 228, 0.14) 84.43%)',
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

