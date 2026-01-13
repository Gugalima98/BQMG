/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./Layout.tsx",
    "./constants.ts",
    "./types.ts",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#16a34a', // Green-600 (Corporate Primary)
          secondary: '#fbbf24', // Amber-400 (Accent/Icons)
          dark: '#14532d', // Green-900 (Text/Footer)
          light: '#f0fdf4', // Green-50 (Backgrounds)
          surface: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
}