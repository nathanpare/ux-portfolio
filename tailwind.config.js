/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js",],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
