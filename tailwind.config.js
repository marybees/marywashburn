/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#f7f7f9',
        'gray': '#e2e2e2',
        'dark-gray': '#c5c3c6',
        'blue': '#d9eef1',
        'green': '#9dbdb2',
        'pink': '#e9dddf',
        'dark-blue': '#8bbec8',
      },
      backgroundImage: {
        'hero-pattern': "url('/public/images/hero-background.svg')"
      }
    },
  },
  plugins: [],
}