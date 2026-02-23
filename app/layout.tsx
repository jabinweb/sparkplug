import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "../components/AuthProvider";
import ConditionalLayout from "@/components/ConditionalLayout";
import { Toaster } from "sonner";
import { getAllSiteContent } from "@/lib/getContent"; // ✅ SERVER ONLY

const supermolot = localFont({
  src: [
    {
      path: "../public/fonts/tt-supermolot-neue-trl/TT Supermolot Neue Trial Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/tt-supermolot-neue-trl/TT Supermolot Neue Trial Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/tt-supermolot-neue-trl/TT Supermolot Neue Trial Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/tt-supermolot-neue-trl/TT Supermolot Neue Trial DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/tt-supermolot-neue-trl/TT Supermolot Neue Trial Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-supermolot",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparkplug - UNLOCKING PEOPLE POWER",
  description:
    "High-energy team building experiences, drum circles, and engagement sessions for corporates, events, and communities.",
  icons: {
    icon: "/logos/favicon.png",
  },
};

// ✅ Make layout async
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // ✅ Prisma runs ONLY here (server safe)
  const siteContent = await getAllSiteContent();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('sparkplug-theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>

      <body className={`${supermolot.variable} font-sans antialiased`}>
        <AuthProvider>
          {/* ✅ Pass data down */}
          <ConditionalLayout siteContent={siteContent}>
            {children}
          </ConditionalLayout>

          <Toaster position="top-right" richColors />
        </AuthProvider>
      </body>
    </html>
  );
}