/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-gradient':
          'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 90, 121, 1) 0%, rgba(0, 212, 255, 1) 94%)',
      },
   
    },
  },
  plugins: [],
};
