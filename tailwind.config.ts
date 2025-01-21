import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        'custom-2': 'rgba(0, 0, 0, 0.1) 0px 14px 15px -3px, rgba(0, 0, 0, 0.05) 0px 14px 6px -2px',
      },
      colors: {
        white: "var(--white)",
        lightgreen: "var(--lightgreen)",
        extraalightgreen: "var(--extraalightgreen)",
        extralightgreen: "var(--extralightgreen)",
        green: "var(--green)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
