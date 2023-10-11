import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-header":
          "linear-gradient(to bottom, #171A26, rgba(23, 26, 38, 0.0001))",
      },
    },
  },
  plugins: [],
};
export default config;
