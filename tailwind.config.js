/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "sans-serif"],
      },
      colors: {
        bgSidebar: "rgba(0, 0, 0, 0.05)",
        purplePrimary: "#8d22c3",
        textColor: "#32323d",
        alphaBg: " rgba(0, 0, 0, 0.05)",
        textPlaceholder: "#757575",
        sreachText: "#282828",
        boderPlayer: "rgba(0, 0, 0, 0.05)",
        boderSecondary: "rgba(0, 0, 0, 0.6)",
      },
      padding: {
        paddingSection: "59px",
        20: "20px",
      },
      margin: {
        70: "70px",
        102: "102px",
      },
      borderRadius: {
        20: "20px",
        100: "100px",
      },
      keyframes: {
        "slide-left": {
          "0%": {
            "-webkit-transform": "translateX(+1178px);",
            transform: "translateX(+1178px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },
      },
      animation: {
        "slide-left":
          "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
      },
    },
  },
  plugins: [],
};
