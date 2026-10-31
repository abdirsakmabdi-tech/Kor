import localFont from "next/font/local";
import "./globals.css";

const outfit = localFont({
  src: [
    {
      path: "../../public/Fonts/Outfit_Complete/Outfit_Complete/Fonts/WEB/fonts/Outfit-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Outfit_Complete/Outfit_Complete/Fonts/WEB/fonts/Outfit-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Outfit_Complete/Outfit_Complete/Fonts/WEB/fonts/Outfit-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Outfit_Complete/Outfit_Complete/Fonts/WEB/fonts/Outfit-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Outfit_Complete/Outfit_Complete/Fonts/WEB/fonts/Outfit-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Outfit_Complete/Outfit_Complete/Fonts/WEB/fonts/Outfit-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-outfit",
});

const baskervville = localFont({
  src: [
    {
      path: "../../public/Fonts/ANRT-Baskervville-master/ANRT-Baskervville-master/fonts/webfonts/Baskervville-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ANRT-Baskervville-master/ANRT-Baskervville-master/fonts/webfonts/Baskervville-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/Fonts/ANRT-Baskervville-master/ANRT-Baskervville-master/fonts/webfonts/Baskervville-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ANRT-Baskervville-master/ANRT-Baskervville-master/fonts/webfonts/Baskervville-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/Fonts/ANRT-Baskervville-master/ANRT-Baskervville-master/fonts/webfonts/Baskervville-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ANRT-Baskervville-master/ANRT-Baskervville-master/fonts/webfonts/Baskervville-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/Fonts/ANRT-Baskervville-master/ANRT-Baskervville-master/fonts/webfonts/Baskervville-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ANRT-Baskervville-master/ANRT-Baskervville-master/fonts/webfonts/Baskervville-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-baskervville",
});

export const metadata = {
  title: "KOR Digital",
  description: "KOR Digital website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${baskervville.variable}`}>
      <body>{children}</body>
    </html>
  );
}
