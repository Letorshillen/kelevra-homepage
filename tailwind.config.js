module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#A0F4FF",
        },
        pink: {
          DEFAULT: "#FEB9FF",
        },
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      zIndex: {
        "-1": "-1",
      },
      height: {
        m: "60vh",
        l: "80vh",
      },
      width: {
        m: "60vw",
        l: "80vw",
      },
    },
  },
  variants: {
    extend: { backgroundImage: ["hover", "focus"] },
  },
  plugins: [],
};
