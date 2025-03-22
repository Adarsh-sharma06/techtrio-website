
import ContactForm from "./../components/ContactForm";
import Hero from "../components/Hero";
import TestimonialSection from "./../components/testimonial";
import Insights from "./../components/Insights";

export default function Home() {
  return (
    <main className="pt-16 min-h-screen">

      <Hero />
    <TestimonialSection/>
    <Insights/>

    </main>
  );
}
