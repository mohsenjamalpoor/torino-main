import localFont from "next/font/local";

import { Toaster } from "react-hot-toast";

import TanstackQueryProvider from "@/components/partials/provider/TanstackQueryProvider";

import "./globals.css";

import Header from "@/components/templates/header";
import Footer from "@/components/templates/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "torino",
  description: "online Tour Reservation application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackQueryProvider>
          <Header />

          {children}
          <Footer />
        </TanstackQueryProvider>

        <Toaster />
      </body>
    </html>
  );
}
