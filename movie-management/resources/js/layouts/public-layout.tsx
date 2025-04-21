import { ReactNode } from 'react';
import { Link } from '@inertiajs/react';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Minimal Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <Link 
            href="/" 
            className="text-gray-900 dark:text-white font-medium"
          >
            Movies
          </Link>
          <div className="flex space-x-4">
            <Link 
              href='/login'
              className="text-gray-900 dark:text-white hover:text-blue-600"
            >
              Login
            </Link>
            <Link 
              href='/register'
              className="text-gray-900 dark:text-white hover:text-blue-600"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Movie Gallery */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}