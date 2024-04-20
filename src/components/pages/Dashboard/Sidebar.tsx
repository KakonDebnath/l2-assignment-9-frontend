import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto px-3 bg-slate-200">
      <h3 className="text-3xl font-black roboto text-center py-5">
        <Link href="/">
          <h2 className="text-3xl font-semibold ">
            Kabbo <span className="text-orange-500">Baby</span> Shop
          </h2>
        </Link>
      </h3>
      <nav className="flex flex-col gap-1">
        <Link href="/dashboard">
          <h2 className="bg-orange-400 px-5 py-2 rounded-md hover:bg-orange-500 transition-all hover:scale-105">
            All Product
          </h2>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
