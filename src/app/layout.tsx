import type { Metadata } from "next";
import { Cousine } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InitializeState from "@/components/InitializeState";

const inter = Cousine({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Header />
        <main className="flex-grow p-4">
          {children}
        </main>
        <Footer />
        <InitializeState />
        <ToastContainer />
      </body>
    </html>
  );
}