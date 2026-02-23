import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
