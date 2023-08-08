import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import Burger from "./Burger";

function Navbar() {
  const [slide, setSlide] = useState(false);
  return (
    <div>
      <Burger slide={slide} setSlide={setSlide} />
      <nav>
        <div className="navIcons">
          <MenuIcon
            sx={{ zIndex: "10", marginLeft: "20px" }}
            fontSize="large"
            onClick={() => {
              setSlide(!slide);
            }}
          />
        </div>
        {/* <Burger/> */}
    <img className="logo" src="./images/logo.png" /> 
        
        <div className="navIcons">
          <PhoneIcon fontSize="large" sx={{marginRight: "20px"}}/>
        </div>
        <div className="navFirstPart">
          <a>Business</a>
          <a>About</a>
          <a>Advice</a>
          <a>FAQ </a>
          <a>Reviews</a>
          <a>Therapist</a>
          <a>Jobs</a>
          <a>Contact</a>
        </div>
        <div className="navSecondPart">
          <a>asdasd</a>
          <a>asdasd</a>
          <a>asdsad</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
