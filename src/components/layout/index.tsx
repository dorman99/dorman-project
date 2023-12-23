"use client";

import Footer from "../footer";
import Header from "../header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col w-scree">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
