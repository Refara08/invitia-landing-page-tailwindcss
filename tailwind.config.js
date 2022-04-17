module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter"],
      },
      colors: {
        body: "#F9F9F9",
        diskon: "#E71E29",
        heading: "#E0E0E0",
        "bg-h": "#EEEEEE",
        "gray-lighter": "#F5F5F5",
      },

      screens: {
        tablet: { max: "1023px" },
        mobilexl: { max: "767px" },
        mobile: { max: "639px" },
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
