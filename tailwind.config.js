/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        laranja: " #FBA403",
        cinzaEscuro: "#242424",
        cinzaCards: "#383838",
        cinzaForm: "#282828"
      },

      fontFamily: {
        roboto: ['"roboto"'],
      },
    },
  },
  plugins: [],
};
