import { Icon } from "@repo/ui/atoms";
import Link from "next/link";

export default function DashboardLayout({
  children,
  sidebar
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen text-gray-700">
      <div className="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-300">
        <Link className="flex items-center justify-center flex-shrink-0 w-full h-16 border-b" href="/-/">
          <Icon name="dashboard" size={24} />
        </Link>
        <Link className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href='/-/'>
          <Icon name="home" size={24} />
        </Link>
        <Link className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href='/-/'>
          <Icon name="file-empty" size={18} />
        </Link>
        <Link className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href='/-/'>
          <Icon name="administrator" size={18} />
        </Link>
        <Link className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href='/-/'>
          <Icon name="stats-bars" size={20} />
        </Link>
        <Link className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-auto rounded hover:bg-gray-300" href="/-/entities">
          <Icon name="config" size={20} />
        </Link>
        <Link className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href='/-/'>
          <Icon name="user-cog" size={20} />
        </Link>
      </div>
      {sidebar}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center flex-shrink-0 p-3 ps-6 gap-3 border-b border-gray-300">
          <h1 className="text-lg font-medium">Page Title</h1>
          <Link href="/" className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-300">
            Home
          </Link>
          <button className="flex items-center justify-center h-10 px-4 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300">
            Action 2
          </button>
          <button className="relative text-sm focus:outline-none group">
            <div className="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300">
              <Icon name="more-vertical" size={22} />
            </div>
            <div className="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex">
              <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
              <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 22</a>
              <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 333</a>
            </div>
          </button>
        </div>
        <div className="flex-grow p-6 overflow-auto bg-gray-200">
          {children}
        </div>
      </div>
    </div>
  )
}