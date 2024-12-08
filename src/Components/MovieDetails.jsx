import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

//    const movie = JSON.parse(localStorage.getItem("movies")).find(
//     (movie) => movie.id === parseInt(id)
// );

// const handleDelete = () => {
//   const updatedMovies = JSON.parse(localStorage.getItem("movies")).filter(
//     (movie) => movie.id !== parseInt(id)
//   );
//   localStorage.setItem("movies", JSON.stringify(updatedMovies));
//   alert("Movie deleted successfully!");
//   navigate("/all-movies");
// };

// const handleAddToFavorites = () => {
//   const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//   if (!favorites.find((fav) => fav.id === movie.id)) {
//     favorites.push(movie);
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//     alert("Movie added to favorites!");
//   }
// };


  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:5000/movies/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Movie deleted successfully");
        navigate("/movies");
      })
      .catch((error) => console.error("Error deleting movie:", error));
  };

  const handleAddToFavorites = () => {
    fetch("http://localhost:5000/favorites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ movieId: id, userEmail: "user@example.com" }),
    })
      .then(() => alert("Movie added to favorites"))
      .catch((error) => console.error("Error adding to favorites:", error));
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6">{movie.title}</h2>
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-80 object-cover mb-4 rounded"
      />
      <p>Genre: {movie.genre}</p>
      <p>Duration: {movie.duration}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Rating: {movie.rating}</p>
      <p>Summary: {movie.summary}</p>
      <div className="mt-6">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mr-4"
          onClick={handleDelete}
        >
          Delete Movie
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleAddToFavorites}
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
