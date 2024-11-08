import type { Metadata } from "next";
import './globals.css';
import { Source_Sans_3 } from 'next/font/google';
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Staffplan Website",
  description: "Generated by create next app",
};

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={sourceSansPro.className}
      >
        <Header />
        <main className="mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
