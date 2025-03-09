import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const city = params.get("city");

  const showPlaces = (category) => {
    navigate(`/places?city=${encodeURIComponent(city)}&category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="container">
      <h1>Select a Category</h1>
      <button onClick={() => showPlaces("Food & Drink")}>Food & Drink</button>
      <button onClick={() => showPlaces("Arts & Entertainment")}>Arts & Entertainment</button>
      <button onClick={() => showPlaces("Shops & Services")}>Shops & Services</button>
      <button onClick={() => showPlaces("Nightlife Spots")}>Nightlife Spots</button>
      <button onClick={() => showPlaces("Outdoors & Recreation")}>Outdoors & Recreation</button>
    </div>
  );
};

export default Category;
