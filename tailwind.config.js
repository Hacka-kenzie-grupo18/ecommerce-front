/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteFixed: "#FFFFFF",
        brand1: "#4529E6",
        brand2: "#5126EA",
        brand3: "#B0A6F0",
        brand4: "#EDEAFD",
        grey0: "#0B0D0D",
        grey1: "#212529",
        grey2: "#495057",
        grey3: "#868E96",
        grey4: "#ADB5BD",
        grey5: "#CED4DA",
        grey6: "#DEE2E6",
        grey7: "#E9ECEF",
        grey8: "#F1F3F5",
        grey9: "#F8F9FA",
        grey10: "#FDFDFD",
        alert1: "#CD2B31",
        alert2: "#FDD8D8",
        alert3: "#FFE5E5",
        sucess1: "#18794E",
        sucess2: "#CCEBD7",
        sucess3: "#DDF3E4",
        random1: "#E34D8C",
        random2: "#C04277",
        random3: "#7D2A4D",
        random4: "#7000FF",
        random5: "#6200E3",
        random6: "#36007D",
        random7: "#349974",
        random8: "#2A7D5F",
        random9: "#153D2E",
        random10: "#6100FF",
        random11: "#5700E3",
        random12: "#30007D",
      },
      fontWeight: {
        700: "700",
        600: "600",
        500: "500",
        400: "400",
      },
      borderRadius: {
        4: "4px",
      },
      padding: {
        btnBigPad: "28px",
        btnMedPad: "20px",
      },
      height: {
        btgBigH: "48px",
        btgMedH: "38px",
      },
      fontSize: {
        btgBigF: "16px",
        btgMedF: "14px",
      },
      fontFamily: {
        lexend: "Lexend",
      },
      screens: {
        maxsm: { max: "768px" },
        midson: { min: "1215px" },
      },
    },
  },
  plugins: [],
};
