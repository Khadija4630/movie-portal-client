import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMovie = () => {
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch movie data
    fetch(`https://movie-portal-server-10.vercel.app/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Prefill the form
        Object.keys(data).forEach((key) => setValue(key, data[key]));
      });
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      await fetch(`http://localhost:5000/movies/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.success("Movie updated successfully!");
      navigate("/allMovies");
    } catch (error) {
      toast.error("Failed to update movie.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Title" required />
        <input {...register("genre")} placeholder="Genre" required />
        <input {...register("duration")} placeholder="Duration" required />
        <input {...register("releaseYear")} placeholder="Release Year" required />
        <input {...register("rating")} placeholder="Rating" required />
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
