/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./pages/**/*.{js,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: 10,
    },
    filter: { grayscale: "grayscale(1)", none: "none" },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1024px",
    },
  },
  variants: {
    filter: ["hover", "group-hover"],
    scale: ["group-hover"],
    opacity: ["hover", "group-hover"],
    borderWidth: ["last"],
  },
  //plugins: [require("tailwindcss-filters")],
};
