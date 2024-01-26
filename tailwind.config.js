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
        cinzaForm: "#282828",
        cinzaText: "#B3B3B3"
      },

      fontFamily: {
        roboto: ['"roboto"'],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
