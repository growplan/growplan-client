import type { Config } from "tailwindcss";
import config from "fast-jsx/tailwind.config";
const { theme, plugins } = config;

export default {
  content: [
    "./node_modules/fast-jsx/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    ...theme,
    extend: {
      ...theme.extend,
      fontFamily: {
        ...theme.extend.fontFamily,
        "pretendard-var": ["pretendard-var"],
      },
      colors: {
        ...theme.extend.colors,
        "blue-5": "#699BFF",
        "black-4": "#AFB9CA",
        "black-8": "#414D63",
      },
    },
  },
  plugins,
  darkMode: "selector",
} satisfies Config;
