import React from "react";
import ImagePack from "./ImagePack";

function Therapist() {
  return (
    <div className="TherapistBox">
      <div className="TherapistText">
        <h2>Professional and credentialled therapists who you can trust</h2>
        <p>
          Tap into the world's largest network of credentialled and experienced
          therapists who can help you with a range of issues including
          depression, anxiety, relationships, trauma, grief, and more. With our
          therapists, you get the same professionalism and quality you would
          expect from an in-office therapist, but with the ability to
          communicate when and how you want.
        </p>
      </div>
      <div>
        <ImagePack />
      </div>
    </div>
  );
}

export default Therapist;
