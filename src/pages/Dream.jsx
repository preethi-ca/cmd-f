import React from "react";
import "./Dream.css"; // Import App.css from the correct path
import rome from "../assets/rome.jpg";
import rome1 from "../assets/rome1.jpg";
import rome2 from "../assets/rome2.jpg";
import walrus from "../assets/walrus.png";
import dog from "../assets/dog.png";
import cat from "../assets/cat.png";
import penguin from "../assets/penguin.png";

const Dream = () => {

  return (
    <div>
      <div className="header">
        <h2>Dream Travels</h2>  
        <h2>Blog</h2> 
        <h2>Search</h2> 
        <h2>My Dream Dashboard</h2>
      </div>
      <div className="post-its">
        <div className="images">
            <div className="title">
                <h2>📍Rome, Italy</h2>
                <img src={rome}/>
            </div>
            <img src={rome1} className="rome1"/>
            <img src={rome2} className="rome2"/>
        </div>
        <div className="post-it one" draggable = "true">
            <h2 className="pin">📌</h2>
            <br/>
            <h2>Restaurants</h2>
            <div className="leftalign">
                <p><b>Tonnarello | Paglia</b></p>
                <p>V. della Paglia, 1/2/3</p>
                <p><b>Osteria da Fortunata</b></p>
                <p>Via del Pellegrino, 11</p>
                <p><b>Taverna dei migliori</b></p>
                <p>Viale Manzoni, 107</p>
                <img src={walrus} height="20px" width="20px"/>
                <img src={cat} height="20px" width="20px"/>
            </div>
        </div>
        <div className="post-it two" draggable = "true">
            <h2 className="pin">📌</h2>
            <br/>
            <h2>Must-sees</h2>
            <div className="leftalign">
                <ul className="list">
                    <li>Trevi Fountain</li>
                    <li>Pantheon</li>
                    <li>Colosseum</li>
                    <li>St.Peter's Basilica</li>
                    <li>Pantheon</li>
                    <li>Villa Borghese</li>
                    <li>Palatine Hill</li>
                    <li>Spanish Steps</li>
                </ul>
            </div>
        </div>
        <div className="post-it three" draggable = "true">
            <h2 className="pin">📌</h2>
            <br/>
            <div className="leftalign">
                <h2>Hotels</h2>
                <p><b>Hotel Veneto Palace</b></p>
                <p>⭐⭐⭐⭐ (593)</p>
                <p><b>Hotel Villa San Lorenzo Maria</b></p>
                <p>⭐⭐⭐⭐ (919)</p>
                <img src={walrus} height="20px" width="20px"/>
            </div>
        </div>
        <div className="post-it four" draggable = "true">
            <h2 className="pin">📌</h2>
            <br/>
            <div className="leftalign">
                <h2>Packing List</h2>
                <p>🗹 Pajamas</p>
                <p>🗹 Toiletries</p>
                <p>☐ Clothing</p>
                <p>☐ Shoes</p>
                <p>☐ Money, Id, Passport</p>
                <p>☐ Electronics</p>
                <img src={penguin} height="20px" width="20px"/>
                <img src={dog} height="20px" width="20px"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;