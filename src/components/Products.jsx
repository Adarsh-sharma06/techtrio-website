"use client"; // Ensures this is a client component

import { useState } from "react";
import Image from "next/image";

const Products = () => {
  const [activeTab, setActiveTab] = useState("DataAnalytics");

  const tabs = [
    {
      id: "DataAnalytics",
      label: "Data Analytics and Automation",
      img: "https://elementor.com/cdn-cgi/image/f=auto,w=604/https://elementor.com/wp-content/uploads/2021/05/developer-1.png",
      description:
        "We provide cutting-edge data solutions, helping financial institutions optimize processes through advanced analytics, AI, and automation.",
    },
    {
      id: "CloudServices",
      label: "Cloud Services",
      img: "https://www.nucleussoftware.com/wp-content/uploads/2023/12/cloud-services-tab.png",
      description:
        "Secure and scalable cloud solutions tailored to your needs, ensuring seamless data integration and business agility.",
    },
    {
      id: "AppModernization",
      label: "Application Modernization",
      img: "https://www.nucleussoftware.com/wp-content/uploads/2023/12/data-analytics-automation.png",
      description:
        "Transform legacy systems into modern, efficient applications that enhance operational efficiency and user experience.",
    },
    {
      id: "InfraServices",
      label: "Infra Services",
      img: "https://www.nucleussoftware.com/wp-content/uploads/2023/12/cloud-services-tab.png",
      description:
        "Robust IT infrastructure solutions ensuring security, performance, and scalability for financial institutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Services Portfolio for Financial Institutions
      </h1>

      {/* Tabs - Scrollable on small screens */}
      <div className="w-full m-4 overflow-x-auto">
        <div className="flex space-x-2 md:space-x-8 bg-black dark:bg-gray-800 p-4 rounded-full w-max mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 whitespace-nowrap rounded-full transition-all text-xs md:text-sm font-medium ${
                activeTab === tab.id
                  ? "bg-yellow-400 text-black"
                  : "text-white dark:text-white hover:bg-white hover:text-black dark:hover:bg-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-10 p-10 max-w-5xl w-full flex flex-col items-center">
        {tabs
          .filter((tab) => tab.id === activeTab)
          .map((tab, index) => (
            <div
              key={tab.id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } justify-between gap-6 w-full`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={tab.img}
                  alt={tab.label}
                  width={400}
                  height={250}
                  className="rounded-lg w-full max-w-sm md:max-w-md"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left px-4">
                <h2 className="text-xl md:text-2xl font-bold mb-3">{tab.label}</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  {tab.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
