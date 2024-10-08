import Hero from "./comps/sections/hero";
import Marquee from "./comps/sections/marquee";
import Sections from "./comps/sections/sections";
import Footer from "./comps/layout/footer";

export const metadata = {
  title: "Clash Of Dev | <A> Front les tous !",
  icons: {
    icon: "/favicon.ico",
  },
};

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
