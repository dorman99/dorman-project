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
    path: "/",
  },
  {
    title: "Blog",
    path: "/",
  },
  {
    title: "Contact",
    path: "/",
  },
];

function Header() {
  const renderMenu = () => {
    return menus.map((m) => <button>{m.title}</button>);
  };
  return (
    <>
      <div className="font-bebas justify-between flex bg-black h-10 items-center">
        <div className="text-white pl-4">
          <p>dorman.dev</p>
        </div>
        <div className="flex space-x-20 text-white font-bold pr-4">
          {renderMenu()}
        </div>
      </div>
    </>
  );
}

export default Header;
