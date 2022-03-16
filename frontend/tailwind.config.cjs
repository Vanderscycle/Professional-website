var dark = require("./tailwindcss/tokyo-night-dark.json")
var light = require("./tailwindcss/tokyo-night-light.json")

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,svelte,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //DARK_MODE 
        terminalDarkBg: dark.bg,
        terminalDarkStorm: dark.storm,
        terminalDarkText: dark.text,
        terminalDarkBlack: dark.black,
        terminalDarkGreen: dark.green,
        terminalDarkRed: dark.red,
        terminalDarkYellow: dark.yellow,
        terminalDarkBlue: dark.blue,
        terminalDarkMagenta: dark.magenta,
        terminalDarkWhite: dark.white,
        terminalDarkGui: dark.gui,
        terminalDarkOrange: dark.orange,
        //LIGHT_MODE 
        terminalLightBg: light.bg,
        terminalLightText: light.text,
        terminalLightBlack: light.black,
        terminalLightGreen: light.green,
        terminalLightRed: light.red,
        terminalLightYellow: light.yellow,
        terminalLightBlue: light.blue,
        terminalLightMagenta: light.magenta,
        terminalLightWhite: light.white,
        terminalLightGui: light.gui,
        terminalLightOrange: light.orange,
      },
    },
  },

  plugins: [],
  content: ["./src/**/*.{html,js,svelte,ts,css}"],
};

// module.exports = config;
