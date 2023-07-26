/** @type {import('tailwindcss').Config} */
const defaultTheme = require( 'tailwindcss/defaultTheme' );

module.exports = {
  content: [ "./src/components/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx,html}" ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#504945',
      blackDark: '#3c3836',
      gray: '#7c6f64',
      grayDark: '#a89984',
      red: '#fb4934',
      redDark: '#cc241d',
      green: '#b8bb26',
      greenDark: '#98971a',
      yellow: '#fabd2f',
      yellowDark: '#d79921',
      blue: '#78bfbf',
      blueDark: '#458588',
      magenta: '#d3869b',
      magentaDark: '#b16286',
      cyan: '#8ec07c',
      cyanDark: '#689d6a',

      uiBackground: '#282828',
      uiBackgroundDark: '#1d2021',
      uiForeground: '#cdcdcd',
      uiForegroundDark: '#bcbcbc',
      uiAccent: '#928374',
      uiAccentDark: '#3c3836',
      uiWarning: '#fabd2f',
      uiError: '#fb4934',
      uiSuccess: '#b8bb26',
      text: '#efefef',
      textDark: '#677e81',
    },
    extend: {
      screens: {
        showSidebarBreakpoint: '960px'
      },
      fontFamily: {
        'sans': [ 'Inter var', ...defaultTheme.fontFamily.sans ],
      }
    },
  },
  plugins: [],
};