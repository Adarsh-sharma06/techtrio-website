
import React, { useEffect } from "react";
import TestimonialSection from "./../../components/testimonial";
import ContactForm from "./../../components/ContactForm";

export default function Services() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables Section */}
      <section className="bg-gray-100 dark:bg-black text-black dark:text-white mx-auto p-8  py-24">
  <div className="container mx-auto flex flex-col lg:flex-row justify-end">
    {/* Left Section - Sticky Title */}
    <div className="w-full lg:w-1/2 lg:sticky top-20 self-start text-center">
      <h2 className="text-4xl font-bold">Deliverables.</h2>
      <p className="text-xl mt-2 text-gray-600 dark:text-gray-400">
        Including but not limited to.
      </p>
    </div>

    {/* Right Section - Services List */}
    <div className="w-full lg:w-1/2 mt-10 lg:mt-0 space-y-8 pl-10">
      {services.map((service, index) => (
        <div key={index} className="flex items-start space-x-4">
          <span className="text-3xl">{service.icon}</span>
          <div>
            <h2 className=" text-2xl ">{service.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
</section>


      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Contact Form */}
      <ContactForm />
      
    </main>
  );
}

// Services List with Icons (Memoized to Avoid Re-renders)
const services = [
  { icon: "🛒", title: "E-commerce", description: "The online shop where you can sell your products." },
  { icon: "🖥️", title: "Website", description: "Things like your corporate or marketing website." },
  { icon: "💻", title: "Desktop App", description: "The apps that run natively on your computer." },
  { icon: "🌍", title: "Web App", description: "The apps that run in your web browser." },
  { icon: "📱", title: "Mobile App", description: "Apps that run natively on your Android and iOS phones." },
  { icon: "📂", title: "CMS", description: "Content Management System. The system where content gets managed." },
  { icon: "⌚", title: "Watch and TV App", description: "Apps that run natively on your watch or your TV." }
];

