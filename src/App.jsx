import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; // Make sure to import useNavigate
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Category from "./Category"; // Import Category component
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      // Navigate to /category and pass the city as a query parameter
      navigate(`/category?city=${encodeURIComponent(city)}`);
    } else {
      setError("Please enter a city name.");
    }
  };

  // Function to reset the app to the initial state
  const handleBack = () => {
    setSearched(false);
    setCity("");
    setAttractions([]);
    setError("");
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <div className={`search-container ${searched ? "thin-search" : ""}`}>
                {!searched ? (
                  <>
                    <h1>Dream Dashboard</h1>
                    <p className="tagline">Type in a city, any city...</p>
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
            </div>
          }
        />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
