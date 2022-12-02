import Footer from "./Footer";

export default function Homepage() {
  return (
    <div className="container mx-auto flex flex-col h-72 justify-center">
      <h1 className="  px-5 text-4xl lg:text-8xl titlecase font-semibold text-white">
        Front End Web Developer
      </h1>
      <h2 className=" px-5 lg:p-5 lg:text-2xl text-base text-white">
        HTML, CSS, JS, React, NextJS & TailwindCSS.
      </h2>
    </div>
  );
}
