module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      cursive: "cursive",
      fantasy : "fantasy"
    },
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}
