/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'red-alpha-100' :'rgba(255, 76, 76, 0.15)',
        'red-alpha-700' :'rgba(255, 76, 76, 0.71)',
        'red-alpha-active-700' :'rgba(255, 76, 76, 0.91)',
        'red-50':'rgba(255, 242, 242, 1)',
        'red-900':'rgba(71, 21, 21, 1)',
        'blue-alpha-100': 'rgba(76, 172, 255, 0.15)',
        'blue-alpha-600': 'rgba(76, 172, 255, 0.62)',
        'blue-alpha-active-600' :'rgba(76, 172, 255, 0.91)',
        'blue-50': 'rgba(242, 249, 255, 1)',
        'blue-900': 'rgba(21, 48, 71, 1)'
      },
      fontFamily:{
        roboto: ["Roboto","sans-serif"]
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [], 
}