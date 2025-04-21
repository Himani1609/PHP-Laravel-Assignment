import { Link, router } from '@inertiajs/react';
import React from 'react';
import { usePage } from '@inertiajs/react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const { auth } = usePage().props as unknown as { auth: { user: { name: string } } };
    return (
        <div>
            {/* Navbar */}
            <nav className="flex gap-6 bg-gray-800 px-6 py-4 text-white">
                <Link href={route('movies.index')} className="hover:underline">
                    Movies
                </Link>
                <Link href={route('studios.index')} className="hover:underline">
                    Studios
                </Link>
                <button onClick={() => router.post(route('logout'))} className="text-red-600 hover:underline">
                    Logout
                </button>

                {auth.user && (
                    <div className="flex items-center gap-4">
                        <p className="text-sm text-gray-300">{auth.user.name}</p>
                    </div>
                )}
            </nav>

            {/* Main content */}
            <main className="p-6">{children}</main>
        </div>
    );
};

export default AppLayout;
