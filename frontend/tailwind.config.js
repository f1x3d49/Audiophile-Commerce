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
        border: "rgba(151,151,151,100)",
      },
      fontFamily: {
        primary: ["Manrope", "sans-serif"],
      },
      screens: {
        mb: "375px",
        tb: "768px",
        dt: "1440px",
      },
      backgroundImage: {
        mobileHero: "url('./assets/home/mobile/image-header.jpg')",
        tabletHero: "url('./assets/home/tablet/image-header.jpg')",
        desktopHero: "url('./assets/home/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
