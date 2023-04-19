/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transformOrigin: "center",
      colors: {
        'hsla': 'hsla(0, 0%, 8%, .7)',
      },
    },
  },
  plugins: [],
}
