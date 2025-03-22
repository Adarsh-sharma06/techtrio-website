"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  const { theme } = useTheme();
  const pathname = usePathname(); // ✅ Get current pathname
  const words = [
    "Let's", "build", "a", "better", "future", "with"
  ];

  return (
    <footer className="w-screen bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md py-8">
      {/* CTA Section */}
      <div
        className={`w-screen py-16 mb-20 px-6 ${
          theme === "dark" ? "bg-gray-900" : "bg-[#FFF9C4]"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-custom mx-auto">
          {/* CTA Title */}
          <div className="md:w-1/2 text-center md:text-left">
          <motion.h3
              key={pathname} // ✅ Forces re-animation on page change
              className={`text-4xl md:text-5xl font-extrabold leading-tight tracking-widest ${
                theme === "dark" ? "text-[#FFF9C4]" : "text-gray-900"
              }`}
              variants={sentenceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }} // ✅ Re-animates on scroll
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
            <p
              className={`text-base md:text-lg ${
                theme === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Find out how TechTrio’s technology expertise can take your digital experience to the next level.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Content Row */}
      <div className="max-w-custom mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/provider-solutions" className="hover:text-gray-400">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions/healthtech-solutions" className="hover:text-gray-400">
                  Payment Gateway
                </Link>
              </li>
              <li>
                <Link href="/solutions/payor-solutions" className="hover:text-gray-400">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/solutions/pharma-solutions" className="hover:text-gray-400">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/casestudies" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/category/thought-leadership" className="hover:text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/category/newsroom" className="hover:text-gray-400">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/category/resources" className="hover:text-gray-400">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Support and Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support and Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/team" className="hover:text-gray-400">
                  FAQs & Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-400">
                  Live Chat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <div className="mb-4">
              <Link href="/team" className="hover:text-gray-400">
                Vijapur, Gujarat
              </Link>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition"
            >
              CONTACT US
              <svg
                className="ml-2 w-4 h-4"
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

        {/* Divider */}
        <div className="relative border-t border-gray-700 my-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-10">
          {/* Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacypolicy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-gray-400">
              Terms of Use
            </Link>
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-0">
            © {new Date().getFullYear()} TechTrio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
