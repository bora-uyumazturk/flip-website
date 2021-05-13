module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        "192": "40rem",
      },
      maxWidth: {
        "192": "40rem",
      },
      minHeight: {
        "192": "36rem",
      },
      maxHeight: {
        "192": "36rem",
      },
      scale: {
        "160": "1.6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
