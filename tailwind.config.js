/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "persian-orange": "#E8985E",
        "brown-sugar": "#A9714B",
        "smoky-black": "#141204",
        "drab-brown": "#54442B",
        "drab-green": "#262A10",
      },
      container: {
        center: true,
      },
      backgroundImage: {
        line: "url(../assets/text-highlight.png)",
      },
    },
  },
  plugins: [
    require("./stripes-plugin.cjs"),
    require("@tailwindcss/typography"),
  ],
}
