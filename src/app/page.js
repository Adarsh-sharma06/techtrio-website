import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
     <div>
        <h2 className="text-4xl text-center font-bold text-gray-800">
          Welcome to the Next.js Tailwind CSS Starter
        </h2>
        <p className="text-lg text-center text-gray-600 mt-4">
          Get started by editing{" "}
          <code className="bg-gray-100 p-1">src/app/page.js</code>
        </p>
      </div>
    </main>
  );
}
