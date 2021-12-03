import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Some examples of Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Christine Professional Pictures 2021/030A2746 plank.jpg"
              text="Planking is fun times"
              label="exercise"
              path="/services"
            />
            <CardItem
              src="images/Christine Professional Pictures 2021/Christine-19reverse warrior.jpg"
              text="Yoga under the tracks"
              label="yoga"
              path="/services"
            />
            <CardItem
              src="images/Christine Professional Pictures 2021/Christine-1 wall sports bra .jpg"
              text="Standing near a wall is also fun times"
              label="dry-stack stone wall"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
