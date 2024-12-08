import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    // const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    fetch("http://localhost:5000/movies", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching all movies:", error));
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6">All Movies</h2>

      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredMovies.map((movie) => (
        <div key={movie._id}>{movie.title}</div>
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div key={movie._id} className="bg-white shadow-md p-4 rounded">
            <img
              src={movie.poster}
              alt={movie.title}
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold">{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Duration: {movie.duration}</p>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Rating: {movie.rating}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => navigate(`/movies/${movie._id}`)}
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
