import { ReactNode } from 'react';
import PublicLayout from '@/layouts/public-layout';

interface AuthLayoutTemplateProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function AuthSimpleLayout({ title, description, children }: AuthLayoutTemplateProps) {
  return (
    <PublicLayout>
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div>
            <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
          {children}
        </div>
      </div>
    </PublicLayout>
  );
}
