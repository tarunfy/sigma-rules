module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#222",
        secondary: "#323232",
        tertiary: "#14FFEC",
        quaternary: "#fff",
        lightBlack: "#111",
      }),
      textColor: {
        primary: "#222",
        secondary: "#323232",
        tertiary: "#14FFEC",
        quaternary: "#fff",
      },
      fontFamily: {
        Roboto: ["Roboto"],
        Nunito: ["Nunito"],
      },
      height: {
        primary: "86vh",
        secondary: "83vh",
      },
      boxShadow: {
        primary: "rgba(20, 255, 236, 0.24) 0px 3px 8px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "2.7rem",
      },
      borderColor: {
        primary: "#14FFEC",
      },
      stroke: {
        primary: "#14FFEC",
      },
    },
  },
  variants: {
    extend: {
      stroke: ["hover", "focus"],
    },
  },
  plugins: [],
};
