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
              src="images/plank.jpg"
              text="Planking is fun"
              label="exercise"
              path="/services"
            />
            <CardItem
              src="images/yoga_blackandwhite_down_dog.jpg"
              text="Yoga under the tracks"
              label="yoga"
              path="/services"
            />
            <CardItem
              src="images/drystack_stone_sports_bra.jpg"
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
