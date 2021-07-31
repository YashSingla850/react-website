import React from "react";
import CardItem from "./CardItem";
import "./card.css";
import Img9 from "../images/img-9.jpg";
import Img8 from "../images/img-8.jpg";
import Img7 from "../images/img-7.jpg";
import Img6 from "../images/img-6.jpg";
import Img5 from "../images/img-5.jpg";
import Img4 from "../images/img-4.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>check out these epic destination</h1>
      <div className="crads__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Img9}
              text="Explore the hidden water deep inside the amazon jungle"
              label="Adenture"
              path="/services"
            />
            <CardItem
              src={Img8}
              text="Welcome to the shara desert . Hope you enjoy the hospitaliy of the people for your care "
              label="Adenture"
              path="/services"
            />
            <br />
            <CardItem
              src={Img7}
              text="Night sky is  best"
              label="Calm"
              path="/services"
            />
            <CardItem
              src={Img6}
              text="Walk to offices is good for your health and for nature"
              label="Excersice"
              path="/services"
            />
            <CardItem
              src={Img5}
              text="Lets enjoy the drink"
              label="hangover"
              path="/services"
            />
            <CardItem
              src={Img4}
              text="Playing  football with friends "
              label="Gaming"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
