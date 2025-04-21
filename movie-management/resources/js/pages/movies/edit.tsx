import React from 'react';
import { useForm } from '@inertiajs/react';
import { PageProps } from '@/types'; // Make sure this exists or update accordingly
import AppLayout from '@/layouts/app-layout';
import { Studio, Movie } from '@/types'; // Adjust types as needed

interface EditProps extends PageProps {
  movie: Movie;
  studios: Studio[];
}

export default function Edit({ movie, studios }: EditProps) {
  const { data, setData, put, processing, errors } = useForm({
    title: movie.title || '',
    original_language: movie.original_language || '',
    release_date: movie.release_date || '',
    budget: movie.budget || 0,
    revenue: movie.revenue || 0,
    rating: movie.rating || 0,
    description: movie.description || '',
    imgurl: movie.imgurl || '',
    studio_id: movie.studio_id || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    put(route('movies.update', movie.id));
  };

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mb-4">Edit Movie</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Title"
          value={data.title}
          onChange={e => setData('title', e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Original Language"
          value={data.original_language}
          onChange={e => setData('original_language', e.target.value)}
          className="input"
        />
        <input
          type="date"
          value={data.release_date}
          onChange={e => setData('release_date', e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Budget"
          value={data.budget}
          onChange={e => setData('budget', parseFloat(e.target.value))}
          className="input"
        />
        <input
          type="number"
          placeholder="Revenue"
          value={data.revenue}
          onChange={e => setData('revenue', parseFloat(e.target.value))}
          className="input"
        />
        <input
          type="number"
          placeholder="Rating"
          value={data.rating}
          onChange={e => setData('rating', parseFloat(e.target.value))}
          className="input"
        />
        <textarea
          placeholder="Description"
          value={data.description}
          onChange={e => setData('description', e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={data.imgurl}
          onChange={e => setData('imgurl', e.target.value)}
          className="input"
        />
        <select
          value={data.studio_id}
          onChange={e => setData('studio_id', parseInt(e.target.value))}
          className="input"
        >
          <option value="">Select Studio</option>
          {studios.map(studio => (
            <option key={studio.id} value={studio.id}>
              {studio.studio_name}
            </option>
          ))}
        </select>

        <button type="submit" disabled={processing} className="btn btn-primary">
          Update Movie
        </button>
      </form>
    </AppLayout>
  );
}
