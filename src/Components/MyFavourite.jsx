import React, { useState, useEffect } from "react";

const MyFavourite = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    const randomFacts = [
      "The first movie ever made was in 1888.",
      "Avengers: Endgame is the highest-grossing film of all time.",
      "The Oscar statuette is officially named 'The Academy Award of Merit'.",
      "James Cameron waited over a decade to make Avatar due to lack of technology.",
      "Movies are still shot in black and white for artistic reasons.",
    ];

    // Randomly pick a fact
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    setInfo(randomFacts[randomIndex]);
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Random Movie Fact</h2>
      <p className="text-xl bg-gray-100 p-4 rounded shadow">{info}</p>
    </div>
  );
};

export default MyFavourite;

