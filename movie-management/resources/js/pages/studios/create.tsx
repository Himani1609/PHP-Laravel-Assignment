// resources/js/pages/studios/create.tsx
import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function CreateStudio() {
    const { data, setData, post, processing, errors } = useForm({
        studio_name: '',
        studio_country: '',
        studio_year: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/studios');
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Add New Studio</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Studio Name</label>
                    <input
                        type="text"
                        value={data.studio_name}
                        onChange={(e) => setData('studio_name', e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                    {errors.studio_name && <div className="text-red-600">{errors.studio_name}</div>}
                </div>

                <div>
                    <label>Studio Country</label>
                    <input
                        type="text"
                        value={data.studio_country}
                        onChange={(e) => setData('studio_country', e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                    {errors.studio_country && <div className="text-red-600">{errors.studio_country}</div>}
                </div>

                <div>
                    <label>Studio Year</label>
                    <input
                        type="number"
                        value={data.studio_year}
                        onChange={(e) => setData('studio_year', (e.target.value))}
                        className="w-full border p-2 rounded"
                    />
                    {errors.studio_year && <div className="text-red-600">{errors.studio_year}</div>}
                </div>

                <button type="submit" disabled={processing} className="bg-blue-600 text-white px-4 py-2 rounded">
                    Create
                </button>
            </form>
        </div>
    );
}

CreateStudio.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;