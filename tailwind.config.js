/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#262626",
        "secondary-color": "#FFF",
        "tertiary-color": "#718096",
        "card-color": "#F7FAFC",
        "button-primary": "#EDF2F7",
        "border-primary": "#D3DEE9",
        "button-secondary": "#1E21FF",
      },
      fontSize: {
        "ideal-font-size": "30px",
        "biggest-font-size": "26px",
        "primary-font-size": "20px",
        "secondary-font-size": "15px",
        "tertiary-font-size": "12px",
      },

      fontFamily: { noto: ["Noto Sans"] },
    },
  },
  plugins: [],
};
