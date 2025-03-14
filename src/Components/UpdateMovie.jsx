import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Rating } from "react-simple-star-rating";

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    poster: "",
    title: "",
    genre: "",
    duration: "",
    releaseYear: "",
    rating: 0,
    summary: "",
  });

  useEffect(() => {
    // Fetch movie data using `id` and populate the form
    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch((err) => console.error("Error fetching movie details:", err));
  }, [id]);

  const genres = ["Comedy", "Drama", "Horror", "Action", "Sci-Fi", "Romance"];
  const years = [2024, 2023, 2022, 2021, 2020, 2019];

  const validateForm = () => {
    if (!formData.poster || !/^https?:\/\/.+\..+$/.test(formData.poster)) {
      toast.error("Poster must be a valid link.");
      return false;
    }
    if (!formData.title || formData.title.length < 2) {
      toast.error("Title must be at least 2 characters long.");
      return false;
    }
    if (!formData.genre) {
      toast.error("Please select a genre.");
      return false;
    }
    if (!formData.duration || formData.duration < 60) {
      toast.error("Duration must be at least 60 minutes.");
      return false;
    }
    if (!formData.releaseYear) {
      toast.error("Please select a release year.");
      return false;
    }
    if (!formData.rating) {
      toast.error("Please provide a rating.");
      return false;
    }
    if (!formData.summary || formData.summary.length < 10) {
      toast.error("Summary must be at least 10 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`http://localhost:5000/movies/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Movie updated successfully!");
        navigate(`/movies/${id}`);
      } else {
        toast.error("Failed to update movie.");
      }
    } catch (error) {
      console.error("Error updating movie:", error);
      toast.error("An error occurred while updating the movie.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRating = (rate) => {
    setFormData((prevData) => ({ ...prevData, rating: rate / 20 }));
  };

  return (
    <div className="card p-4 rounded shadow-lg  dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Update Movie</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
        <div>
          <label className="block font-bold mb-2">Poster Link:</label>
          <input
            type="text"
            name="poster"
            value={formData.poster}
            onChange={handleInputChange}
            placeholder="Enter image link"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter movie title"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Genre:</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-bold mb-2">Duration (minutes):</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            placeholder="Enter duration"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Release Year:</label>
          <select
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-bold mb-2">Rating:</label>
          <Rating
            onClick={handleRating}
            ratingValue={formData.rating * 20}
            allowHalfIcon
            size={30}
            className="flex"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Summary:</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            placeholder="Enter movie summary"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded mt-4 w-full"
        >
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;
