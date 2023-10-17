/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "header": "hsl(180, 29%, 50%)",
        "background": "hsl(180, 52%, 96%)",
        "filter": "hsl(180, 31%, 95%)",
        "dark":"hsl(180, 8%, 52%)",
        "verydark": "hsl(180, 14%, 20%)"
      }
    },
  },
  plugins: [],
}

