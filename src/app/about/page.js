import PhysicsCanvas from "@/components/PhysicsCanvas";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with PhysicsCanvas */}
      <div className="h-screen w-full">
        <PhysicsCanvas />
      </div>

      {/* Scrollable Content Section */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About TechTrio Automation
          </h1>

          <div className="max-w-3xl space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Welcome to{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                TechTrio Automation
              </span>
              , where we blend innovation with technology to create smart solutions for businesses.
              Our expertise in{" "}
              <strong>
                website development, software solutions, mobile applications, and automation
                technologies
              </strong>{" "}
              allows us to cater to a wide range of industries.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p>
                Our mission is to{" "}
                <strong>simplify and automate</strong> everyday operations for businesses by
                delivering <strong>cost-effective, scalable, and high-performance</strong>{" "}
                technology solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Our Vision
              </h2>
              <p>
                We aim to be a{" "}
                <strong>leading technology solutions provider</strong> by integrating AI, IoT,
                and modern software engineering principles to solve real-world challenges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                What We Offer
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Custom Website & Web Application Development</li>
                <li>Enterprise Resource Planning (ERP) Solutions</li>
                <li>Mobile App Development (Android & iOS)</li>
                <li>Smart Parking & Tracking Systems</li>
                <li>Cloud Hosting & DevOps Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Why Choose Us?
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>✅ Expertise in MERN Stack & React Native</li>
                <li>✅ Scalable & Budget-Friendly Solutions</li>
                <li>✅ Fast, Reliable, and Secure Development</li>
                <li>✅ Tailored Solutions to Meet Your Needs</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}