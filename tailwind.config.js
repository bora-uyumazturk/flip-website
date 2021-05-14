module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        wide: "40rem",
      },
      maxWidth: {
        wide: "40rem",
      },
      minHeight: {
        tall: "30rem",
        "96": "24rem",
      },
      maxHeight: {
        tall: "30rem",
        "96": "24rem",
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
