/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#21273a",
        secondary: "#e8eef1",
        tertiary: "#ff8427",
      },
    },
  },
  plugins: [],
};
