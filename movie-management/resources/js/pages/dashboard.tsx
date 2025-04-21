import { ReactNode } from 'react';
import { Link, router } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';

type AppLayoutProps = {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
};

export default function AppLayout({ children, breadcrumbs }: AppLayoutProps) {
    const handleLogout = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/logout');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <nav className="bg-gray-100 px-4 py-2 flex gap-4 shadow justify-between">
                <div className="flex gap-4">
                    <Link href="/movies" as="button" className="hover:underline">Movies</Link>
                    <Link href="/studios" as="button" className="hover:underline">Studios</Link>
                </div>
                <form onSubmit={handleLogout}>
                    <button type="submit" className="text-red-600 hover:underline">Logout</button>
                </form>
            </nav>

            {/* Breadcrumbs */}
            {breadcrumbs && (
                <div className="p-4 text-sm text-gray-500">
                    {breadcrumbs.map((crumb, index) => (
                        <span key={index}>
                            <Link href={crumb.href} className="hover:underline">{crumb.title}</Link>
                            {index < breadcrumbs.length - 1 && ' / '}
                        </span>
                    ))}
                </div>
            )}

            {/* Main Content - This is where Inertia will render your pages */}
            <div className="p-4">
                {children}
            </div>
        </div>
    );
}