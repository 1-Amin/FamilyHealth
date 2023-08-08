import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterTextBox">
        <div className="FooterText">
          <a>Home</a>
          <a>Business</a>
          <a>About</a>
          <a>FAQ</a>
          <a>Reviews</a>
          <a>Advice</a>
        </div>
        <div className="FooterText">
          <a>Careers</a>
          <a>Find a Therapist</a>
          <a>Online Therapy</a>
          <a>Contact</a>
          <a>For Therapists</a>
        </div>
      </div>
      <div className="FooterTextBox">
        <div className="FooterText">
          <a>Terms & Conditions</a>
          <a> Privacy Policy</a>
          <a>Sharing Settings</a>
          <a>Web Accessibility</a>
          <a>© 2023 FamilyHealth</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
