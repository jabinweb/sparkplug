import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "../components/AuthProvider";
import ConditionalLayout from "@/components/ConditionalLayout";
import { Toaster } from "sonner";

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
  description: "High-energy team building experiences, drum circles, and engagement sessions for corporates, events, and communities. Trusted by Google, Microsoft, Deloitte, and more across India.",
  keywords: "team building, employee engagement, drum circles, corporate workshops, experiential events, audience engagement, music therapy, collaboration, India",
  icons: {
    icon: '/logos/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <body
        className={`${supermolot.variable} font-sans antialiased`}
      >
        <AuthProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
          <Toaster position="top-right" richColors />
        </AuthProvider>
      </body>
    </html>
  );
}
