// TrendingMovies.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    const exampleMovies = [
      {
        id: 1,
        title: "Avengers: Endgame",
        poster: "https://i.ibb.co/47yQzR2/endgame.jpg",
        genre: "Action, Adventure",
        release_year:"2012",
        duration:"143 minutes",
        rating: 8.4,
        themes:"The Avengers is a celebration of teamwork, the triumph of unity over conflict, and the courage required to defend freedom and justice against overwhelming odds.",
      },
      {
        id: 2,
        title: "Interstellar",
        poster: "https://i.ibb.co/b1KznYv/insterstellar.jpg",
        genre: "Sci-Fi, Drama",
        release_year:"2014",
        duration: "169 minutes",
        rating: 8.6,
        themes:"Interstellar delves into the exploration of human resilience, the unyielding spirit of survival, and the profound connection between love and science."
      },
      {
        id: 3,
        title: "Frozen",
        poster: "https://i.ibb.co/kchFp6R/Frozen.jpg",
        genre: "Sci-Fi, Drama",
        release_year:"2013",
        duration: "102 minutes",
        rating: 8.6,
        themes:"The story explores the bonds of sisterhood, self-discovery, and the power of love to overcome even the coldest of obstacles.They encounter mystical trolls. ", 
      },
      
    ];
    setTrendingMovies(exampleMovies);
  }, []);

  const handleDetailsClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-6">Trending Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trendingMovies.map((movie) => (
          <div
            key={movie.id}
            className="card bg-white shadow rounded overflow-hidden"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{movie.title}</h3>
              <p className="text-gray-600">Genre: {movie.genre}</p>
              <p className="text-gray-600">Release Year: {movie.release_year}</p>
              <p className="text-gray-600">Duration: {movie.duration}</p>
              <p className="text-gray-600 font-bold">Rating: {movie.rating}</p>
              <p className="text-gray-600">{movie.themes}</p>
              <button
                onClick={() => handleDetailsClick(movie.id)}
                className="btn bg-red-500 hover:bg-red-600 text-white mt-4"
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
