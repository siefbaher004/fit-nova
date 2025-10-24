import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["var(--font-main)"],
        secondary: ["var(--font-secondary)"],
      },

      colors: {
        background: "var(--color-bg-main)",
        foreground: "var(--color-primary-main)",
        // Chat
        chat: "var(--chat-bg)",
        chatHide: "var(--chat-user-bg-hide)",
        chatUser: "var(--chat-user-bg)",
        chatBot: "var(--chat-bot-bg)",
        prev: "var(--chat-bg-previous-conversations)",
      },
    },
  },
  plugins: [],
};
export default config;
