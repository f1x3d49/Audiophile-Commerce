/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#D87D4A",
        color2: "#101010",
        color3: "#F1F1F1",
        color4: "#FAFAFA",
        color5: "#fbaf85",
        color6: "#FFFFFF",
        color7: "#000000",
      },
      fontFamily: {
        primary: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
