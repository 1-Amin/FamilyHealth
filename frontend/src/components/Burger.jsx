import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function Burger(props) {
  return (
    <div
      className="burgerContent"
      style={props.slide ? { display: "inline-block" } : { display: "none" }}
    >
      <CloseIcon 
      fontSize="large"
        onClick={() => {
          props.setSlide(!props.slide);
        }}
      />
      <div className="firstPartBurger">
        <a>Business</a>
        <a>About</a>
        <a>Advice</a>
        <a>FAQ </a>
        <a>Reviews</a>
        <a>Therapist</a>
        <a>Jobs</a>
        <a>Contact</a>
      </div>
      <div className="secondPartBurger">
        <a>asdasd</a>
        <a>asdasd</a>
        <a>asdsad</a>
      </div>
    </div>
  );
}

export default Burger;
