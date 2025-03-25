"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const insights = [
  {
    title: "Innovation is a Mindset, Not a Department",
    description:
      "Innovation shouldn't be limited to a specific team or project. Encourage every employee to contribute ideas...",
    category: "Thought Leadership",
    date: "December 5, 2024",
    readTime: "7 min read",
    author: "TechTrio",
    image: "https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg",
    link: "/blog/personalizing-healthcare-technology-with-gamification",
  },
  {
    title: "User-Centered Design Drives Success",
    description:
      "The best software isn't just functional – it's intuitive and delightful. Involve users early and often...",
    category: "Thought Leadership",
    date: "November 19, 2024",
    readTime: "8 min read",
    author: "TechTrio",
    image: "https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg",
    link: "/blog/crafting-health-experiences-the-role-of-personalized-educational-content-in-digital-health-products",
  },
  {
    title: "Automation is Your Best Friend",
    description:
      "Repetitive tasks slow down progress. Automate wherever possible – from testing to deployment pipelines...",
    category: "Thought Leadership",
    date: "October 1, 2024",
    readTime: "12 min read",
    author: "TechTrio",
    image: "https://res.cloudinary.com/ddztecdya/image/upload/v1734269530/ndmqsnjupikvjgwbndoh.jpg",
    link: "/blog/personalization-in-the-digital-health-industry",
  },
];

const Insights = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      {/* Section Heading */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Explore Our Insights
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-2">
          Stay informed about the latest innovations and industry insights.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="mt-12 grid gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {insights.map((post, index) => (
          <motion.div
            key={index}
            className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300 w-full max-w-[350px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: false }}
          >
            <Link href={post.link}>
              <div className="relative w-full h-56 sm:h-60 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:opacity-85 transition-all duration-300"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
              </div>
              <div className="p-5 sm:p-6">
                <span className="text-sm font-semibold uppercase text-purple-600 dark:text-purple-400 tracking-wide">
                  {post.category}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mt-2 sm:mt-3 text-gray-900 dark:text-white transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-3 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center mt-3 sm:mt-4 text-gray-400 text-xs sm:text-sm">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Articles Button */}
      <motion.div
        className="mt-12 sm:mt-16 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link href="/category/thought-leadership">
          <button className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-md transition text-sm sm:text-base">
            VIEW ALL ARTICLES
            <svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
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
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Insights;
