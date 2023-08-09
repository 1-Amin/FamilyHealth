import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import Burger from "./Burger";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";

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
        <Link to="/">
          <img className="logo" src="./images/logo.png" />
        </Link>

        <div className="navIcons">
          <PhoneIcon fontSize="large" sx={{ marginRight: "20px" }} />
        </div>
        <div className="navFirstPart">
          <Link to="/notFound">Business</Link>
          <Link to="/notFound">About</Link>
          <Link to="/notFound">Advice</Link>
          <Link to="/notFound">FAQ </Link>
          <Link to="/notFound">Reviews</Link>
          <Link to="/notFound">Therapist</Link>
          <Link to="/notFound">Jobs</Link>
          <Link to="/notFound">Contact</Link>
        </div>
        <div className="navSecondPart">
          <Link to="/notFound">asdasd</Link>
          <Link to="/notFound">asdsad</Link>
          <Link to="/notFound">
            <Fab
              variant="extended"
              color="secondary"
              sx={{
                boxShadow: "none",
                backgroundColor: "#ccf1c6",
                height: "40px",
                color: "black",
                '&:hover': {
                  backgroundColor: "#e2f3e0"
                }
              
              }}
            >
              Sign Up
            </Fab>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
