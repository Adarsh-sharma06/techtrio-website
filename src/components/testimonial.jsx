"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { db } from "./../../db/firebase";

export default function TestimonialSection() {
  const { resolvedTheme } = useTheme();
  const [testimonials, setTestimonials] = useState([]);
  const testimonialRefs = useRef([]);

  // Dynamic styles based on theme
  const themeView = resolvedTheme === "dark" ? "bg-black text-white" : "bg-white text-black";
  const themeText = resolvedTheme === "dark" ? "text-white" : "text-black";
  const themeCardBg = resolvedTheme === "dark" ? "bg-gray-900" : "bg-gray-100";
  const themeBorder = resolvedTheme === "dark" ? "border-gray-600" : "border-gray-300";
  const themeRoleText = resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600";

  // Fetch testimonials from Firestore
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        const testimonialData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestimonials(testimonialData);
      } catch (error) {
        console.error("Error fetching testimonials: ", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Scroll animation for Desktop
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "translate-x-full", "-translate-x-full");
          }
        });
      },
      { threshold: 0.1 }
    );

    testimonialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      testimonialRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [testimonials]);

  return (
    <div className={`min-h-screen ${themeView} flex flex-col justify-center items-center px-4 sm:px-6 py-10`}>
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className={`text-3xl sm:text-4xl font-semibold ${themeText}`}>Testimonials.</h2>
        <h3 className={`text-2xl sm:text-3xl font-bold ${themeText}`}>Rumour has it.</h3>
        <button
          className={`mt-4 px-4 sm:px-6 py-2 border ${themeBorder} rounded-full text-gray-600 hover:bg-gray-800 transition`}
        >
          See projects →
        </button>
      </div>

      {/* ✅ Mobile Animation (Values Section Style) */}
      <div className="w-full max-w-4xl sm:hidden flex flex-col gap-8 px-6 py-8">
  {testimonials.map((testimonial, index) => (
    <motion.div
      key={testimonial.id}
      className={`w-full ${themeCardBg} px-8 py-6 rounded-xl shadow-md border ${themeBorder} transform transition duration-500 hover:scale-[1.02]`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <p className="text-lg font-semibold leading-relaxed">“{testimonial.quote}”</p>
      <div className="flex items-center mt-5">
        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-gray-300" />
        <div className="ml-4">
          <p className={`font-bold text-lg ${themeText}`}>{testimonial.name}</p>
          <p className={`${themeRoleText} text-sm italic`}>{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>



      {/* ✅ Desktop Animation (Slide-in from Left/Right) */}
      <div className="w-full max-w-4xl hidden sm:flex flex-wrap justify-center items-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={(el) => (testimonialRefs.current[index] = el)}
            className={`w-full sm:w-[80%] md:w-[48%] opacity-0 ${
              index % 2 === 0 ? "-translate-x-full" : "translate-x-full"
            } transition-all duration-1000 ease-in-out`}
          >
            <p className={`text-lg font-semibold ${themeCardBg} px-6 py-4 rounded-lg shadow-lg`}>
              “{testimonial.quote}”
            </p>
            <div className="flex items-center mt-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <p className={`font-bold ${themeText}`}>{testimonial.name}</p>
                <p className={`${themeRoleText} text-sm`}>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
