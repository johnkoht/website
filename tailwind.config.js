module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundOpacity: {
        '90': '0.95'
      }
    },
    screens: {
      "lg": "1340px"
    },

    fontFamily: {
      display: ['Merriweather', 'sans-serif'],
      body: ['Noto Sans', 'sans-serif'],
      sans: [
        'Noto Sans',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Merriweather', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },

    colors: {
      red: "#ED4747",
      blue: "#59A5D8",
      yellow: "FFD166",
      green: "#06D6A0",
      navy: "#133C55",
      white: "#FFFFFF",

      gray: {
        100: '#F8F9FA',
        200: '#E9ECEF',
        300: '#DEE2E6',
        400: '#CED4DA',
        500: '#ADB5BD',
        600: '#6C757D',
        700: '#495057',
        800: '#343A40',
        900: '#212529',
      },
    }
  },
  variants: {},
  plugins: [],
}
