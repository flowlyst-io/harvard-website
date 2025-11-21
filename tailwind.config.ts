import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // Navy blue
          light: '#3b82f6',
          dark: '#1e40af',
        },
        accent: {
          DEFAULT: '#f59e0b', // Orange/gold accent
          light: '#fbbf24',
          dark: '#d97706',
        },
      },
    },
  },
  plugins: [],
};
export default config;
