module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundOpacity: {
        90: "0.95",
      },
      screens: {
        lg: "1340px",
      },
      fontFamily: {
        display: ["Merriweather", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        sans: [
          "Open Sans",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "Merriweather",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },

      colors: {
        red: {
          lighter: "#FBDADA",
          ligh: "#F49090",
          default: "#ED4747",
        },
        blue: {
          lighter: "#DEEDF7",
          light: "#ADD2EB",
          default: "#59A5D8",
        },
        yellow: {
          lighter: "#FFF3D6",
          light: "#FFE7AD",
          default: "#FFD166",
        },
        green: {
          lighter: "#D7FEF4",
          light: "#60FBD2",
          default: "#06D6A0",
        },
        navy: "#133C55",
        white: "#FFFFFF",

        gray: {
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#6C757D",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
        },
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
      },
      transitionTimingFunction: {
        "jk-custom": "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      },
    },
  },
  variants: {},
  plugins: [],
}
