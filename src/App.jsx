import React, { useState } from "react";
import "./App.css"; // Updated CSS for animations

const App = () => {
  const [city, setCity] = useState("");
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false); // Track if "Explore" was clicked

  // Function to fetch attractions from Foursquare API
  const fetchAttractions = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setSearched(true); // Set searched to true after clicking "Explore"

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

  // Function to reset the app to the initial state
  const handleBack = () => {
    setSearched(false);
    setCity("");
    setAttractions([]);
    setError("");
  };

  return (
    <div className="app">
      {/* Search bar - Transform into thin search bar when searched */}
      <div className={`search-container ${searched ? "thin-search" : ""}`}>
        {!searched ? (
          <>
            <h1>Dream Dashboard</h1>
            <p className="tagline">Plan your dream destinations with ease!</p>
          </>
        ) : null}
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
      </div>

      {/* Attractions grid - Only show if searched */}
      {searched && (
        <div className="attractions-grid">
          {/* Back button */}
          <button className="back-button" onClick={handleBack}>
            &larr; Back to Search
          </button>

          {/* Loading spinner or message */}
          {loading && <p className="loading">Loading attractions...</p>}

          {/* Attractions */}
          {!loading && attractions.length > 0 ? (
            attractions.map((attraction, index) => (
              <div key={index} className="attraction">
                <h3>{attraction.name}</h3>
                <p>{attraction.location.address || "No address available"}</p>
                <a
                  href={`https://foursquare.com/v/${attraction.fsq_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Foursquare
                </a>
              </div>
            ))
          ) : (
            !loading && <p className="no-results">No attractions found. Try another city.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;