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
        "linear-gradient":
          "linear-gradient(90deg, rgba(236,85,155,1) 0%, rgba(162,135,181,1) 100%)",
      },
      colors: {
        primary: "#e82a82",
        "dark-violet": { DEFAULT: "#0e0315", 100: "#170524" },
        "dark-grey": "#0E0314",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
