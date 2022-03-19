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
        darkBg: dark.bg,
        darkStorm: dark.storm,
        darkText: dark.text,
        darkBlack: dark.black,
        darkGreen: dark.green,
        darkRed: dark.red,
        darkYellow: dark.yellow,
        darkBlue: dark.blue,
        darkMagenta: dark.magenta,
        darkWhite: dark.white,
        darkGui: dark.gui,
        darkOrange: dark.orange,
        //LIGHT_MODE 
        Bg: light.bg,
        Text: light.text,
        Black: light.black,
        Green: light.green,
        Red: light.red,
        Yellow: light.yellow,
        Blue: light.blue,
        Magenta: light.magenta,
        White: light.white,
        Gui: light.gui,
        Orange: light.orange,
      },
    },
  },

  plugins: [],
  content: ["./src/**/*.{html,js,svelte,ts,css}"],
};

// module.exports = config;
