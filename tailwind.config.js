/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ["primary-text"]: colors.amber["50"],
        primary: colors.violet["900"],
        secondary: colors.slate["800"],
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "night", "coffee"],
  },
  plugins: [require("daisyui")],
};
