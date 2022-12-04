"use client";

import { useEffect } from "react";
import "./globals.css";

export default function ParalaxTest() {
  useEffect(() => {
    const parallax: any = document.getElementById("paralax");

    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
    });
  }, []);

  return (
    <>
      <section className="bg-red-700" id="paralax">
        <h2>Div 1</h2>
      </section>
      <section className="bg-blue-700">
        <h2>Div 2</h2>
      </section>
      <section className="bg-green-700">
        <h2>Div 3</h2>
      </section>
      <section className="bg-orange-700">
        <h2>Div 4</h2>
      </section>
    </>
  );
}
