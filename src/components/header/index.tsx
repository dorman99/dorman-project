import Link from "next/link";

type Menu = {
  title: string;
  path: string;
};

const menus: Array<Menu> = [
  {
    title: "/",
    path: "/",
  },
  {
    title: "projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/",
  },
];

function Header() {
  const renderMenu = () => {
    return menus.map((m, idx) => (
      <Link key={idx} className="inline-block" href={m.path}>
        {m.title}
      </Link>
    ));
  };
  return (
    <div className="bg-black flex h-20 font-bebas">
      <div className="text-white mobile-only:pl-5 flex-1 flex pl-10 items-center">
        <Link href="/">dorman.dev</Link>
      </div>
      <div className="flex items-center justify-end mobile-only:pr-5 text-white font-bold flex-1 pr-10 gap-4">
        {renderMenu()}
      </div>
    </div>
  );
}

export default Header;
