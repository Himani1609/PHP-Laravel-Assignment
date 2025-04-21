import React from "react";
import { Link } from "@inertiajs/react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href={route("movies.index")} className="hover:underline">
          Movies
        </Link>
        <Link href={route("studios.index")} className="hover:underline">
          Studios
        </Link>
      </nav>

      {/* Page content */}
      <main className="p-6">{children}</main>
    </div>
  );
};

export default MainLayout;
