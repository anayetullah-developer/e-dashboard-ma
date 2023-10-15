import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: ".75rem",
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          dark: "var(--primary-dark)",
        },
      },
      width: {
        sidebarWidth: "var(--sidebar-width)",
      },
    },
  },
  plugins: [],
};
export default config;
