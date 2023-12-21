'use client'

import Footer from "../footer";
import Header from "../header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden port">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
