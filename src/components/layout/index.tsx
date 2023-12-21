import Header from "../header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="containter mx-auto">{children}</main>
    </div>
  );
}
