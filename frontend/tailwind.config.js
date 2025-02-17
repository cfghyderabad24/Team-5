// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         'poppins': ['Poppins', 'sans-serif'],
//       },
      
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(52, 96%, 47%)',
        brightRedLight: 'hsl(52, 100%, 73%)',
        brightRedSupLight: 'hsl(52, 100%, 73%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(52, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
});


