/** @type {import('tailwindcss').Config} */
// red for icons: #e85e56
// white for background and fonts light: #f4e9dc
// black for background and fonts dark: #494949
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#e85e56",
        light: "#f4e9dc",
        dark: "#494949",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
