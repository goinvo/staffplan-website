import type { Metadata } from "next";
import './globals.css';
import { Source_Sans_3 } from 'next/font/google';
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Chat from "./components/Chat";

export const metadata: Metadata = {
  title: "https://www.staffplan.com",
  description: "StaffPlan: A lightweight time tracker.",
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
        {/* <Chat /> */}
      </body>
    </html>
  );
}
