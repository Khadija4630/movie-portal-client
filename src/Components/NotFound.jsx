import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <Link to="/" className="btn bg-red-500 text-white mt-6">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
