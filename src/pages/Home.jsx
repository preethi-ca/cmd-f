import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar"; // Include your Navbar if needed
import "./Home.css"; // Your CSS for this page

const Home = () => {
  const [city, setCity] = useState(""); // Store the city name
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message

  const navigate = useNavigate(); // Use navigate hook to handle navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      setLoading(true);
      // Simulating an API call or delay
      setTimeout(() => {
        setLoading(false);
        navigate(`/category?city=${encodeURIComponent(city)}`); // Navigate to category page with city as query param
      }, 1500);
    } else {
      setError("Please enter a city name.");
    }
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="home-container">
        <div className="home-box">
          <h1>Dream Dashboard</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a city..."
              value={city}
              onChange={(e) => setCity(e.target.value)} // Update city state
            />
            <button type="submit" className="search-button" disabled={loading}>
              {loading ? "Searching..." : "Search Now"}
            </button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Home;