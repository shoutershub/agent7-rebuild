const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./mode_modules/vue3-popper/**/*",
    "./node_modules/datatables.net/**/*",
    "./node_modules/datatables.net-dt/**/*",
    "./node_modules/datatables.net-responsive/**/*"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("./src/assets/plugins/headings.ts"),
    require("./src/assets/plugins/card.ts"),
    require("./src/assets/plugins/listjs.ts"),
    require("./src/assets/plugins/forms.ts"),
    require("./src/assets/plugins/choices.ts"),
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        sm: "0.938rem", //15px
        base: "0.875rem", //14px
      },
      colors: {
        colors: {
          body: colors.slate[800],
          "body-bg": colors.slate[100],
        },
        primary: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        zink: {
          50: "#E2EAF3",
          100: "#C8D7E9",
          200: "#92AFD3",
          300: "#5885BC",
          400: "#395F8E",
          500: "#233A57",
          600: "#1C2E45",
          700: "#132337",
          800: "#0F1824",
          900: "#070C12",
          950: "#030507"
        },
        text: {
          50: colors.slate[50],
          100: colors.slate[100],
          200: colors.slate[200],
          300: colors.slate[300],
          400: colors.slate[400],
          500: colors.slate[500], // Using Tailwind's color palette
          600: colors.slate[600],
          700: colors.slate[700],
          800: colors.slate[800],
          900: colors.slate[900],
          950: colors.slate[950]
        },
        custom: {
          50: colors.blue[50],
          100: colors.blue[100],
          200: colors.blue[200],
          300: colors.blue[300],
          400: colors.blue[400],
          500: colors.blue[500], // Using Tailwind's color palette
          600: colors.blue[600],
          700: colors.blue[700],
          800: colors.blue[800],
          900: colors.blue[900],
          950: colors.blue[950]
        },
      },
    },
    fontFamily: {
      public: ['"Public Sans", sans-serif'],
      sans: ['"Public Sans", sans-serif'],
      remix: ["remixicon"]
    },
  },
};
