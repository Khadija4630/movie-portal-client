import { useEffect, useState } from "react";

const LatestMovies = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      const fetchLatestMovies = async () => {
        try {
          const response = await fetch("https://movie-portal-server-10.vercel.app/movies?sort=releaseYear&limit=6");
          const data = await response.json();
          setMovies(data);
        } catch (error) {
          console.error("Error fetching latest movies:", error);
        }
      };
      fetchLatestMovies();
    }, []);
  
    return (
      <div className="max-w-6xl mx-auto my-8">
        <h2 className="text-3xl font-bold text-center mb-6">Latest Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div key={movie._id} className="card bg-white shadow rounded overflow-hidden">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{movie.title}</h3>
                <p className="text-gray-600">Genre: {movie.genre}</p>
                <p className="text-gray-600">Duration: {movie.duration}</p>
                <p className="text-gray-600">Release Year: {movie.releaseYear}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LatestMovies;
  