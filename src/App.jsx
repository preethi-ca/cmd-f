import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage"; // Import MainPage
import Category from "./Category";
import Places from "./Places"; 
import Navbar from "./Navbar";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  const [city, setCity] = useState("");
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      // Navigate to /category and pass the city as a query parameter
      navigate(`/category?city=${encodeURIComponent(city)}`);
    } else {
      setError("Please enter a city name.");
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              city={city}
              setCity={setCity}
              handleSubmit={handleSubmit} 
            />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/places" element={<Places />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
