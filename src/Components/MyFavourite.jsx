import React, { useState, useEffect } from "react";

const MyFavourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Fetch user's favourite movies from the server
    fetch("http://localhost:5000/myFavourites")
      .then((res) => res.json())
      .then((data) => setFavourites(data))
      .catch((err) => console.error("Error fetching favorites:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-6">My Favourites</h2>
      {favourites.length === 0 ? (
        <p className="text-center">No favourites yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favourites.map((movie) => (
            <div key={movie._id} className="bg-white p-4 rounded shadow">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavourites;
