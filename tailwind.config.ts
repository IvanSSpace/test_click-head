import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'blue-red-gradient': 'linear-gradient(135deg, #4A4CC3, #A13737)',
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'market-blue': '#4A4CC3',
        'market-red': '#A13737',
        'market-pink': '#953DAB',
        'market-green': '#31925C'
      },
    screens: {
      'super-sm': '455px',
    },
    boxShadow: {
      'top': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    },
  },
  plugins: [],
};
export default config;
