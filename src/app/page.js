
import ContactForm from "./../components/ContactForm";
import Hero from "../components/Hero";
import TestimonialSection from "./../components/testimonial";
import Insights from "./../components/Insights";
import Products from "../components/Products";
import  Trail  from "../components/Trail";

export default function Home() {
  return (
    <main className="pt-16 min-h-screen">

      <Hero />
      <Products/>
    <TestimonialSection/>
    <Insights/>

    </main>
  );
}
