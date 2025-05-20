import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const youngSerif = localFont({
  src: "../public/young-serif/YoungSerif-Regular.ttf",
  variable: "--font-young-serif",
});

const outfit = localFont({
  src: "../public/outfit/Outfit-VariableFont_wght.ttf",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "FEM - Recipe page",
  description: "Created by lilKriT",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${youngSerif.className} ${outfit.className} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
