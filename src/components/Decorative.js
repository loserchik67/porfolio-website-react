import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Decorative.css";

function Decorative() {
  return (
    <div className="decorative-container">
      <video src="/videos/video-5.mp4" autoPlay loop muted />
      <h1>TEST HEADER</h1>
      <p>Test paragraph</p>
      <div className="decorative-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          TEST BUTTON OUTLINE
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          TEST BUTTON PRIMARY <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Decorative;
