/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

const chatStyle = {
  width: {
    opened: "26rem",
    closed: "5rem",
  },
  height: {
    opened: "36rem",
    closed: "5rem",
  },
  borderRadius: {
    opened: ".725rem",
    closed: "9999px",
    mixed: "4rem",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        open_chatbot: {
          from: {
            borderRadius: chatStyle.borderRadius.mixed,
          },
          to: {
            borderRadius: chatStyle.borderRadius.opened,
            width: chatStyle.width.opened,
            height: chatStyle.height.opened,
            backgroundColor: "#f0f0f0",
            boxShadow: "#6834e2 0px 0px 0px 4px",
          },
        },
        close_chatbot: {
          "0%": {
            borderRadius: chatStyle.borderRadius.opened,
            width: chatStyle.width.opened,
            height: chatStyle.height.opened,
            backgroundColor: "#f0f0f0",
          },
          "75%": {
            borderRadius: chatStyle.borderRadius.mixed,
          },
          "100%": {
            borderRadius: chatStyle.borderRadius.closed,
            width: chatStyle.width.closed,
            height: chatStyle.height.closed,
            backgroundColor: "#6834e2",
          },
        },
      },
      animation: {
        open_chatbot: "open_chatbot 300ms ease-in-out forwards",
        close_chatbot: "close_chatbot 300ms ease-in-out forwards",
      },
    },
    colors: {
      ...colors,
      aim_purple: {
        1: "#f4efff",
        2: "#ded0ff",
        3: "#824cff",
        4: "#6834e2",
        5: "#23114d",
      },
      aim_white: {
        1: "#ffffff",
        2: "#f2f2f2",
        3: "#f0f0f0",
      },
      aim_black: {
        1: "#636363",
        2: "#595959",
        3: "#454547",
        4: "#333333",
        5: "#000000",
      },
    },
  },
  plugins: [],
};
