"use client";

import "./globals.css";
import { useState } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>
      <body>
        <div className="absolute w-full z-10 bg-transparent">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen && <MobileMenu />}
        </div>
        {children}
      </body>
    </html>
  );
}
