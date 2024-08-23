/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        small: [
          "40px",
          {
            fontWeight: 500,
            lineHeight: "48px",
          },
        ],
      },
      colors: {
        primary: "red",
        secondary: "green",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      screens: {
        md: "768px",
        lg: "992px",
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          xl: "1240px",
        },
      },
    },
  },
  plugins: [],
};
