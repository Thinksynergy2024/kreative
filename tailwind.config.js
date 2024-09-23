/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      primary: '#981B2D',
      white: '#ffffff',
      gray: '#A4A4A4',
      warning: '#FF3333',
      background: "#E7E8EE",
      black: '#000000',
    }
  },
  plugins: [],
};
