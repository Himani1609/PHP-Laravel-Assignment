import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function StudioIndex({ studios }: { studios: any[] }) {
//   const { delete: destroy } = useForm();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Studios</h1>
      <Link href="/studios/create" className="bg-blue-500 text-white px-4 py-2 rounded">Add Studio</Link>
      <ul className="mt-4">
        {studios.map((studio) => (
          <li key={studio.id} className="border-b py-2 flex justify-between">
            <span>{studio.studio_name}</span>
            <div className="space-x-2">
            <Link
                  href={route("studios.show", studio.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  View Details
                </Link>
              <Link href={`/studios/${studio.id}/edit`} className="text-blue-600">Edit</Link>
              {/* <button
                className="text-red-600"
                onClick={() => destroy(`/studios/${studio.id}`)}
              >
                Delete
              </button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

StudioIndex.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;