// import ContactForm from "./../../components/ContactForm";

// export default function About() {
//   return (
//     <div className="flex flex-col">

//       {/* Scrollable Content Section */}
//       <main className="flex-1">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
//             About TechTrio Automation
//           </h1>

//           <div className="max-w-3xl space-y-6 text-gray-700 dark:text-gray-300">
//             <p>
//               Welcome to{" "}
//               <span className="font-semibold text-gray-900 dark:text-white">
//                 TechTrio Automation
//               </span>
//               , where we blend innovation with technology to create smart solutions for businesses.
//               Our expertise in{" "}
//               <strong>
//                 website development, software solutions, mobile applications, and automation
//                 technologies
//               </strong>{" "}
//               allows us to cater to a wide range of industries.
//             </p>

//             <section>
//               <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
//                 Our Mission
//               </h2>
//               <p>
//                 Our mission is to{" "}
//                 <strong>simplify and automate</strong> everyday operations for businesses by
//                 delivering <strong>cost-effective, scalable, and high-performance</strong>{" "}
//                 technology solutions.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
//                 Our Vision
//               </h2>
//               <p>
//                 We aim to be a{" "}
//                 <strong>leading technology solutions provider</strong> by integrating AI, IoT,
//                 and modern software engineering principles to solve real-world challenges.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
//                 What We Offer
//               </h2>
//               <ul className="list-disc list-inside space-y-2">
//                 <li>Custom Website & Web Application Development</li>
//                 <li>Enterprise Resource Planning (ERP) Solutions</li>
//                 <li>Mobile App Development (Android & iOS)</li>
//                 <li>Smart Parking & Tracking Systems</li>
//                 <li>Cloud Hosting & DevOps Services</li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
//                 Why Choose Us?
//               </h2>
//               <ul className="list-disc list-inside space-y-2">
//                 <li>✅ Expertise in MERN Stack & React Native</li>
//                 <li>✅ Scalable & Budget-Friendly Solutions</li>
//                 <li>✅ Fast, Reliable, and Secure Development</li>
//                 <li>✅ Tailored Solutions to Meet Your Needs</li>
//               </ul>
//             </section>
//           </div>
//         </div>
//          <ContactForm/>
//       </main>
//     </div>
//   );
// }










"use client";

import ContactForm from "./../../components/ContactForm";
import TestimonialSection from "./../../components/testimonial";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const timelineItems = [

    {
      text: "Significa was founded by Pedro 'El Patrón' Brandão.",
      images: ["https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg", "https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg"],
      stickers: ["/stickers/arrow.svg"],
    },
    {
      text: "Mariana was our first hire in 2016, and has been with us ever since.",
      images: [
        "https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg",
      ],
      stickers: ["/stickers/egg.svg"],
      button: "Join us",
    },
    {
      text: "In that year we moved to a bigger office.",
      images: ["https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg", "https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg"],
      stickers: ["/stickers/diamond.svg"],
    },
    {
      text: "We met Coletiv and collaborated on many projects together.",
      images: ["https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg"],
      stickers: ["/stickers/glasses.svg"],
    },

   {
    text: "Significa was founded by Pedro 'El Patrón' Brandão.",
    images: ["/images/timeline1.jpg", "/images/timeline2.jpg"],
    stickers: ["/stickers/arrow.svg"],
  },
  {
    text: "Mariana was our first hire in 2016, and has been with us ever since.",
    images: ["/images/timeline3.jpg"],
    stickers: ["/stickers/egg.svg"],
    button: "Join us",
  },
  {
    text: "In that year we moved to a bigger office.",
    images: ["/images/timeline4.jpg", "/images/timeline5.jpg"],
    stickers: ["/stickers/diamond.svg"],
  },
  {
    text: "We met Coletiv and collaborated on many projects together.",
    images: ["/images/timeline6.jpg"],
    stickers: ["/stickers/glasses.svg"],
  }, {
    text: "Significa was founded by Pedro 'El Patrón' Brandão.",
    images: ["/images/timeline1.jpg", "/images/timeline2.jpg"],
    stickers: ["/stickers/arrow.svg"],
  },
  {
    text: "Mariana was our first hire in 2016, and has been with us ever since.",
    images: ["/images/timeline3.jpg"],
    stickers: ["/stickers/egg.svg"],
    button: "Join us",
  },
  {
    text: "In that year we moved to a bigger office.",
    images: ["/images/timeline4.jpg", "/images/timeline5.jpg"],
    stickers: ["/stickers/diamond.svg"],
  },
  {
    text: "We met Coletiv and collaborated on many projects together.",
    images: ["/images/timeline6.jpg"],
    stickers: ["/stickers/glasses.svg"],
  },
];


const values = [
  {
    title: "Empathy and compassion.",
    description:
      "We recognize we are all human and that, as such, we are all different. We embrace difference.",
    image: "https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg",
  },
  {
    title: "Teamwork.",
    description: "Go further together with curiosity and empathy, always.",
    image: "https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg",

  },
  {
    title: "Playfulness.",
    description:
      "We are witty by nature. We have fun at work while being extremely professional in what we do.",
      image: "https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg",

  },
  {
    title: "Integrity.",
    description:
      "We foster an environment where reliability and ethical principles are not just appreciated.",
      image: "https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg",

  },
  {
    title: "Ambition.",
    description:
      "We aspire higher. We push ourselves to be better. We push others to be better.",
      image: "https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg",

  },
];

export default function About() {
  const { theme } = useTheme();
  const scrollContainer = useRef(null);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!scrollContainer.current) return;
      event.preventDefault();

      const container = scrollContainer.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      container.scrollLeft += event.deltaY * 1.5;

      if (container.scrollLeft >= maxScrollLeft - 10) {
        setIsAtEnd(true);
        setIsAtStart(false);
      } else if (container.scrollLeft <= 10) {
        setIsAtStart(true);
        setIsAtEnd(false);
      } else {
        setIsAtEnd(false);
        setIsAtStart(false);
      }
    };

    const container = scrollContainer.current;
    container?.addEventListener("wheel", handleScroll, { passive: false });

    return () => container?.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    if (isAtEnd) {
      setTimeout(() => {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      }, 500);
    }
  }, [isAtEnd]);

  useEffect(() => {
    const handleScrollUp = () => {
      if (window.scrollY === 0 && isAtEnd) {
        scrollContainer.current?.scrollTo({ left: 0, behavior: "smooth" });
        setIsAtEnd(false);
        setIsAtStart(true);
      }
    };

    window.addEventListener("scroll", handleScrollUp);
    return () => window.removeEventListener("scroll", handleScrollUp);
  }, [isAtEnd]);

  return (
    
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1">
      <TestimonialSection />
      <ContactForm />
        <section
          className={`relative w-full h-[80vh] mt-20 pt-10 ${
            isAtEnd ? "overflow-y-auto" : "overflow-hidden"
          }`}
        >
          <div
            ref={scrollContainer}
            className="relative flex space-x-20 overflow-x-auto overflow-y-hidden px-20 py-10 snap-x snap-mandatory no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className="shrink-0 w-[450px] h-[500px] flex flex-col items-center space-y-4 snap-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="text-lg text-center font-light">{item.text}</p>
                <div className="relative flex flex-wrap justify-center space-x-4">
                  {item.images.map((img, imgIndex) => (
                    <motion.div key={imgIndex} className="relative">
                      <Image
                        src={img}
                        alt="timeline image"
                        width={150}
                        height={150}
                        className="rounded-lg shadow-md border-2 border-white"
                      />
                    </motion.div>
                  ))}
                </div>
                {item.stickers?.map((sticker, sIndex) => (
                  <Image
                    key={sIndex}
                    src={sticker}
                    alt="sticker"
                    width={50}
                    height={50}
                    className="absolute -bottom-4 -right-4"
                  />
                ))}
                {item.button && (
                  <button className="bg-white text-black px-4 py-2 rounded-md shadow-md">
                    {item.button}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </section>

 {isAtEnd && (
          <section
            className={`p-20 text-center transition-colors duration-300 ${
              theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"  
            }`}
          >
            <h2 className="text-4xl font-bold">Welcome to the next section!</h2>
            <p className="text-lg mt-4">Now you can scroll down normally.</p>
          </section>
        )} 

        <div className={`${theme === "dark" ? "bg-black" : "bg-white"}`}>
        {/* Our Values Section */}
        <section className="pt-28 pb-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Animated Heading */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-extrabold leading-tight">Core values.</h2>
            <h3 className="text-5xl font-extrabold text-gray-400 mt-2">
              Expressed in everything.
            </h3>
          </motion.div>

          {/* Right Side: Values List */}
          <div className="space-y-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 pb-10 border-b border-gray-500 last:border-none"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={value.image}
                  alt={value.title}
                  width={80}
                  height={90}
                  className="object-contain"
                />
               <div className="space-y-2 ">
  <h4 className="text-2xl font-extrabold text-gray-500 tracking-wide uppercase">
    {value.title}
  </h4>
  <p className="text-lg  leading-relaxed">
    {value.description}
  </p>
</div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

          <TestimonialSection />
          <ContactForm />
        </div>
     
      </main>
    </div>
  );
}
