import localFont from "next/font/local";

//Main font
export const baloo_thambi = localFont({
  src: [
    { path: "../app/fonts/baloo-thambi-2-v22-latin-regular.woff2", weight: "400", style: "normal" },
    { path: "../app/fonts/baloo-thambi-2-v22-latin-500.woff2", weight: "500", style: "normal" },
    { path: "../app/fonts/baloo-thambi-2-v22-latin-600.woff2", weight: "600", style: "normal" },
    { path: "../app/fonts/baloo-thambi-2-v22-latin-700.woff2", weight: "700", style: "normal" },
    { path: "../app/fonts/baloo-thambi-2-v22-latin-800.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-main",
});

//Secondary font
export const inter = localFont({
  src: "../app/fonts/inter-v20-latin-700.woff2",
  display: "swap",
  variable: "--font-secondary",
});
