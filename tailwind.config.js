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
        'slider-img1': "url('/src/assets/Snapinsta1.svg')",
        'slider-img2': "url('/src/assets/Snapinsta22.png')",
        'slider-img3': "url('/src/assets/sliderImg3.png')",
        'slider-img4': "url('/src/assets/sliderImg4.png')",
        'guide-img1': "url('/src/assets/guideim1.svg')",
        'guide-img2': "url('/src/assets/guideim2.svg')",
        'guide-img3': "url('/src/assets/guideim3.svg')",
        'clients-bg': "url('/src/assets/clientsbg.svg')",
        'image35': "url('/src/assets/image35.png')",
        'image34': "url('/src/assets/image34.png')",
        'image36': "url('/src/assets/image36.png')",
        'image37': "url('/src/assets/image37.png')",
        'image38': "url('/src/assets/image38.png')",
        'image39': "url('/src/assets/image39.png')",
        'image40': "url('/src/assets/image40.png')",
        'image41': "url('/src/assets/image41.png')",
        'image42': "url('/src/assets/image42.png')",
        'image43': "url('/src/assets/image43.png')",
        'image44': "url('/src/assets/image44.png')",
        'image45': "url('/src/assets/image45.png')",
        'image46': "url('/src/assets/image46.png')",
        'image48': "url('/src/assets/image48.png')",
        'image49': "url('/src/assets/image49.png')",
        'image50': "url('/src/assets/image50.png')",
        'image51': "url('/src/assets/image51.png')",
        'image52': "url('/src/assets/image52.png')",
        'image53': "url('/src/assets/image53.png')",
        'image54': "url('/src/assets/image54.png')",
         
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