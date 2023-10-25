/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
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
        yellow: {
          primary: "#FAB005",
          secondary: "#FFF3BF",
        },
        lime: {
          primary: "#82c91e",
          secondary: "#e9fac8",
        },
        orange: {
          primary: "#fd7e14",
          secondary: "#ffe8cc",
        },
        yellow: {
          primary: "#FAB005",
          secondary: "#FFF3BF",
        },
      },

      fontSize: {
        // Add your custom font sizes here
        "heading-xs": ["1.25rem"],
        "heading-s": ["1.5rem"],
        "heading-m": ["1.75rem"],
        "heading-l": ["2rem"],
        "body-xs": ["0.75rem"],
        "body-s": ["0.875rem"],
        "body-m": ["1rem"],
        "body-l": ["1.25rem"],
        "body-xl": ["1.5rem"],
        "bold-xs": ["0.75rem"],
        "bold-s": ["0.875rem"],
        "bold-m": ["1rem"],
        "bold-l": ["1.25rem"],
        "bold-xl": ["1.5rem"],
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
