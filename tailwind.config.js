/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "hsl(75, 94%, 57%)",
        "custom-white": "hsl(0, 0%, 100%)",
        "custom-grey-700": "hsl(0, 0%, 20%)",
        "custom-grey-800": "hsl(0, 0%, 12%)",
        "custom-grey-900": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
