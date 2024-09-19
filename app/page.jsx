"use client";

import Hero from "./comps/sections/hero";
import Marquee from "./comps/sections/marquee";
import Sections from "./comps/sections/sections";
import Final from "./comps/sections/final";
import Footer from "./comps/layout/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Sections />
      <Footer />
    </main>
  );
}
