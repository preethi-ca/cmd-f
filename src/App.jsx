import React, { useState } from "react";
import "./App.css"; // Updated CSS for a colorful theme

const App = () => {
  const [city, setCity] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle API call
  const fetchData = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Replace with your actual API endpoint
      const response = await fetch(
        `https://api.example.com/search?city=${city}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError("An error occurred while fetching data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
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

      {results && (
        <div className="results">
          <h2>Results for {city}</h2>
          <div className="hotels">
            <h3>🏨 Hotels</h3>
            {results.hotels.length > 0 ? (
              results.hotels.map((hotel, index) => (
                <div key={index} className="hotel">
                  <h4>{hotel.name}</h4>
                  <p>{hotel.address}</p>
                  <p>⭐ {hotel.rating}</p>
                </div>
              ))
            ) : (
              <p>No hotels found.</p>
            )}
          </div>

          <div className="attractions">
            <h3>🌆 Attractions</h3>
            {results.attractions.length > 0 ? (
              results.attractions.map((attraction, index) => (
                <div key={index} className="attraction">
                  <h4>{attraction.name}</h4>
                  <p>{attraction.description}</p>
                </div>
              ))
            ) : (
              <p>No attractions found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;