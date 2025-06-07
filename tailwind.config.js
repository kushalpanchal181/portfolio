/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enable class based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#FCECDD',
        'text-primary': '#333333',
        'heading-text': '#00809D',
        'accent-primary': '#FF7601',
        'accent-secondary': '#F3A26D',
      },
    },
  },
  plugins: [],
};
