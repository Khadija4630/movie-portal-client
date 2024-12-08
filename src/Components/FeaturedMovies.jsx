import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FeaturedMovies = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const navigate = useNavigate();

  // Fetching top 6 highest-rated movies from backend
  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      try {
        const response = await fetch("http://localhost:5000/featured-movies",
            {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    },
            }
        );
        const data = await response.json();
        setFeaturedMovies(data);
      } catch (error) {
        console.error("Error fetching featured movies:", error);
      }
    };
        fetchFeaturedMovies();
      }, []);

  const handleDetailsClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredMovies.map((movie) => (
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
              <p className="text-gray-600 font-bold">Rating: {movie.rating}</p>
              <button
                onClick={() => handleDetailsClick(movie._id)}
                className="btn bg-red-500 hover:bg-red-600 text-white mt-4"
              >
                See Details
              </button>
              {/*  <button
              className="btn btn-primary mt-4"
              onClick={() => window.alert(`Navigate to details for ${movie.title}`)}
            >
              See Details
            </button> */}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/allMovies" className="btn bg-red-500 hover:bg-red-600 text-white px-6 py-2">
          See All Movies
        </Link>
      </div>
    </div>
  );
};

export default FeaturedMovies;
