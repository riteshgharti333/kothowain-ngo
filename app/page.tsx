import About from "./components/About";
import Causes from "./components/Causes";
import Donate from "./components/Donate";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Vision from "./components/Vision";
import Volunteer from "./components/Volunteer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Marquee/>
      <About />
      <Vision />
      <Causes />
      <Donate />
      <Team />
      <Testimonial />
      <Volunteer />
    </div>
  );
}
