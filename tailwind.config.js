/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coldGray950: "#0f0f0f",
        coldGray900: "#3d3d3d",
        tundora: "#262626",
      },
    },
  },
  plugins: [],
};
