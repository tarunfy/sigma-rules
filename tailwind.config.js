module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#212121",
        secondary: "#323232",
        tertiary: "#14FFEC",
        quaternary: "#fff",
      }),
      textColor: {
        primary: "#212121",
        secondary: "#323232",
        tertiary: "#14FFEC",
        quaternary: "#fff",
      },
      height: {
        primary: "80vh",
        secondary: "76vh",
      },
      boxShadow: {
        primary: "rgba(20, 255, 236, 0.24) 0px 3px 8px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "2.7rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
