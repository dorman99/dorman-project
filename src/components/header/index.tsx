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
      <Link key={idx} className="w-20 inline-block" href={m.path}>
        {m.title}
      </Link>
    ));
  };
  return (
    <>
      <div className="font-bebas justify-between flex bg-black h-20 items-center">
        <div className="text-white pl-4">
          <Link href="/">dorman.dev</Link>
        </div>
        <div className="flex space-x-20 text-white font-bold pr-4">
          {renderMenu()}
        </div>
      </div>
    </>
  );
}

export default Header;
