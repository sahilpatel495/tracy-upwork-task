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
        "biggest-size": "50px",
        "medium-size": "40px",
        "small-size": "30px",
        "smaller-size": "26px",
        "smallest-size": "26px",
      },
      fontFamily: { noto: ["Noto Sans"] },
    },
  },
  plugins: [],
};
