import { Button } from "./Button";
import React from "react";
import "./hero.css";
import "../first.css";
import Video from "../videos/video-2.mp4";
function Hero() {
  return (
    <>
      <div className="hero-container">
        <video src={Video} type="video/mp4" autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>what are you waiting for?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="bnt--large"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="bnt--large"
          >
            WATCH TRAILER
          </Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
