import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Places.css"; // Ensure this file exists for styling

const Places = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const city = params.get("city");
  const category = params.get("category");
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);
      setError(""); // Reset error before the fetch
      const apiKey = "fsq34UlC0S9hNJyll0ATALzaeperB6ZyzC2vB+cdT1edqQk=";
      const endpoint = `https://api.foursquare.com/v3/places/search?query=${category}&near=${city}&limit=6`;

      try {
        const response = await fetch(endpoint, {
          headers: {
            Authorization: apiKey,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data from Foursquare.");
        }

        const data = await response.json();
        setPlaces(data.results);
      } catch (error) {
        setError("Something went wrong! Please try again.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [city, category]); // Run the effect when city or category changes

  if (loading) {
    return <div className="loading">Loading places...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
      <div className="container">
        <h1>
          Top 5 Places in <span>{city}</span> - <span>{category}</span>
        </h1>
      </div>

      <div id="placesList">
        {places.length > 0 ? (
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
          <p>No places found for this category in {city}. Try another category.</p>
        )}
      </div>
    </>
  );
};

export default Places;
