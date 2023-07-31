import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from '@mui/icons-material/Phone';
function Navbar() {
  const w = window.innerWidth;
  const [navbar, setNavbar] = useState();
  return (
    <nav>
      <div className="navIcons">
        <MenuIcon fontSize="large" />
      </div>
      <img className="logo" src="./images/logo.png" />
      <div className="navIcons">
      <PhoneIcon fontSize="large"/>
      </div>
      <div className="navFirstPart">
        <a>Business</a>
        <a>About {w}</a>
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
  );
}

export default Navbar;
