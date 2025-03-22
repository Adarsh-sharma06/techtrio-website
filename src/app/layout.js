import Script from "next/script";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "Your App",
  description: "Next.js App with Dark Mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-ZJF4QFR0TW`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZJF4QFR0TW', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}

          <Footer/>
        </ThemeProvider>

      </body>
    </html>
  );
}
