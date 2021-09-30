module.exports = {
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        pink: {
          light: "#E31C5F",
          DEFAULT: "#E31C5F",
          dark: "#009eeb",
        },
        black: "#222222",
        gray: {
          light: "#717171",
        },
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
};
