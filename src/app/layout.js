import { ThemeProvider } from "next-themes";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

import "./globals.css";

export const metadata = {
  title: "Your App",
  description: "Next.js App with Dark Mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
          <Navbar />
          {children}
     
          <Footer />
       
        </body>
      </ThemeProvider>
    </html>
  );
}
