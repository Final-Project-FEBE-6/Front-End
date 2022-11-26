/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      colors : {
        'blue' : '#1B97CC',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
