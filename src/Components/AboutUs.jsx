
import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow rounded">
      <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
      <p className="text-gray-700 text-lg">
        Welcome to Movie Portal! Our mission is to provide a platform where users can
        discover, add, and save their favorite movies. Whether you're a casual
        movie enthusiast or a cinephile, this platform is built for you. 
      </p>
      <p className="mt-4 text-gray-700 text-lg">
        Explore the latest movies, keep track of your favorites, and enjoy an
        intuitive interface tailored for movie lovers.
      </p>
      <h3 className="text-2xl font-semibold mt-6">Our Features:</h3>
      <ul className="list-disc pl-5 mt-3 text-gray-700">
        <li>Add your favorite movies to the portal.</li>
        <li>Rate and review movies.</li>
        <li>Discover trending movies.</li>
        <li>Manage your personal favorites list.</li>
      </ul>
    </div>
  );
};

export default AboutUs;
