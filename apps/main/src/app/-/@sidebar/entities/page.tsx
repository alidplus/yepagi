import { Icon } from "@repo/ui/atoms";
import Link from "next/link";

export default function Entities() {
  return (
    <div className="flex flex-col w-56 border-r border-gray-300">
      <div className="relative text-sm focus:outline-none group">
        <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-300">
          <h1 className="text-lg font-medium">Entities Manager</h1>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-4 overflow-auto">
        <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
          <span className="leading-none">Item 1</span>
        </a>
        <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
          <span className="leading-none">Item 2</span>
        </a>
        <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
          <span className="leading-none">Item 3</span>
        </a>
        <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
          <span className="leading-none">Item 4</span>
        </a>
        <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
          <span className="leading-none">Item 5</span>
        </a>
        <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
          <span className="leading-none">Item 6</span>
        </a>
        <Link className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
            href="/-/entities/new">
          <Icon name="plus" size={22} />
          <span className="ml-2 leading-none">New Item</span>
        </Link>
      </div>
    </div>
  )
}