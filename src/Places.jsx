import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css"; // Ensure this file exists for styling

const Places = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const city = params.get("city");
  const category = params.get("category");

  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiKey = "fsq34UlC0S9hNJyll0ATALzaeperB6ZyzC2vB+cdT1edqQk=";

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(
          `https://api.foursquare.com/v3/places/search?query=${category}&near=${city}&limit=5`,
          {
            headers: {
              Authorization: apiKey,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }
        const data = await response.json();
        setPlaces(data.results);
      } catch (error) {
        setError("Failed to load places. Please try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [city, category]); // Dependency array ensures it refetches if city or category changes

  return (
    <div className="container">
      <h1>
        Top 5 Places in <span>{city}</span> - <span>{category}</span>
      </h1>
      {loading && <p>Loading places...</p>}
      {error && <p className="error">{error}</p>}
      <div id="placesList">
        {!loading && !error && places.length > 0 ? (
          places.map((place, index) => (
            <div key={index} className="place">
              <h3>{place.name}</h3>
              <p>{place.location.address || "Address not available"}</p>
              <p>
                {place.categories
                  ? place.categories.map((cat) => cat.name).join(", ")
                  : "Category info not available"}
              </p>
            </div>
          ))
        ) : (
          <p>No places found. Try another category or city.</p>
        )}
      </div>
    </div>
  );
};

export default Places;
