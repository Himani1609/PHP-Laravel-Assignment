import React from 'react';
import { Movie } from '@/types';  // Assuming Movie is typed correctly
import AppLayout from '@/layouts/app-layout';

interface ShowProps {
  movie: Movie;
}

export default function Show({ movie }: ShowProps) {

  return (
    <AppLayout>
        <div>
          <img src={movie.imgurl} alt={movie.title} className="w-full h-auto" />
        </div>
      <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
      <div className="space-y-4">
        <p><strong>Original Language:</strong> {movie.original_language}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
        <p><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p><strong>Description:</strong> {movie.description}</p>

        {/* Check if studio is properly passed */}
        {movie.studio && (
          <p><strong>Studio:</strong> {movie.studio.studio_name}</p>
          
        )}
       
        
        
      </div>
    </AppLayout>
  );
}
