import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import Services from "../components/services";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
    </main>
  );
}
