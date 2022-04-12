module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter"],
      },
      colors: {
        "bg-h": "#EEEEEE",
      },

      screens: {
        mobile: { max: "767px" },
      },
    },
  },
  plugins: [],
};
