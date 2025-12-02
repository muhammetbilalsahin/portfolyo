/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#071731", // arka plan rengi
        secondary: "#6c9eff", // hover vb.
        textPrimary: "#ffffff", // yazı rengi
        textSecondary: "#9fc0ff", // başlıklar vb.
      },
    },
  },
  plugins: [],
};
