import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these test images!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./images/img-9.jpg"
              text="Guy standing by a waterfall"
              label="People standing in weird places"
              path="/services"
            />
            <CardItem
              src="./images/img-2.jpg"
              text="Boat chem trails?"
              label="#conspiracytheories"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./images/img-3.jpg"
              text="Stranded. You would totally die in this situation"
              label="Sharks are going to eat you"
              path="/services"
            />
            <CardItem
              src="./images/img-4.jpg"
              text="its called soccer not football"
              label="take that europeans!"
              path="/products"
            />
            <CardItem
              src="./images/img-8.jpg"
              text="is sand orange? is there iron in it? is it just like the color of the sun filtering through?"
              label="damn nature, you scary"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
