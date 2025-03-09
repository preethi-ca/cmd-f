import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./MainPage.css"; // Updated CSS for main page
import icon from "../assets/icon.png";
import japan from "../assets/japan.jpg";
import morocco from "../assets/morocco.jpg";
import paris from "../assets/paris.jpg";
import phuket from "../assets/phuket.jpeg";
import swiss from "../assets/swiss.jpg";
import user from "../assets/dog.png";

const MainPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle Search Now button click
  const handleSearchNow = () => {
    // Navigate to /home when Search Now button is clicked
    navigate("/home");
  };

  return (
    <div>
      <div className="header">
        <img src={user} height="55" width="55" />
      </div>

      <div className="main-content">
        <div className="text">
          <img src={icon} alt="website logo" width="300" height="300" />
          <h2>Welcome to Dream Travels ✈️</h2>
          <p>
            Find your next adventure whether it's Japan, Paris, or the Swiss
            Alps. Plan out key features of your trip in advance, such as: <br />
            &nbsp;&nbsp; 🍔 Food and Drink <br />
            &nbsp;&nbsp; 🎭 Arts and Entertainment <br />
            &nbsp;&nbsp; 🛒 Shops and Services <br />
            &nbsp;&nbsp; 💃 Nightlife Spots <br />
            &nbsp;&nbsp; 🌴 Outdoors and Recreation <br />
          </p>
          
          {/* Button that now redirects to Home page */}
          <button className="search-button" onClick={handleSearchNow}>
            Search Now
          </button>
        </div>

        <div className="slider">
          <div className="slider-track">
            <img src={japan} alt="japan" />
            <img src={morocco} alt="morocco" />
            <img src={paris} alt="paris" />
            <img src={phuket} alt="phuket" />
            <img src={swiss} alt="swiss" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
