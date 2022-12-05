"use client";

import { useEffect } from "react";
import "./globals.css";

export default function ParalaxTest() {
  useEffect(() => {
    const parallax: any = document.getElementById("paralax");

    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset - 400;
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
    });
  }, []);

  return (
    <>
      <section id="paralax" style={{ backgroundPositionY: "-280px" }}>
        <div
          className="flex flex-col justify-center w-1/2 text-gray-800 rotate-6"
          id="section1"
        >
          <h1 className="px-5 text-4xl lg:text-6xl uppercase font-black text-black break-words ">
            Graphic Designer / Photographer / Front End Web Developer
          </h1>
          <h2 className=" px-5 lg:p-5 lg:text-2xl text-bold font-thin bg-white ">
            Figma, HTML, CSS, TailwindCSS, JavaScript, ReactJS, NextJS &
            Firebase Cloud Architechure.
          </h2>
        </div>
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
