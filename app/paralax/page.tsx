"use client";

import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Footer from "./Footer/Footer";

export default function ParalaxTest() {
  return (
    <div className="overflow-hidden">
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}
