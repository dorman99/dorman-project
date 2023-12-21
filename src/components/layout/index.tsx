'use client'

import Footer from "../footer";
import Header from "../header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-gray-300">
      <Header />
      <main className="flex-1 overflow-y-auto">{children}</main>
      <Footer />
    </div>
  );
}
