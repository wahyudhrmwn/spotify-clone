import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: '#0F1515',
        customBgColor: '#131A1C',
        customBgList: '#1A2C2C',
        customBgListMenu: '#343434',
        customBgHover: '#203A39',
        customBgHoverListMenu: '#575757',
        customTextColor: '#cccccc',
        customTextHover: '#f2f2f2'
      },
      boxShadow: {
        left: '-6px 0 6px 0px rgba(0, 0, 0, 0.2)', // Custom shadow for the right side
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
