//TODO: figureOut how you can have a dynamic import style e.g. the color codes are auto imported.
const config = {
  mode: "jit",
  purge: ["./src/**/*.{js,svelte,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //TOKYO_NIGHT_DARK 
        terminalDarkBg: "#1a1b26",
        terminalDarkStorm: "#24283b",
        terminalDarkText: "#9aa5ce",
        terminalDarkBlack: "#414868",
        terminalDarkGreen: "#73daca",
        terminalDarkRed: "#f7768e",
        terminalDarkYellow: "#e0af68",
        terminalDarkBlue: "#7aa2f7",
        terminalDarkMagenta: "#bb9af7",
        terminalDarkWhite: "#c0caf5",
        terminalDarkGui: "#a9b1d6",
        //TOKYO_NIGHT_LIGHT 
        terminalLightBg: "#d5d6db",
        terminalLightText: "#565a6e",
        terminalLightBlack: "#0f0f14",
        terminalLightGreen: "#33635c",
        terminalLightRed: "#8c4351",
        terminalLightYellow: "#8f5e15",
        terminalLightBlue: "#34548a",
        terminalLightMagenta: "#5a4a78",
        terminalLightWhite: "#343b58",
        terminalLightGui: "#343b58",
      },
    },
  },

  plugins: [],
  content: ["./src/**/*.{html,js,svelte,ts,css}"],
};

module.exports = config;
