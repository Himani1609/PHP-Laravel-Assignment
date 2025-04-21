import PublicLayout from '@/layouts/public-layout';

interface Props {
  movies: {
    id: number;
    title: string;
    imgurl: string;
    year: number;
  }[];
}

export default function PublicMovies({ movies }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="group">
          <img 
            src={movie.imgurl} 
            alt={movie.title}
            className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition"
          />
          <h3 className="mt-2 text-gray-900 dark:text-white text-center">
            {movie.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

PublicMovies.layout = (page: any) => <PublicLayout children={page} />;