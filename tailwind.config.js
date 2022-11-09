/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },

      backgroundImage: {
        app: 'url(/app-bg.png)'
      },

      colors: {
        gray: {
          100: "#E1E1E6",
          300: "#8D8D99",
          600: "#323238",
          800: "#202024",
          900: "#121214",
        },
        green: {
          500: "#047C3F",
          300: "#129E57",
        },
        yellow: {
          700: "#E5CD3D",
          500: "#F7DD43",
        }
      },
    },
  },
  plugins: [],
}
