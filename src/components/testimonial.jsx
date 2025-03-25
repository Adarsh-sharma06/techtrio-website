"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../../db/firebase"; // Adjust the import path as needed

export default function TestimonialSection() {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("light");
  const [testimonials, setTestimonials] = useState([]);
  const testimonialRefs = useRef([]);

  // Ensure immediate theme update
  useEffect(() => {
    if (resolvedTheme) setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  // Dynamic styles based on theme
  const themeView = currentTheme === "dark" ? "bg-black text-white" : "bg-white text-black";
  const themeText = currentTheme === "dark" ? "text-white" : "text-black";
  const themeCardBg = currentTheme === "dark" ? "bg-gray-900" : "bg-gray-100";
  const themeRoleText = currentTheme === "dark" ? "text-gray-400" : "text-gray-600";

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

  // Restore animation exactly as before (for PC only)
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;  // Skip animation for mobile

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "translate-x-full", "-translate-x-full");
          } else {
            entry.target.classList.add("opacity-0");
            entry.target.classList.remove("opacity-100", "translate-x-0");
            if (entry.target.dataset.index % 2 === 0) {
              entry.target.classList.add("-translate-x-full");
            } else {
              entry.target.classList.add("translate-x-full");
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
    <div className={`min-h-screen ${themeView} flex flex-col justify-center items-center px-6 py-12 transition-colors duration-300`}>
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className={`text-4xl font-semibold ${themeText}`}>Testimonials.</h2>
        <h3 className={`text-3xl font-bold ${themeText}`}>Rumour has it.</h3>
      </div>

      {/* Testimonials Container */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={(el) => (testimonialRefs.current[index] = el)}
            data-index={index}
            className={`max-w-md bg-transparent 
              ${window.innerWidth >= 1024 ? "opacity-0 transition-all duration-1000 ease-in-out" : "opacity-100"} 
              ${window.innerWidth >= 1024 ? (index % 2 === 0 ? "-translate-x-full" : "translate-x-full") : "translate-x-0"}
              ${testimonials.length % 2 !== 0 && index === testimonials.length - 1 ? "md:col-span-2 md:mx-auto" : ""}`}
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

      {/* LET'S GO Button - Now at the Bottom and Centered */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/contact"
          className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-5 md:py-3 rounded-md transition text-sm md:text-base"
        >
          See Projects
          <svg
            className="ml-2 w-4 h-4 md:w-5 md:h-5"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.53848 13.7123L12.9631 6.28769M12.9631 6.28769V13.7123M12.9631 6.28769H5.53848"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
