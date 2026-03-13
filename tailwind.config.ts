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
        primary: {
          DEFAULT: "#00F2FF", // Neon Blue
          dark: "#001A33",    // Deep Blue
          glow: "rgba(0, 242, 255, 0.4)",
        },
        background: "#000000",
        surface: "rgba(255, 255, 255, 0.05)",
        accent: {
          purple: "#BC7AFA",
          pink: "#FF3366",
        }
      },
      boxShadow: {
        "neon": "0 0 20px rgba(0, 242, 255, 0.3)",
        "neon-strong": "0 0 40px rgba(0, 242, 255, 0.5)",
        "glass": "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 10px rgba(0, 242, 255, 0.2)" },
          to: { boxShadow: "0 0 30px rgba(0, 242, 255, 0.6)" },
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
