import React, { useEffect, useState } from "react";

const FavoriteMovies = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/favouriteMovies`, 
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
                }
        }
    )
      .then((res) => res.json())
      .then((data) => setFavorites(data))
      .catch((err) => console.error("Error fetching favorite movies:", err));
  }, []);

  const handleDeleteFavorite = (id) => {
    fetch(`http://localhost:5000/favoriteMovies/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Removed from favorites!");
        setFavorites(favorites.filter((movie) => movie._id !== id));
      })
      .catch((err) => console.error("Error removing favorite:", err));
  };

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((movie) => (
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
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleDeleteFavorite(movie._id)}
            >
              Delete Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovies;
