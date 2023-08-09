import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterTextBox">
        <div className="FooterText">
          <Link to="/">Home</Link>
          <Link to="/notFound">Business</Link>
          <Link to="/notFound">About</Link>
          <Link to="/notFound">FAQ</Link>
          <Link to="/notFound">Reviews</Link>
          <Link to="/notFound">Advice</Link>
        </div>
        <div className="FooterText">
          <Link to="/notFound">Careers</Link>
          <Link to="/notFound">Find a Therapist</Link>
          <Link to="/notFound">Online Therapy</Link>
          <Link to="/notFound">Contact</Link>
          <Link to="/notFound">For Therapists</Link>
        </div>
      </div>
      <div className="FooterTextBox">
        <div className="FooterText">
          <Link to="/notFound">Terms & Conditions</Link>
          <Link to="/notFound"> Privacy Policy</Link>
          <a>© 2023 FamilyHealth</a>
          <Link to="/notFound">Sharing Settings</Link>
          <Link to="/notFound">Web Accessibility</Link>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
