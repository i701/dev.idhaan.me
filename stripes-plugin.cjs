const plugin = require("tailwindcss/plugin")

module.exports = plugin(function ({
  addBase,
  addComponents,
  addUtilities,
  matchUtilities,
  theme,
}) {
  addBase({
    ":root": {
      "--stripes-rgb": "0 0 0",
      "--stripes-angle": "-45deg",
      "--stripes-opacity": "1",
    },
    "@keyframes slide": {
      from: { transform: "translateX(0)" },
      to: { transform: "translateX(20px)" },
    },
  })
  // do
  addComponents({
    ".stripes": {
      position: "relative",
      overflow: "hidden",
      isolation: "isolate",
    },
    ".stripes:before": {
      "--stripes-color": "rgb(var(--stripes-rgb) / var(--stripes-opacity))",
      zIndex: -1,
      position: "absolute",
      top: "0",
      right: "0",
      height: "100%",
      width: "calc(100% + 20px)",
      content: '""',
      backgroundImage:
        "linear-gradient(\n      var(--stripes-angle),\n      var(--stripes-color) 0% 5%,\n      transparent 5% 45%,\n      var(--stripes-color) 45% 55%,\n      transparent 55% 95%,\n      var(--stripes-color) 95%\n    )",
      backgroundSize: "10px 10px",
      animation: "slide 1s infinite linear",
    },
  })

  addUtilities({
    ".stripes-white": { "--stripes-rgb": "255 255 255" },
    ".stripes-reverse": { "--stripes-angle": "45deg" },
  })

  // Opacity
  matchUtilities(
    {
      "stripes-opacity": (value) => ({
        "--stripes-opacity": value,
      }),
    },
    {
      values: theme("opacity"),
    }
  )
})
