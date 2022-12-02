"use client";

import "./globals.css";
import { useState } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html>
      <head />

      <body className="m-5">
        <div>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen && <MobileMenu />}
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
