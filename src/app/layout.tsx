import type { Metadata } from "next";
import { Roboto , Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto ({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-robot-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Defensoría Universitaria de la Universidad Jorge Basadre Grohmann",
  description: "El saber te empodera para defender tus derechos",
    icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
