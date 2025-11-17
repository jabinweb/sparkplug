import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalCTA from "../components/GlobalCTA";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sparkplug - Spark Your Teams. Plug in Connections.",
  description: "High-energy team building experiences, drum circles, and engagement sessions for corporates, events, and communities. Trusted by Google, Microsoft, Deloitte, and more across India.",
  keywords: "team building, employee engagement, drum circles, corporate workshops, experiential events, audience engagement, music therapy, collaboration, India",
  icons: {
    icon: '/logos/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <GlobalCTA />
        <Footer />
      </body>
    </html>
  );
}
