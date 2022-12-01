"use client";

import { useState } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

export default function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && <MobileMenu />}

      <h1 className="container mx-auto px-5 text-4xl lg:text-8xl titlecase font-semibold text-white">
        Front End Web Developer
      </h1>
      <h2 className="container mx-auto px-5 lg:p-5 lg:text-2xl text-base text-white">
        HTML, CSS, React, NextJS & TailwindCSS.
      </h2>

      <Footer />
    </>
  );
}
