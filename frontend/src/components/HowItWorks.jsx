import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function HowItWorks() {
  return (
    <div className="HowItWorksContainer">
      <div className="HowItWorksHeader">
        <h2>How it works</h2>
      </div>
      <div className="HowItWorksBox">
        <img
          className="HowItWorksImg"
          src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/photos/image-how-it-works-1.png?v=0177f73d2461"
        />
        <div className="HowItWorksText">
          <h4>Get matched to the best therapist for you</h4>
          <p>
            Answer a few questions to find a credentialled therapist who fits
            your needs and preferences. Tap into the largest network of
            credentialled providers.
          </p>
        </div>
      </div>
      <div className="HowItWorksArrow">
        <ArrowDownwardIcon
          sx={{ fontSize: "80px", color: "#c075cd", display: "block" }}
        />
      </div>
      <div className="HowItWorksBox">
        <img
          className="HowItWorksImg"
          src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/photos/image-how-it-works-2.png?v=0177f73d2461"
        />
        <div className="HowItWorksText">
          <h4>Communicate your way</h4>
          <p>
            Talk to your therapist however you feel comfortable — text, chat,
            phone, or video.
          </p>
        </div>
      </div>
      <div className="HowItWorksArrow">
        <ArrowDownwardIcon
          sx={{ fontSize: "80px", color: "#c075cd", display: "block" }}
        />
      </div>
      <div className="HowItWorksBox">
        <img
          className="HowItWorksImg"
          src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/photos/image-how-it-works-3.png?v=0177f73d2461"
        />
        <div className="HowItWorksText">
          <h4>Therapy when you need it</h4>
          <p>
            You can message your therapist at anytime, from anywhere. You also
            get to schedule live sessions when it's convenient for you, and can
            connect from any mobile device or computer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
