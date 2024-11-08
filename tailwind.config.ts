import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accentlightgreen: "#72DDC3",
        accentgreen: "#02AAA4",
        accentgrey: "#7084A3",
        tiffany: "#27B5B0",
        lightTiffany: "#5EC5C2",
        transparentGrey: "#AABBCC",
        transparentBlue: "#37455e",
        hoverGrey: "#e3e4ee",
        lightGrey: "#dddeeb",
        blueGreyLight: "#ced0dd",
        contrastBlue: "#23324C",
        contrastGrey: "#aeb3c0",
        selectedColumnBg: "#dfe0ec",
        purple: "#8781b5",
      },
      fontSize: {
        "2xs": "10px",
        tiny: "14px",
        "26px": "26px",
        "18px": "18px",
        huge: "28px",
      },
    },
  },
  plugins: [],
};
export default config;
