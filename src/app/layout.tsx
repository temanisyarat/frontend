import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TemanIsyarat",
    template: "%s | TemanIsyarat",
  },
  icons:{
    icon: '/temanisyarat-icon.png'
  },
  description:
    "TemanIsyarat adalah aplikasi penerjemah bahasa isyarat berbasis AI untuk komunikasi yang lebih inklusif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${roboto.variable} h-full scroll-smooth antialiased`}>
      <body className={`${roboto.className} min-h-full flex flex-col bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
