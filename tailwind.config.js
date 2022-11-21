/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        tomato: "#ff6347",
        marigold: "#f9c80e",
        greenPrimary: "#32502E",
        greenSecondary: "#406343",
        greenDark: "#1F3A1F",
        greenLight: "#BCD697",
        creamPrimary: "#ECE7B4",
        creamSecondary: "#F3EFCC",
        compliment: "#9AC6D5",
        complimentPink: "#F8E2EE",
      },
      keyframes: {
        bannermove: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-6188px)" },
        },
        scrolliconbounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        bannermove: "bannermove 150s linear infinite",
        scrolliconbounce: "scrolliconbounce 3s infinite",
      },
      backgroundImage: {
        logoimg: "../assets/images/press-logos.png')",
      },
    },
  },
};
