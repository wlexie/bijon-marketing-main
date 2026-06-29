import CTAForm from "./components/home/CTAForm";
import Hero from "./components/home/Hero";
import OurStory from "./components/home/OurStory";
import Partners from "./components/home/Partners";
import Services from "./components/home/Services";
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <Services />
      <Partners />
      <Testimonials />
      <CTAForm />
    </>
  );
}
