import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';

interface Studio {
  id: number;
  name: string;
}

interface CreateMovieProps extends PageProps {
  studios: Studio[];
}

const CreateMovie = ({ studios }: CreateMovieProps) => {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    original_language: '',
    release_date: '',
    budget: '',
    revenue: '',
    rating: '',
    description: '',
    imgurl: '',
    studio_id: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/movies'); // Ensure this matches your route
  };

  return (
    <AppLayout>
      <Head title="Add Movie" />
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Add a New Movie</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={data.title}
            onChange={e => setData('title', e.target.value)}
            className="w-full border px-3 py-2"
          />
          {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}

          <input
            type="text"
            placeholder="Original Language"
            value={data.original_language}
            onChange={e => setData('original_language', e.target.value)}
            className="w-full border px-3 py-2"
          />
          <input
            type="date"
            value={data.release_date}
            onChange={e => setData('release_date', e.target.value)}
            className="w-full border px-3 py-2"
          />
          <input
            type="number"
            placeholder="Budget"
            value={data.budget}
            onChange={e => setData('budget', e.target.value)}
            className="w-full border px-3 py-2"
          />
          <input
            type="number"
            placeholder="Revenue"
            value={data.revenue}
            onChange={e => setData('revenue', e.target.value)}
            className="w-full border px-3 py-2"
          />
          <input
            type="number"
            step="0.1"
            placeholder="Rating"
            value={data.rating}
            onChange={e => setData('rating', e.target.value)}
            className="w-full border px-3 py-2"
          />
          <textarea
            placeholder="Description"
            value={data.description}
            onChange={e => setData('description', e.target.value)}
            className="w-full border px-3 py-2"
          />
          <input
            type="url"
            placeholder="Image URL"
            value={data.imgurl}
            onChange={e => setData('imgurl', e.target.value)}
            className="w-full border px-3 py-2"
          />

          <select
            value={data.studio_id}
            onChange={e => setData('studio_id', Number(e.target.value))}
            className="w-full border px-3 py-2"
          >
            <option value="">Select Studio</option>
            {studios.map(studio => (
              <option key={studio.id} value={studio.id}>
                {studio.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={processing}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Movie
          </button>
        </form>
      </div>
    </AppLayout>
  );
};


export default CreateMovie;
