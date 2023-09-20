/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          primary: "#868e96",
          secondary: "#f1f3f5",
          darker: "#343a40",
        },
        red: {
          primary: "#fa5252",
          secondary: "#ffe3e3",
        },
        pink: {
          primary: "#e64980",
          secondary: "#ffdeeb",
        },
        grape: {
          primary: "#be4bdb",
          secondary: "#f3d9fa",
        },
        violet: {
          primary: "#7950f2",
          secondary: "#e5dbff",
        },
        indigo: {
          primary: "#4c6ef5",
          secondary: "#dbe4ff",
        },
        blue: {
          primary: "#228be6",
          secondary: "#d0ebff",
        },
        cyan: {
          primary: "#15aabf",
          secondary: "#c5f6fa",
        },
        teal: {
          primary: "#12b886",
          secondary: "#c3fae8",
        },
        brand: {
          primary: "#208d8e",
          secondary: "#c2f7fa",
        },
        green: {
          primary: "#40c057",
          secondary: "#d3f9d8",
        },
        lime: {
          primary: "#82c91e",
          secondary: "#e9fac8",
        },
        orange: {
          primary: "#fd7e14",
          secondary: "#ffe8cc",
        },
      },

      // fontSize: {
      //   "heading-xs": ["20pt", { lineHeight: "24pt" }],
      //   "heading-s": ["24pt", { lineHeight: "28pt" }],
      //   "heading-m": ["28pt", { lineHeight: "32pt" }],
      //   "heading-l": ["32pt", { lineHeight: "36pt" }],
      //   "body-xs": ["12pt", { lineHeight: "16pt" }],
      //   "body-s": ["14pt", { lineHeight: "20pt" }],
      //   "body-m": ["16pt", { lineHeight: "24pt" }],
      //   "body-l": ["20pt", { lineHeight: "28pt" }],
      //   "body-xl": ["24pt", { lineHeight: "32pt" }],
      //   "bold-xs": ["12pt", { fontWeight: "bold" }],
      //   "bold-s": ["14pt", { fontWeight: "bold" }],
      //   "bold-m": ["16pt", { fontWeight: "bold" }],
      //   "bold-l": ["20pt", { fontWeight: "bold" }],
      //   "bold-xl": ["24pt", { fontWeight: "bold" }],
      // },

      fontSize: {
        "heading-xs": ["20pt"],
        "heading-s": ["24pt"],
        "heading-m": ["28pt"],
        "heading-l": ["32pt"],
        "body-xs": ["12pt"],
        "body-s": ["14pt"],
        "body-m": ["16pt"],
        "body-l": ["20pt"],
        "body-xl": ["24pt"],
        "bold-xs": ["12pt"],
        "bold-s": ["14pt"],
        "bold-m": ["16pt"],
        "bold-l": ["20pt"],
        "bold-xl": ["24pt"],
      },
      spacing: {
        xs: "8px",
        s: "16px",
        m: "24px",
        l: "32px",
        xl: "40px",
      },
    },
  },

  plugins: [],
};
