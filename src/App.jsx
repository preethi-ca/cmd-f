import React, { useState, useEffect } from "react";
import "./App.css"; // Updated CSS for edge positioning

const App = () => {
  const [city, setCity] = useState("");
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to fetch attractions from Foursquare API
  const fetchAttractions = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    const apiKey = "fsq34UlC0S9hNJyll0ATALzaeperB6ZyzC2vB+cdT1edqQk="; // Replace with your Foursquare API key
    const endpoint = `https://api.foursquare.com/v3/places/search?query=tourist+attraction&near=${city}&limit=5`;

    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization: apiKey,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from Foursquare");
      }

      const data = await response.json();
      setAttractions(data.results);
    } catch (error) {
      setError("Something went wrong! Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAttractions();
  };

  // Function to calculate bubble positions near the outer edge of the screen
  const getBubblePosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI; // Distribute bubbles evenly around the circle
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.4; // Distance from center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const x = centerX + radius * Math.cos(angle); // X position
    const y = centerY + radius * Math.sin(angle); // Y position

    return { x, y };
  };

  return (
    <div className="app">
      <h1>Dream Dashboard</h1>
      <p className="tagline">Plan your dream destinations with ease!</p>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? "Searching..." : "Explore"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {/* Attraction bubbles */}
      <div className="bubbles-container">
        {attractions.map((attraction, index) => {
          const { x, y } = getBubblePosition(index, attractions.length);
          return (
            <div
              key={index}
              className="bubble"
              style={{
                top: `${y}px`,
                left: `${x}px`,
                animationDelay: `${index * 0.5}s`, // Staggered animation
              }}
            >
              <h4>{attraction.name}</h4>
              <p>{attraction.location.address || "No address available"}</p>
              <a
                href={`https://foursquare.com/v/${attraction.fsq_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Foursquare
              </a>
            </div>
          );
        })}
      </div>

      {attractions.length === 0 && !loading && (
        <p className="no-results">No attractions found. Try another city.</p>
      )}
    </div>
  );
};

export default App;