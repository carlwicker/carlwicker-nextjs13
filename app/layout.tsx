"use client";

import "./globals.css";
import { useState } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import ParalaxTest from "./para/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html>
      <head />
      <body>
        <div className="absolute w-full z-10 bg-transparent">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen && <MobileMenu />}
        </div>

        <div className="absolute z-20 h-full" style={{ bottom: "200px" }}>
          <Footer />
        </div>
        {children}
      </body>
    </html>
  );
}
