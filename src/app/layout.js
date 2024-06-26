import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Exo_2} from 'next/font/google'
const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-Exo-2',
  weight: ['600']
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo2.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
