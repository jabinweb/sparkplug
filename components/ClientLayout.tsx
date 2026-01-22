'use client';

import { ThemeProvider } from '@/lib/theme-provider';
import Header from './Header';
import Footer from './Footer';
import GlobalCTA from './GlobalCTA';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <GlobalCTA />
      <Footer />
    </ThemeProvider>
  );
}
