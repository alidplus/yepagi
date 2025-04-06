import { Icon } from "@repo/ui/atoms";
import Link from "next/link";

export default async function HomePage({
  children,
  modals
}: Readonly<{
  children: React.ReactNode;
  modals: React.ReactNode;
}>) {
  return (
    <>
      <nav className="bg-gray-100 fixed top-0 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">

            <div className="flex space-x-4">
              <div>
                <Link href="/" className="flex items-center py-5 px-2 text-indigo-800 hover:text-gray-900">
                  <Icon name="administrator" size={24} className="me-3" />
                  <span className="font-bold">Home</span>
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <Link href="/-" className="py-5 px-3 text-gray-700 hover:text-gray-900">Dashboard</Link>
                <Link href="/ali-web-dev" className="py-5 px-3 text-gray-700 hover:text-gray-900">Profile</Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link href="/signin" className="py-5 px-3">Login</Link>
              <Link href="/signup" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</Link>
            </div>

            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <Icon name="hamburger" size={24} className="me-3" />
              </button>
            </div>

          </div>
        </div>

        <div className="mobile-menu hidden md:hidden">
          <Link href="/-" className="block py-2 px-4 text-sm hover:bg-gray-200">Dashboard</Link>
          <Link href="/ali-web-dev" className="block py-2 px-4 text-sm hover:bg-gray-200">Profile</Link>
        </div>
      </nav>
      {children}
      {modals}
    </>
  );
}
