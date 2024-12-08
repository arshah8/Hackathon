import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";




import "./globals.css";
import Navbar from "./Components/Navbar";
import { MobileSidebar } from "./Components/MobileSidebar";
import { Footer } from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Rent A Car",
};
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans", 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${inter.className} ${plusJakartaSans.className}`}>
          <Navbar/>
          <MobileSidebar/>
      {children}
      <Footer/>
    </body>


    </html>
  );
}
