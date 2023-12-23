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
    path: "/",
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
    <div className="bg-black flex h-10 min-w-fit font-bebas">
      <div className="text-white flex-1 flex pl-2 items-center">
        <Link href="/">dorman.tech</Link>
      </div>
      <div className="flex items-center justify-end text-white font-bold flex-1 pr-2 gap-4">
        {renderMenu()}
      </div>
    </div>
  );
}

export default Header;
