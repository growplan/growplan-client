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
        "blue-4": "#90B8FF",
        "blue-1": "#EEF4FF",
        "black-2": "#ECEEF2",
        "black-4": "#AFB9CA",
        "black-8": "#414D63",
        "kakao-yellow": "#FEE500",
        "kakao-brown": "#3C1E1E",
        "naver-green": "#03C75A",
      },
    },
  },
  plugins,
  darkMode: "selector",
} satisfies Config;
