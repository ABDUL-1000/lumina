import type { Metadata } from "next";
import { Mochiy_Pop_P_One } from "next/font/google";
import "./globals.css";

// Load the Mochiy Pop P One font
const mochiyPopPOne = Mochiy_Pop_P_One({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-mochiy",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Lumina360",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mochiyPopPOne.variable} antialiased bg-[#F9FAFB] `}>
        {children}
      </body>
    </html>
  );
}