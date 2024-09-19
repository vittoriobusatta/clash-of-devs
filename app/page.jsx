"use client";

import Hero from "./comps/hero";
import Marquee from "./comps/marquee";
import Sections from "./comps/sections";
import Final from "./comps/final";
import Footer from "./comps/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Sections />
      <Final />
      <Footer />
    </main>
  );
}
