import React, { useState } from "react";
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

    const apiKey = "YOUR_FOURSQUARE_API_KEY"; // Replace with your Foursquare API key
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

  // Function to calculate bubble positions relative to the Dream Dashboard box
  const getBubblePosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI; // Distribute bubbles evenly around the circle
    const whiteBoxWidth = 800; // Width of the white box (match .app max-width)
    const whiteBoxHeight = 400; // Approximate height of the white box
    const margin = 50; // Margin from the white box

    // Calculate oval radius
    const radiusX = whiteBoxWidth / 2 + margin; // Horizontal radius
    const radiusY = whiteBoxHeight / 2 + margin; // Vertical radius

    // Center of the white box
    const centerX = window.innerWidth / 2; // Center of the screen (white box is centered)
    const centerY = window.innerHeight / 2; // Center of the screen (white box is centered)

    // Calculate positions
    const x = centerX + radiusX * Math.cos(angle); // X position
    const y = centerY + radiusY * Math.sin(angle); // Y position

    return { x, y };
  };

  return (
    <div className="app">
      <div className="dashboard-container">
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
    </div>
  );
};

export default App;