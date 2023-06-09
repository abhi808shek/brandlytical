/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        spectral: ["Spectral"]
      },
      backgroundImage: {
        'hero-img': "url('/src/assets/heroimg.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'slider-img1': "url('/src/assets/imageslider1.svg')",
        'guide-img1': "url('/src/assets/guideim1.svg')",
        'guide-img2': "url('/src/assets/guideim2.svg')",
        'guide-img3': "url('/src/assets/guideim3.svg')",
        'clients-bg': "url('/src/assets/clientsbg.svg')",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};