import { useState } from "react";
import Image from "next/image";

const Products = () => {
  const [activeTab, setActiveTab] = useState("DataAnalytics");

  const tabs = [
    {
      id: "DataAnalytics",
      label: "Data Analytics and Automation",
      img: "https://www.nucleussoftware.com/wp-content/uploads/2023/12/data-analytics-automation.png",
    },
    {
      id: "CloudServices",
      label: "Cloud Services",
      img: "https://www.nucleussoftware.com/wp-content/uploads/2023/12/cloud-services-tab.png",
    },
    {
      id: "AppModernization",
      label: "Application Modernization",
      img: "https://www.nucleussoftware.com/wp-content/uploads/2023/12/data-analytics-automation.png",
    },
    {
      id: "InfraServices",
      label: "Infra Services",
      img: "https://www.nucleussoftware.com/wp-content/uploads/2023/12/cloud-services-tab.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Services Portfolio for Financial Institutions
      </h1>

      {/* Tabs - Scrollable on small screens */}
      <div className="w-full overflow-x-auto">
        <div className="flex space-x-2 md:space-x-4 bg-gray-200 dark:bg-gray-800 p-2 rounded-full w-max mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 whitespace-nowrap rounded-full transition-all text-xs md:text-sm font-medium ${
                activeTab === tab.id
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6 max-w-5xl w-full flex flex-col items-center">
        {tabs.map(
          (tab, index) =>
            activeTab === tab.id && (
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
                    {tab.id === "DataAnalytics" &&
                      "We provide cutting-edge data solutions, helping financial institutions optimize processes through advanced analytics, AI, and automation."}
                    {tab.id === "CloudServices" &&
                      "Secure and scalable cloud solutions tailored to your needs, ensuring seamless data integration and business agility."}
                    {tab.id === "AppModernization" &&
                      "Transform legacy systems into modern, efficient applications that enhance operational efficiency and user experience."}
                    {tab.id === "InfraServices" &&
                      "Robust IT infrastructure solutions ensuring security, performance, and scalability for financial institutions."}
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Products;