import localFont from "next/font/local";

export const circularStd = localFont({
  src: "./app/fonts/CircularStdBlack.ttf",
  display: "swap",
  variable: "--font-circular",
});

export const circularStdMed = localFont({
  src: "./app/fonts/CircularStdMed.ttf",
  display: "swap",
  variable: "--font-circular-med",
});
