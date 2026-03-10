import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Sidebar from "@/components/Sidebar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
       <body className="font-[var(--font-inter)] antialiased bg-white text-neutral-900">

        <div className="flex">

          {/* Sidebar */}
          <Sidebar />

          {/* Page Content */}
          <main className="flex-1 md:ml-64 px-6 py-12 max-w-6xl mx-auto">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}