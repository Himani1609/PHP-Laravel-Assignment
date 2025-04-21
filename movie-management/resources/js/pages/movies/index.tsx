import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { router } from '@inertiajs/react';

interface Movie {
  id: number;
  title: string;
  // Add other fields if needed
}

interface Props {
  movies: Movie[];
}

const MoviesIndex = ({ movies }: Props) => {

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this movie?')) {
      router.delete(`/movies/${id}`);
    }
  };
  return (
    <>
      <Head title="Movies" />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Movies</h1>

        <Link href="/movies/create" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
          Add New Movie
        </Link>

        <ul>
          {movies.map((movie) => (
            <li key={movie.id} className="mb-2">
              <span className="font-semibold">{movie.title}</span>
              <div className="flex gap-2">
              <Link href={route('movies.show', movie.id)} className="btn btn-primary">
                  View Details
                </Link>
                <Link href={`/movies/${movie.id}/edit`} className="text-blue-600">Edit</Link>
                <button
        onClick={() => handleDelete(movie.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


MoviesIndex.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default MoviesIndex;
