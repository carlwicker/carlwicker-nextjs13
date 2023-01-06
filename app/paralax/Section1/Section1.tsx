import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Section1() {
  const headerRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      "#head",
      {
        rotation: -9,
        x: 20,
        autoAlpha: 0,
      },
      {
        rotation: 6,
        x: 0,
        autoAlpha: 1,
        duration: 0.5,
      }
    );
  }, []);

  // useEffect(() => {
  //   const parallax: any = document.getElementById("paralax");

  //   window.addEventListener("scroll", () => {
  //     let offset = window.pageYOffset - 400;
  //     parallax.style.backgroundPositionY = offset * 0.7 + "px";
  //   });
  // }, []);

  return (
    <section
      id="paralax"
      style={{
        backgroundImage: `url("/img/pic1.webp")`,
        backgroundSize: "fit",
        backgroundPositionY: "-280px",
      }}
      className="flex w-full bg-cover items-center min-h-screen justify-center"
    >
      <div
        ref={headerRef}
        id="head"
        className="head flex flex-col mx-auto justify-center align-middle opacity-0"
      >
        <h1
          className="uppercase font-black text-white text-9xl tracking-tighter scale-150 drop-shadow-md mx-auto"
          style={{ fontFamily: "times" }}
        >
          UX UI DEV
        </h1>
        <p className="p-5  text-white drop-shadow-md">
          Adobe Creative, Figma, HTML, CSS, TailwindCSS, JavaScript, ReactJS,
          NextJS & Google Cloud Architechure
        </p>
      </div>
    </section>
  );
}
