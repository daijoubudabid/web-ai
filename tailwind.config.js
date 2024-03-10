/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // screens: {
      //   sm: "576px",
      //   md: "768px",
      //   lg: "992px",
      // },
      backgroundColor: {
        primary: "hsla(262, 83%, 58%, 0.102)",
        nav_sticky: "hsla(229, 84%, 5%, 0.6)",
        default: "hsla(229, 84%, 5%, 0.4)",
        secondary: "hsl(262, 83%, 58%)",
        secondary_hover: "hsl(263, 70%, 50%)"
      },
      textColor: {
        primary: "hsl(262, 83%, 58%)",
        default: "hsl(213, 27%, 84%)"
      }
    },
  },
  plugins: [],
};
