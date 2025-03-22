"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../../db/firebase"; // Adjust the import path as needed

export default function TestimonialSection() {
  const { resolvedTheme } = useTheme(); // Get the current theme
  const [testimonials, setTestimonials] = useState([]); // State to store testimonials
  const testimonialRefs = useRef([]); // Refs for testimonial elements

  // Dynamic styles based on theme
  const themeView = resolvedTheme === "dark" ? "bg-black text-white" : "bg-white text-black";
  const themeText = resolvedTheme === "dark" ? "text-white" : "text-black";
  const themeCardBg = resolvedTheme === "dark" ? "bg-gray-900" : "bg-gray-100";
  const themeBorder = resolvedTheme === "dark" ? "border-gray-600" : "border-gray-300";
  const themeButtonText = resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600";
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

  // Scroll animation for testimonials
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
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    testimonialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      testimonialRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [testimonials]); // Re-run effect when testimonials change

  return (
    <div className={`min-h-screen ${themeView} flex flex-col justify-center items-center px-6 py-12`}>
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className={`text-4xl font-semibold ${themeText}`}>Testimonials.</h2>
        <h3 className={`text-3xl font-bold ${themeText}`}>Rumour has it.</h3>
        <button
          className={`mt-4 px-6 py-2 border ${themeBorder} rounded-full ${themeButtonText} hover:bg-gray-800 transition`}
        >
          See projects →
        </button>
      </div>

      {/* Testimonials Container */}
      <div className="relative w-full max-w-6xl flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={(el) => (testimonialRefs.current[index] = el)}
            className={`max-w-md bg-transparent opacity-0 ${
              index % 2 === 0 ? "-translate-x-full" : "translate-x-full"
            } transition-all duration-1000 ease-in-out`}
          >
            <p className={`text-lg font-semibold ${themeCardBg} px-6 py-4 rounded-lg shadow-lg`}>
              “{testimonial.quote}”
            </p>
            <div className="flex items-center mt-4">
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