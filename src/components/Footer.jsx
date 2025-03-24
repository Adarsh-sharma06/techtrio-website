"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Animation settings for "TECHTRIO"
const letterAnimations = [
  { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6 } } }, // T
  { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }, // E
  { hidden: { rotate: -90, opacity: 0 }, visible: { rotate: 0, opacity: 1, transition: { duration: 0.6 } } }, // C
  { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } }, // H
  { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } } }, // T
  { hidden: { rotateY: 180, opacity: 0 }, visible: { rotateY: 0, opacity: 1, transition: { duration: 0.6 } } }, // R
  { hidden: { skewX: -20, opacity: 0 }, visible: { skewX: 0, opacity: 1, transition: { duration: 0.6 } } }, // I
  { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } }, // O
];

const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AnimatedWords = () => {
  const [open, setOpen] = useState(false);
  const letters = ["T", "E", "C", "H", "T", "R", "I", "O"];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("animated-text");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.8;

      if (rect.top < triggerPoint) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
<motion.div
  id="animated-text"
  className="flex justify-center items-end gap-6 md:gap-10 w-full text-7xl md:text-[8rem] font-bold uppercase tracking-wider leading-none"
  initial="hidden"
  animate={open ? "visible" : "hidden"}
>
  {letters.map((letter, index) => (
    <motion.span
      key={index}
      variants={letterAnimations[index]}
      className={`inline-block transition-transform duration-300 ${
        [0,  5, ].includes(index) ? "text-8xl md:text-[10rem]" : "text-7xl md:text-[8rem]"
      } ${
        index === 0 ? "text-orange-500" // First "T" in Orange
        : index === 5 ? "text-orange-500" 
        : "text-gray-900 dark:text-gray-100"
      }`}
    >
      {letter}
    </motion.span>
  ))}
</motion.div>

  );
};

const Footer = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const words = ["Let's", "build", "a", "better", "future", "with"];

  return (
    <footer className="h-screen bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md py-8">
      {/* CTA Section */}
      <div className={`py-16 my-12 px-6 ${theme === "dark" ? "bg-gray-900" : "bg-[#FFF9C4]"}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-custom mx-auto">
          {/* CTA Title */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h3
              key={pathname}
              className={`text-4xl md:text-5xl font-extrabold leading-tight tracking-widest ${
                theme === "dark" ? "text-[#FFF9C4]" : "text-gray-900"
              }`}
              variants={sentenceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {words.map((word, index) => (
                <motion.span key={index} variants={wordVariants} className="inline-block mx-1">
                  {word}
                </motion.span>
              ))}
              <motion.span variants={wordVariants} className="inline-block mx-1 text-yellow-500">
                Technology.
              </motion.span>
            </motion.h3>

            {/* CTA Button */}
            <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
              <Link
                href="/contact"
                className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-5 md:py-3 rounded-md transition text-sm md:text-base"
              >
                LET'S GO
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

          {/* CTA Description */}
          <div className="md:w-1/3 text-center md:text-right">
            <p className={`text-base md:text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
              Find out how TechTrio’s technology expertise can take your digital experience to the next level.
            </p>
          </div>
        </div>
      </div>

     

      {/* Footer Bottom */}
      <div className="max-w-custom mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          {/* Services */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-lg">
              <li><Link href="/solutions/provider-solutions">Automation</Link></li>
              <li><Link href="/solutions/healthtech-solutions">Payment Gateway</Link></li>
              <li><Link href="/solutions/payor-solutions">App Development</Link></li>
              <li><Link href="/solutions/pharma-solutions">Web Development</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">About</h3>
            <ul className="space-y-3 text-lg">
              <li><Link href="/casestudies">About</Link></li>
              <li><Link href="/category/thought-leadership">Careers</Link></li>
              <li><Link href="/category/newsroom">Blogs</Link></li>
              <li><Link href="/category/resources">Our Team</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Support and Legal</h3>
            <ul className="space-y-3 text-lg">
              <li><Link href="/team">FAQs & Privacy Policy</Link></li>
              <li><Link href="/careers">Live Chat</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-6">
              <Link href="/team">Vijapur, Gujarat</Link>
            </div>
            <Link href="/contact" className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition text-lg">
              CONTACT US
            </Link>
          </div>
        </div>
 {/* Animated TECHTRIO Words Above Divider */}
 <AnimatedWords />

{/* Divider */}
<div className="relative border-t border-gray-700 mb-6"></div>
        {/* Copyright */}
        <div className="flex justify-between items-center text-sm mt-10">
          <div>© {new Date().getFullYear()} TechTrio. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
