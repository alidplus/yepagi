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
                <Link href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="font-bold">Home</span>
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <Link href="/dash" className="py-5 px-3 text-gray-700 hover:text-gray-900">Dashboard</Link>
                <Link href="/ali-web-dev" className="py-5 px-3 text-gray-700 hover:text-gray-900">Profile</Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link href="/signin" className="py-5 px-3">Login</Link>
              <Link href="/signup" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</Link>
            </div>

            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        <div className="mobile-menu hidden md:hidden">
          <Link href="/dash" className="block py-2 px-4 text-sm hover:bg-gray-200">Dashboard</Link>
          <Link href="/ali-web-dev" className="block py-2 px-4 text-sm hover:bg-gray-200">Profile</Link>
        </div>
      </nav>
      {children}
      {modals}
    </>
  );
}
