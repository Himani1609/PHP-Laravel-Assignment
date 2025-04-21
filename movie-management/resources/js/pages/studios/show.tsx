import React from "react";
import { Head, usePage } from "@inertiajs/react";
import AppLayout from '@/layouts/app-layout';

interface Studio {
  id: number;
  studio_name: string;
  studio_country: string;
  studio_year: string;

}

interface PageProps {
    studio: Studio;
    [key: string]: any; // ✅ Add index signature to satisfy Inertia's type constraint
  }

export default function ShowStudio() {
  const { studio } = usePage<PageProps>().props;

  return (
    <>
      <Head title={`Studio: ${studio.studio_name}`} />

      <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Studio Details</h1>

        <p className="mb-2">
          <strong>Name:</strong> {studio.studio_name}
        </p>

        <p className="mb-2">
          <strong>Country:</strong> {studio.studio_country}
        </p>

        <p className="mb-2">
          <strong>Founded Year:</strong> {studio.studio_year}
        </p>
      </div>
    </>
  );
}

ShowStudio.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;