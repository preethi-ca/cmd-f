import React, { useState } from "react";
import "./MainPage.css"; // Updated CSS for edge positioning
import icon from "../assets/icon.png";
import japan from "../assets/japan.jpg";
import morocco from "../assets/morocco.jpg";
import paris from "../assets/paris.jpg";
import phuket from "../assets/phuket.jpeg";
import swiss from "../assets/swiss.jpg";
import user from "../assets/walrus.png";

const MainPage = () => {
    return (
        <div>
            <div className="header">
                <h2>Dream Travels</h2>  
                <h2>Blog</h2> 
                <h2>Search</h2> 
                <h2>My Dream Dashboard</h2>
                <img src={user} height="55" width="55"/>
            </div>
            <div className="main-content">
                <div className="text">
                    <img src={icon} alt="website logo" width="300" height="300"/>
                    <h2>Welcome to Dream Travels ✈️</h2>
                    <p>Find your next adventure whether it's Japan, Paris, or the Swiss Alps. 
                        Plan out key features of your trip in advance, such as: <br/>
                          &nbsp;&nbsp; 🍔 Food and Drink<br/>
                          &nbsp;&nbsp; 🎭 Arts and Entertainment<br/>
                          &nbsp;&nbsp; 🛒 Shops and Services<br/>
                          &nbsp;&nbsp; 💃 Nightlife Spots<br/>
                          &nbsp;&nbsp; 🌴 Outdoors and Recreation<br/>
                    </p>
                    <button className="search-button">Search Now</button>
                </div>

                <div class="slider">
                    <div class="slider-track">
                        <img src={japan} alt="japan"/>
                        <img src={morocco} alt="morocco"/>
                        <img src={paris} alt="paris"/>
                        <img src={phuket} alt="phuket"/>
                        <img src={swiss} alt="swiss"/>
                    </div>
                </div>
            </div>

            
        </div>
    );
};
export default MainPage;