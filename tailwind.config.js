/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadow1: "-1px 4px 18px 4px #0C1A240A;",
        shadow2: "4px 1px 30px 5px #D9D9D9, 0px 0px 37px 41px #ffffff;",
        shadow3: "4px 1px 30px 5px #c4c4c4, 0px 0px 37px 20px #ffffff;",
      },
    },
  },
  plugins: [],
};
