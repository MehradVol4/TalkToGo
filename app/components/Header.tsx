import { Search } from "lucide-react";
import Link from "next/link";
import HeaderAuth from "./header-auth";
export default async function Header() {
  return (
    <header className="mb-6 border-b">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4">
        <Link href="/" className="shrink-0 text-2xl font-bold">
          Talk To Go
        </Link>

        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-default-400"
            />

            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-2sm bg-background-tertiary py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="shrink-0">
          <HeaderAuth />
        </div>
      </nav>
    </header>
  );
}
