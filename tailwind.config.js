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
    },
  },
  variants: {
    extend: { backgroundImage: ["hover", "focus"] },
  },
  plugins: [],
};
